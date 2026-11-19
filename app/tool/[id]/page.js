import { notFound } from "next/navigation";
import {
  displayTitle,
  entrySummary,
  formatScore,
  getEntry,
  platformNames,
  platformOrder,
  relatedTools,
  searchTools,
  siteHost,
} from "../../data/catalog";
import styles from "./page.module.css";

const SITE_URL = "https://www.pansou.vip";
const OG_IMAGE = "/img/preview-new.png";

/**
 * 条目详情页：/tool/<id>
 *
 * 为什么 URL 用数据里的原始 id 而不是拼音 slug：下游 PanHunt 仓库的
 * src/lib/redirects.ts 已经有 105 条 `/tool/<这个 id>` → `/pan-search/<id 改连
 * 字符>` 的 301 规则（70 条搜索工具全覆盖）。沿用同一个 id，将来整站迁移时
 * 条目级跳转不用重写规则表，也不会丢已经攒下的内链权重。
 *
 * 为什么 pure static（dynamicParams = false + generateStaticParams）：站点是
 * output: "export" 纯静态导出，不存在运行时渲染；把 91 条全部在构建期烘成
 * HTML，爬虫拿到的是完整正文，不依赖 JS，也不会有「构建产物里少一条」的
 * 静默 404。
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return searchTools.map((tool) => ({ id: tool.id }));
}

export async function generateMetadata({ params }) {
  const entry = getEntry(params.id);
  if (!entry || entry.kind !== "tool") return {};

  const title = `${displayTitle(entry)} 怎么样？评分与点评 - 盘搜VIP`;
  const description = entrySummary(entry, 70);
  const canonical = `${SITE_URL}/tool/${entry.id}`;

  // openGraph / twitter 与页面自己的 title、description 完全一致：两处不一致
  // 时，分享卡片上出现的是一句话，搜索结果里是另一句话。
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "盘搜VIP",
      type: "article",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@panhunt",
      creator: "@panhunt",
      images: [OG_IMAGE],
    },
  };
}

export default function ToolDetailPage({ params }) {
  const entry = getEntry(params.id);
  if (!entry || entry.kind !== "tool") notFound();

  const canonical = `${SITE_URL}/tool/${entry.id}`;
  const description = entrySummary(entry, 70);
  const host = siteHost(entry.url);

  // 平台按规范顺序排列；不认识的码排在最后并原样显示，避免新增平台时这条
  // 直接消失。
  const knownPlatforms = platformOrder.filter((code) =>
    entry.platforms.includes(code),
  );
  const extraPlatforms = entry.platforms.filter(
    (code) => !platformOrder.includes(code),
  );
  const platforms = [...knownPlatforms, ...extraPlatforms].map(
    (code) => platformNames[code] || code,
  );

  // nofollow 只对数据里标记过的条目生效（黑名单 / 未达推荐标准），
  // noopener noreferrer 则始终加上：新窗口打开的每个外链都必须切断
  // window.opener，否则对方页面可以用 window.opener.location 反向跳转本页。
  const linkRel = entry.nofollow
    ? "nofollow noopener noreferrer"
    : "noopener noreferrer";

  const related = relatedTools(entry, 3);
  // 同档位凑不满 3 条时会从其他档位补（见 catalog.relatedTools 的说明），
  // 这时标题不能再写「同类工具」。
  const relatedHeading = related.every((tool) => tool.tier === entry.tier)
    ? "同类工具"
    : "其他工具";

  // 只用 WebPage + BreadcrumbList。**不加 Review / AggregateRating /
  // Product**：这里的评分是本站人工测试的加权结果，不是可验证的用户评价，
  // 标成评分富媒体结果属于违反 Google 结构化数据政策，会被人工处罚。
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        url: canonical,
        name: `${entry.title} 怎么样？评分与点评 - 盘搜VIP`,
        description,
        inLanguage: "zh-CN",
        isPartOf: {
          "@type": "WebSite",
          name: "盘搜VIP",
          url: `${SITE_URL}/`,
        },
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "盘搜VIP",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: entry.title,
          },
        ],
      },
    ],
  };

  return (
    <article className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className={styles.breadcrumb} aria-label="面包屑导航">
        <a href="/" title="盘搜VIP首页">
          盘搜VIP
        </a>
        <span className={styles.breadcrumbSep}>›</span>
        <span className={styles.breadcrumbCurrent}>{entry.title}</span>
      </nav>

      <header className={styles.header}>
        <h1 className={styles.title}>{entry.title}</h1>
        <div className={styles.badges}>
          <span className={styles.tierBadge}>{entry.tierLabel}</span>
          {/* 评分只在这一条真的有分时才出现：0 分是「尚无评分」，不是「0 分」。 */}
          {entry.score > 0 && (
            <span className={styles.scoreBadge}>
              {formatScore(entry.score)} / 5 分
            </span>
          )}
          {host && <span className={styles.hostBadge}>{host}</span>}
        </div>
      </header>

      <section className={styles.panel} aria-labelledby="verdict">
        <h2 className={styles.sectionTitle} id="verdict">
          人工测试结论
        </h2>
        {entry.advantages.length > 0 && (
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>🌟 优点</h3>
            <p>{entry.advantages}</p>
          </div>
        )}
        {entry.disadvantages.length > 0 && (
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>🚫 缺点</h3>
            <p>{entry.disadvantages}</p>
          </div>
        )}
        {entry.description.length > 0 && (
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>🧻 点评</h3>
            <p>{entry.description}</p>
          </div>
        )}
      </section>

      {platforms.length > 0 && (
        <section className={styles.panel} aria-labelledby="platforms">
          <h2 className={styles.sectionTitle} id="platforms">
            支持平台
          </h2>
          <ul className={styles.platformList}>
            {platforms.map((name) => (
              <li className={styles.platformTag} key={name}>
                {name}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className={styles.actions}>
        <a
          className={styles.visitBtn}
          href={entry.url}
          title={`前往 ${entry.title}`}
          target="_blank"
          rel={linkRel}
        >
          访问 {entry.title} ↗
        </a>
        <p className={styles.rubricNote}>
          评分口径见{" "}
          <a href="/rubric" title="盘搜VIP 网盘搜索工具评分标准">
            盘搜VIP 测试评分标准
          </a>
          。
        </p>
      </section>

      {related.length > 0 && (
        <section className={styles.panel} aria-labelledby="related">
          <h2 className={styles.sectionTitle} id="related">
            {relatedHeading}
          </h2>
          <ul className={styles.relatedList}>
            {related.map((tool) => (
              <li key={tool.id}>
                <a
                  className={styles.relatedCard}
                  href={`/tool/${tool.id}`}
                  title={`${tool.title} 的点评`}
                >
                  <span className={styles.relatedTitle}>{tool.title}</span>
                  <span className={styles.relatedMeta}>
                    {tool.tierLabel}
                    {tool.score > 0 && ` · ${formatScore(tool.score)} / 5 分`}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className={styles.backLink}>
        <a href="/" title="返回全部网盘搜索工具">
          ← 返回全部工具
        </a>
      </p>
    </article>
  );
}
