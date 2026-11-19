import Card from "../components/card";
import AdSlot from "../components/adSlot";
import forumSites from "../../public/data/forumSites.json";
import styles from "./page.module.css";

export const metadata = {
  title: "网盘资源分享论坛 - 盘搜VIP - 网盘搜索工具精选导航",
  description:
    "整理了一些实用的网盘资源分享论坛，都经过人工测试筛选，比如网盘小站、网盘资源共享站等等。",
  metadataBase: new URL("https://www.pansou.vip/"),
  alternates: {
    canonical: "/forum",
  },
};

export default function Home() {
  return (
    <div>
      <h1>网盘资源分享论坛</h1>
      <br />
      <p>
        整理了一些实用的网盘资源分享论坛，都经过人工测试筛选，但是尚没有针对资源论坛的评分标准，仅保证其能正常访问，暂时收录于此。
      </p>
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
