/**
 * 条目目录（catalog）：把散在 public/data/ 下的 6 份 JSON 合并成一份带类型
 * 标记的清单，供条目详情页（/tool/[id]、/forum/[id]）和卡片内链共用。
 *
 * 为什么放进 app/ 而不是 public/：App Router 只把 page / layout / route 当
 * 路由文件，app/ 下的其他模块不会生成路由（app/config/adsense.js 是同一种
 * 用法）。放进 public/ 反而会被原样拷到产物里，成为一份可被外部读取的重复
 * 数据。
 *
 * 为什么不让调用方各自 import JSON：卡片要给 91 条里的每一条生成详情页内链，
 * 首页 / 论坛页 / 两个详情页要判断「这个 id 是工具还是社区」，判断口径必须
 * 只有一份。散落之后新增一份 JSON 就会有人漏改，漏改的表现是「某条详情页
 * 存在但没有任何入口」，静默且难查。
 *
 * 注意两条硬约束：
 * 1. **这里只做视图附加标记（kind / tier / tierLabel），不改动任何原始字段。**
 *    评分、优点、缺点、评论的文案是人工测试结论，一个字都不许动。
 * 2. **id 是 URL 的一部分，完全沿用数据里的原始 id。** 下游 PanHunt 仓库的
 *    src/lib/redirects.ts 里已经有 105 条 `/tool/<这个 id>` →
 *    `/pan-search/<id 改连字符>` 的 301 规则，本站条目 URL 用同一个 id，
 *    将来迁移时跳转是现成的，不需要重写规则表。
 */
import featuredSites from "../../public/data/featuredSites.json";
import secondaryFeaturedSites from "../../public/data/secondaryFeaturedSites.json";
import standbySites from "../../public/data/standbySites.json";
import blackSites from "../../public/data/blackSites.json";
import wastedSites from "../../public/data/wastedSites.json";
import forumSitesData from "../../public/data/forumSites.json";

/**
 * 工具档位，顺序即首页的展示顺序（精选 → 次要推荐 → 备用 → 黑名单 → 废弃）。
 * 详情页用它显示「所属档位」，并且「同类工具」按档位取条目。
 *
 * wastedSites 目前是空数组，仍然列出：它是首页「废弃工具」区块的数据源，
 * 一旦有人往 JSON 里加回条目，这里不需要再改。
 */
const TOOL_TIERS = [
  { tier: "featured", sites: featuredSites },
  { tier: "secondary", sites: secondaryFeaturedSites },
  { tier: "standby", sites: standbySites },
  { tier: "black", sites: blackSites },
  { tier: "wasted", sites: wastedSites },
];

/** 档位码 → 页面上显示的中文名。 */
export const tierLabels = {
  featured: "精选工具",
  secondary: "次要推荐",
  standby: "备用工具",
  black: "黑名单工具",
  wasted: "废弃工具",
};

/** 平台码的规范顺序，页面和卡片都按它排列，避免同一条工具在两个页面里
 *  的平台顺序不一致。 */
export const platformOrder = [
  "ali",
  "baidu",
  "quark",
  "xunlei",
  "lanzou",
  "uc",
  "tianyi",
  "yidong",
  "weiyun",
  "115",
];

/** 平台码 → 中文名。与卡片里的码表同源，这里导出后详情页共用。 */
export const platformNames = {
  ali: "阿里云盘",
  baidu: "百度网盘",
  quark: "夸克网盘",
  xunlei: "迅雷网盘",
  lanzou: "蓝奏云",
  uc: "UC 网盘",
  tianyi: "天翼云盘",
  yidong: "移动云盘",
  weiyun: "腾讯微云",
  115: "115 网盘",
};

/**
 * 把一条原始数据加工成「目录条目」：只增加标记字段，其余原样保留。
 *
 * @param {object} site   public/data 里的原始条目
 * @param {"tool"|"forum"} kind
 * @param {string} [tier] 工具所属档位
 */
function toEntry(site, kind, tier) {
  return {
    ...site,
    kind,
    ...(tier ? { tier, tierLabel: tierLabels[tier] || tier } : {}),
  };
}

/** 70 条网盘搜索工具，按档位顺序排列。 */
export const searchTools = TOOL_TIERS.flatMap(({ tier, sites }) =>
  sites.map((site) => toEntry(site, "tool", tier)),
);

/** 21 条网盘资源社区。 */
export const forumSites = forumSitesData.map((site) => toEntry(site, "forum"));

/** 91 条合集。 */
export const allEntries = [...searchTools, ...forumSites];

