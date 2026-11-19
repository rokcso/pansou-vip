import Card from "../components/card";
import AdSlot from "../components/adSlot";
import JsonLd from "../components/seo/jsonLd";
import forumSites from "../../public/data/forumSites.json";
import styles from "./page.module.css";

const SITE_URL = "https://www.pansou.vip";
const PAGE_PATH = "/forum";
const PAGE_TITLE = "网盘资源分享论坛 - 盘搜VIP - 网盘搜索工具精选导航";
const PAGE_DESCRIPTION =
  "整理了一些实用的网盘资源分享论坛，都经过人工测试筛选，比如网盘小站、网盘资源共享站等等。";
const PREVIEW_IMAGE = "/img/preview-new.png";

/**
 * openGraph / twitter 必须在这里整块重写，不能只改 title 和 description。
 *
 * Next 的 metadata 是逐字段浅合并：只要子页面没有提供 `openGraph`，父级
 * app/layout.js 里那一整块就会被原样继承下来——标题、描述、以及最要命的
 * `url: "https://www.pansou.vip/"` 都会指向首页，四个子页面的 og:url 全部
 * 塌成同一个地址。所以这里把 openGraph 和 twitter 整块写全，title /
 * description 用本页的，url 用本页 canonical。
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
    // site / creator 与 layout.js 保持一致，只是「整块重写」时不能漏。
    site: "@panhunt",
    creator: "@panhunt",
    images: [PREVIEW_IMAGE],
  },
};

/**
 * 论坛列表的 ItemList。
 *
 * 数据直接由 forumSites.json 派生，和下面渲染的卡片用的是同一个数组——
 * 不手抄一份名单，否则调整收录后 schema 会和页面长期不一致。
 *
 * itemListElement 的 url 指向 /forum/<id>：这些详情页当前还不存在，但 schema
 * 里的 URL 只表达「这一条挂在哪个地址」，先按最终规则写好，页面补齐时不用
 * 回来改这里。
 */
const forumListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "收录的资源社区",
  itemListElement: forumSites.map((site, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: site.title,
    url: `${SITE_URL}${PAGE_PATH}/${site.id}`,
  })),
};

export default function Home() {
  return (
    <div>
      <JsonLd data={forumListJsonLd} />
      <h1>网盘资源分享论坛</h1>
      <br />
      <p>
        整理了一些实用的网盘资源分享论坛，都经过人工测试筛选，但是尚没有针对资源论坛的评分标准，仅保证其能正常访问，暂时收录于此。
      </p>
      {/* 卡片自身用的是 <h3>，这里补一个 <h2> 让标题层级是 H1 → H2 → H3；
          缺了它，整页就是从 <h1> 直接跳到 21 个 <h3>。 */}
      <h2>收录的资源社区</h2>
      <div className={styles.siteList}>
        {forumSites.map((cardInfo, index) => (
          <Card key={index} cardInfo={cardInfo} />
        ))}
      </div>
      {/* 论坛列表是本页唯一的实质性内容，广告只放在列表之后，不插在列表
          中间，避免读者把广告当成一条收录。 */}
      <AdSlot slot="detail" />
    </div>
  );
}
