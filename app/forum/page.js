import AdBanner from "../components/fragments/adBanner";
import Card from "../components/card";
import forumSites from "../../public/data/forumSites.json";
import styles from "./page.module.css";

export const metadata = {
  title: "网盘资源分享论坛 - 盘搜VIP - 盘搜搜 - 网盘搜索工具精选导航",
  metadataBase: new URL("https://www.pansou.vip/"),
  alternates: {
    canonical: "/forum",
  },
};

export default function Home() {
  return (
    <div>
      <h1>网盘资源分享论坛</h1>
      {/* <AdBanner /> */}
      <div className={styles.siteList}>
        {forumSites.map((cardInfo, index) => (
          <Card key={index} cardInfo={cardInfo} />
        ))}
      </div>
    </div>
  );
}