/**
 * 同名条目出现次数。
 *
 * 数据里有 3 组真实的重名：两个「学霸盘」、两个「云易搜」、两个「网盘小站」
 * （同名的都是不同站点，不是重复收录）。如果标题照原样拼，这几页在搜索结果
 * 里会变成两条一模一样的标题，用户无法区分、点击率白白损失。
 */
const titleCounts = allEntries.reduce((acc, entry) => {
  acc[entry.title] = (acc[entry.title] || 0) + 1;
  return acc;
}, {});

/**
 * 用于 <title> 与分享卡片的展示名。
 *
 * 独有标题原样返回；重名时追加域名（`学霸盘（xuebapan.com）`），既消歧又让
 * 用户一眼看出「评的是哪个站」。域名已在页面上单独展示，所以正文 H1 不必
 * 跟着改——这里只解决 SERP 与外部分享的可区分性。
 */
export function displayTitle(entry) {
  if (!entry) return "";
  if ((titleCounts[entry.title] || 0) <= 1) return entry.title;
  const host = siteHost(entry.url);
  return host ? `${entry.title}（${host}）` : entry.title;
}

/**
 * id → 条目。工具与社区的 id 空间目前没有重叠（迁移前核对过），所以一张表就
 * 够。万一将来撞了，这里先写入工具、后写入社区并跳过已占用的 id，让工具优先：
 * /tool/<id> 才是下游 301 规则覆盖的那一半，冲突时保它更划算。
 */
const entryIndex = new Map();
for (const entry of allEntries) {
  if (!entryIndex.has(entry.id)) entryIndex.set(entry.id, entry);
}

/** 按 id 取单条，取不到返回 null。 */
export function getEntry(id) {
  return entryIndex.get(id) || null;
}

/**
 * 详情页路径。找不到返回 null —— 卡片靠这个返回值决定「要不要渲染内链」，
 * 所以它必须容忍未知 id（卡片的默认占位数据 pansou_vip 就不在目录里）。
 */
export function detailHref(id) {
  const entry = entryIndex.get(id);
  if (!entry) return null;
  return entry.kind === "forum" ? `/forum/${entry.id}` : `/tool/${entry.id}`;
}

/**
 * 「同类工具」：先取同档位的其他条目，不够再用评分最高的其他工具补满。
 *
 * 为什么要补：黑名单档位只有 1 条，同档位凑不出任何一条，详情页就会变成
 * 一张没有任何入口的死页。详情页之间的互链是这批页面能被爬到的前提，宁可
 * 让标签略有偏差，也不要留一张孤岛页。
 */
export function relatedTools(entry, limit = 3) {
  const others = searchTools.filter((tool) => tool.id !== entry.id);
  const sameTier = others.filter((tool) => tool.tier === entry.tier);
  const rest = others
    .filter((tool) => tool.tier !== entry.tier)
    .sort((a, b) => b.score - a.score);
  return [...sameTier, ...rest].slice(0, limit);
}

/**
 * 把优点 + 缺点拼成一句 meta description，超出 maxChars 就整段收尾。
 *
 * 为什么不用 slice 直接切：中文没有空格分词，硬切常常落在词中间（「服务比
 * 较稳」），截出来的半句话会被搜索引擎当作低质量摘要。这里优先退到最近的
 * 句读符（，。；、），退无可退才硬切，并统一补一个省略号。
 */
export function entrySummary(entry, maxChars = 70) {
  const parts = [];
  if (entry.advantages) parts.push(`优点：${entry.advantages}`);
  if (entry.disadvantages) parts.push(`缺点：${entry.disadvantages}`);
  const text = parts.join(" ").replace(/\s+/g, " ").trim();

  const chars = Array.from(text);
  if (chars.length <= maxChars) return text;

  // 预留 1 个字符给省略号，保证最终长度不超过 maxChars。
  const budget = maxChars - 1;
  const head = chars.slice(0, budget).join("");
  const boundary = Math.max(
    ...["。", "！", "？", "；", "，", "、", " "].map((mark) =>
      head.lastIndexOf(mark),
    ),
  );
  // 退得太远（不足一半）说明整段几乎没有句读，退回去会丢太多信息，硬切。
  if (boundary >= Math.floor(budget * 0.5)) {
    return `${head.slice(0, boundary).replace(/[。！？；，、\s]+$/, "")}…`;
  }
  return `${head}…`;
}

/** 外链域名，用于在详情页标注「访问的是哪个站」，也顺带让同名的两条工具
 *  在正文里可区分（例如两个「网盘小站」）。 */
export function siteHost(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

/** 评分展示：保留至多两位小数并去掉无意义的 0（4.235 → 4.24，5 → 5）。 */
export function formatScore(score) {
  return String(Math.round(score * 100) / 100);
}
