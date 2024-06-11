"use client";

import Hero from "./components/hero";
import Card from "./components/card";
import AdBanner from "./components/fragments/adBanner";
import styles from "./page.module.css";
import featuredSites from "../public/data/featuredSites.json";
import userRecommendedSites from "../public/data/userRecommendedSites.json";
import noTestSites from "../public/data/noTestSites.json";

export default function Home() {
  // 全局常量
  const lastUpdateDateStr = "2024-06-11";

  // 模拟数据
  // const siteList = [
  //   {
  //     id: "pikaso_top",
  //     title: "皮卡搜索",
  //     url: "https://www.pikaso.top/",
  //     description: "",
  //     score: 0,
  //     platforms: ["ali", "baidu", "quark", "tianyi", "lanzou"],
  // }
  // ];

  return (
    <div>
      <Hero lastUpdateDateStr={lastUpdateDateStr} />
      <AdBanner />
      <div className={styles.main}>
        <div>
          <h2>精选工具</h2>
          <p>
            💯 以下工具均经过全面人工测试可用且好用，推荐使用（<b>非广告</b>
            ），推荐值 👍👍👍👍👍 为满分。
          </p>
          <br />
        </div>
        <div className={styles.siteList}>
          {featuredSites.map((cardInfo, index) => (
            <Card key={index} cardInfo={cardInfo} />
          ))}
        </div>
        <div>
          <h2>用户推荐</h2>
          <p>
            🥳
            以下工具均来自用户推荐，且经过一定程度的人工测试筛选，较为好用。如果你也有好用的网盘搜索工具，欢迎
            👉
            <a
              href="https://cvlr2wiufrz.feishu.cn/share/base/form/shrcnAPSuz3I1DJ2z722woXjHnc"
              title="网盘搜索工具投稿问卷链接"
              target="_blank"
            >
              投稿
            </a>
            。
          </p>
          <br />
        </div>
        <div className={styles.siteList}>
          {userRecommendedSites.map((cardInfo, index) => (
            <Card key={index} cardInfo={cardInfo} />
          ))}
        </div>
        <div>
          <h2>备用工具</h2>
          <p>
            💢 以下工具均未经过全面人工测试，<b>仅保证能正常访问</b>
            ，在精选工具不满足需求时可自行选择以下工具作为备用。
          </p>
          <br />
        </div>
        <div className={styles.siteList}>
          {noTestSites.map((cardInfo, index) => (
            <Card key={index} cardInfo={cardInfo} />
          ))}
        </div>
      </div>
      <AdBanner />
    </div>
  );
}
