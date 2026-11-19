import { notFound } from "next/navigation";
import {
  displayTitle,
  entrySummary,
  forumSites,
  getEntry,
  platformNames,
  platformOrder,
  siteHost,
} from "../../data/catalog";
import styles from "./page.module.css";

const SITE_URL = "https://www.pansou.vip";
const OG_IMAGE = "/img/preview-new.png";

/**
 * 条目详情页：/forum/<id>
 *
 * 和 /tool/<id> 是同一套结构，两处差别是有原因的：
 *
 * 1. **不显示分数。** 21 条社区数据的 score 全是 0，/forum 页也明确写着
 *    「尚没有针对资源论坛的评分标准」。把 0 渲染成「0 分」，等于给一个没人
 *    评过的条目打了个最差分，是错的信息；显示成「暂无评分」也只是把 0 换
 *    个说法，仍然是页面上没有信息量的一个框，所以整块不渲染。
 * 2. **URL 用 /forum/<id> 而不是 /tool/<id>。** 下游 PanHunt 的 301 规则表
 *    只覆盖搜索工具那 105 条，论坛条目到那边是另一套分类（/pan-forums），
 *    沿用 /tool/ 前缀反而会在迁移时错配。
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return forumSites.map((site) => ({ id: site.id }));
}

export async function generateMetadata({ params }) {
  const entry = getEntry(params.id);
  if (!entry || entry.kind !== "forum") return {};

  const title = `${displayTitle(entry)} - 网盘资源社区 | 盘搜VIP`;
  const description = entrySummary(entry, 70);
  const canonical = `${SITE_URL}/forum/${entry.id}`;

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

export default function ForumDetailPage({ params }) {
  const entry = getEntry(params.id);
  if (!entry || entry.kind !== "forum") notFound();

  const canonical = `${SITE_URL}/forum/${entry.id}`;
  const description = entrySummary(entry, 70);
  const host = siteHost(entry.url);

  const knownPlatforms = platformOrder.filter((code) =>
    entry.platforms.includes(code),
  );
  const extraPlatforms = entry.platforms.filter(
    (code) => !platformOrder.includes(code),
  );
  const platforms = [...knownPlatforms, ...extraPlatforms].map(
    (code) => platformNames[code] || code,
  );

  const linkRel = entry.nofollow
    ? "nofollow noopener noreferrer"
    : "noopener noreferrer";

  // 社区没有档位，取「循环相接的下 3 条」而不是固定的前 3 条：固定前 3 条会
  // 让 21 个页面里绝大多数只往外指同几个站，循环取能让 21 条彼此都分到入链。
  const startIndex = forumSites.findIndex((site) => site.id === entry.id);
  const related = [1, 2, 3]
    .map((offset) => forumSites[(startIndex + offset) % forumSites.length])
    .filter((site) => site.id !== entry.id);

  // 只用 WebPage + BreadcrumbList，理由同 /tool/<id>：社区条目连分数都没有，
  // 更没有任何可验证的评价数据可以标成 Review / AggregateRating。
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        url: canonical,
        name: `${entry.title} - 网盘资源社区 | 盘搜VIP`,
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
            name: "网盘资源社区",
            item: `${SITE_URL}/forum`,
          },
          {
            "@type": "ListItem",
            position: 3,
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
        <a href="/forum" title="网盘资源分享论坛列表">
          网盘资源社区
        </a>
        <span className={styles.breadcrumbSep}>›</span>
        <span className={styles.breadcrumbCurrent}>{entry.title}</span>
      </nav>

      <header className={styles.header}>
        <h1 className={styles.title}>{entry.title}</h1>
        <div className={styles.badges}>
          <span className={styles.kindBadge}>网盘资源社区</span>
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
            支持的网盘
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
          资源社区目前没有评分标准，仅保证收录时可以正常访问。
        </p>
      </section>

      {related.length > 0 && (
        <section className={styles.panel} aria-labelledby="related">
          <h2 className={styles.sectionTitle} id="related">
            其他社区
          </h2>
          <ul className={styles.relatedList}>
            {related.map((site) => (
              <li key={site.id}>
                <a
                  className={styles.relatedCard}
                  href={`/forum/${site.id}`}
                  title={`${site.title} 的介绍`}
                >
                  <span className={styles.relatedTitle}>{site.title}</span>
                  <span className={styles.relatedMeta}>
                    {siteHost(site.url)}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className={styles.backLink}>
        <a href="/forum" title="返回全部网盘资源社区">
          ← 返回全部社区
        </a>
      </p>
    </article>
  );
}
