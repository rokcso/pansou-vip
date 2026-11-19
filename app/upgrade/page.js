import BrandTransition from "../components/brandTransition";
import JsonLd from "../components/seo/jsonLd";

const SITE_URL = "https://www.pansou.vip";
const PAGE_PATH = "/upgrade";
const PAGE_TITLE = "盘搜VIP升级为PanHunt - 品牌升级说明";
const PAGE_DESCRIPTION =
  "盘搜VIP正在升级为PanHunt。了解两个品牌和域名的关系，以及工具导航、评分标准和资源论坛在新站的对应入口。";
const PREVIEW_IMAGE = "/img/preview-new.png";

/**
 * openGraph / twitter 必须整块重写：Next 的 metadata 是浅合并，子页面只写
 * title / description / alternates 时，layout.js 里那块 openGraph（含
 * url: 首页地址）会被完整继承，og:url 就全都指向首页。
 */
export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  metadataBase: new URL("https://www.pansou.vip/"),
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: "盘搜VIP",
    images: [PREVIEW_IMAGE],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    // site / creator 与 layout.js 保持一致，整块重写时不能漏。
    site: "@panhunt",
    creator: "@panhunt",
    images: [PREVIEW_IMAGE],
  },
};

/**
 * 整页讲的是"盘搜VIP 变成 PanHunt 这件事"，所以是 AboutPage，mainEntity 是
 * 升级后的品牌。这里的 Organization 节点描述的是"PanHunt 是谁"，和
 * layout.js 里那个描述"本站是谁"的 Organization 不是一回事，所以不算重复
 * 输出；layout.js 那份保留不动。
 */
const upgradeJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    name: "PanHunt",
    alternateName: "盘搜VIP",
    url: "https://panhunt.com/",
  },
};

const migrationEntries = [
  ["网盘搜索工具", "PanHunt 搜索工具", "https://panhunt.com/pan-search"],
  ["资源分享论坛", "PanHunt 资源论坛", "https://panhunt.com/pan-forums"],
  ["测试评分标准", "PanHunt 评测标准", "https://panhunt.com/benchmark"],
  ["常见问题", "PanHunt 常见问题", "https://panhunt.com/faq"],
];

export default function UpgradePage() {
  return (
    <div>
      <JsonLd data={upgradeJsonLd} />
      {/* H1 曾经写成「盘搜VIP正在升级为 PanHunt」，和紧接着的品牌升级公告
          横幅（BrandTransition 自带的 <h2>，首页也在用同一份）一字不差，
          等于同一句话连着当标题用了两遍。这里把 H1 改成说明本文的标题，
          由横幅的 <h2> 去讲那句公告。 */}
      <h1>盘搜VIP 品牌升级说明</h1>
      <BrandTransition />
      <section>
        <h2>为什么升级</h2>
        <p>
          盘搜VIP从人工筛选网盘搜索工具开始，逐步积累了工具导航、资源论坛和评分标准。PanHunt 是这套经验面向下一阶段的主站：结构更清楚，工具信息更完整，评测方法和使用内容也会持续更新。
        </p>
        <p>
          两个站点在过渡期会并行服务。盘搜VIP会保留已有入口，PanHunt则成为长期更新、内容建设和品牌服务的重点。
        </p>
      </section>
      <section>
        <h2>哪些事情不会改变</h2>
        <ul>
          <li>继续以人工筛选和实际测试作为收录基础。</li>
          <li>不存储、上传或分发任何文件，只提供工具和社区入口。</li>
          <li>不以付费改变工具的自然评分和排序。</li>
          <li>继续提醒用户遵守适用法律、版权和平台规则。</li>
        </ul>
      </section>
      <section>
        <h2>从盘搜VIP继续使用</h2>
        <p>以下旧站内容已经有对应的新版入口。后续会逐步完成更精确的页面迁移。</p>
        <div>
          {migrationEntries.map(([oldName, newName, href]) => (
            <p key={oldName}>
              <b>{oldName}</b> →{" "}
              <a href={href} title={`前往${newName}`}>
                {newName}
              </a>
            </p>
          ))}
        </div>
      </section>
      <section>
        <h2>给老用户的一句话</h2>
        <p>
          如果你是通过盘搜VIP收藏或搜索来到这里，不需要重新理解一套陌生的服务。你熟悉的工具筛选思路会延续到PanHunt，只是入口、说明和判断依据会变得更完整。
        </p>
        <p>
          <a
            href="https://panhunt.com/pansou-vip-upgrade?utm_source=pansou.vip&utm_medium=upgrade_page"
            title="查看PanHunt的完整品牌升级说明"
          >
            查看 PanHunt 的完整升级说明 →
          </a>
        </p>
      </section>
    </div>
  );
}
