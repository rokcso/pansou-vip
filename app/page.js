"use client";

import Hero from "./components/hero";
import Card from "./components/card";
import AdBanner from "./components/fragments/adBanner";
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import featuredSites from "../public/data/featuredSites.json";
import userRecommendedSites from "../public/data/userRecommendedSites.json";
import noTestSites from "../public/data/noTestSites.json";
import forumSites from "../public/data/forum.json";

export default function Home() {
  // 全局常量，数据最新更新时间（字符串格式）
  const lastUpdateDateStr = "2024-06-16";

  // 统计已收录的网站的数量
  const featuredSiteCount = featuredSites.length;
  const userRecommendedSiteCount = userRecommendedSites.length;
  const noTestSiteCount = noTestSites.length;
  const forumSiteCount = forumSites.length;
  const allSiteCount =
    featuredSiteCount +
    userRecommendedSiteCount +
    noTestSiteCount +
    forumSiteCount;

  // 平台筛选，用户选择的平台的值，默认 all
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [userRecommendedSelectedPlatform, setUserRecommendedSelectedPlatform] =
    useState("all");
  const [noTestSelectedPlatform, setNoTestSelectedPlatform] = useState("all");

  // 用户可用来筛选平台的选项，从 Site 数据中获取 platforms 数据，将其声明为 Set 对象可以直接去重，再转换为数组
  const platformOptions = Array.from(
    new Set(featuredSites.flatMap((site) => site.platforms))
  );
  const userRecommendedSitePlatformOptions = Array.from(
    new Set(userRecommendedSites.flatMap((site) => site.platforms))
  );
  const noTestSitePlatformOptions = Array.from(
    new Set(noTestSites.flatMap((site) => site.platforms))
  );

  // 平台原始值标识对应的中文值
  const platformTranslation = {
    ali: "阿里云盘",
    baidu: "百度网盘",
    quark: "夸克网盘",
    xunlei: "迅雷网盘",
    lanzou: "蓝奏云",
    uc: "UC 网盘",
    tianyi: "天翼云盘",
    yidong: "移动云盘",
    weiyun: "腾讯微云",
    115: "115网盘",
  };

  // 平台值的顺序
  const platformOrder = [
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

  // 排序之后的平台选项
  const sortedPlatformOptions = platformOrder.filter((platform) =>
    platformOptions.includes(platform)
  );
  const userRecommendedSortedPlatformOptions = platformOrder.filter(
    (platform) => userRecommendedSitePlatformOptions.includes(platform)
  );
  const noTestSortedPlatformOptions = platformOrder.filter((platform) =>
    noTestSitePlatformOptions.includes(platform)
  );

  // 根据用户选择的平台过滤要显示的 Site 数据
  const filteredSites =
    selectedPlatform === "all"
      ? featuredSites
      : featuredSites.filter((site) =>
          site.platforms.includes(selectedPlatform)
        );
  const userRecommendedFilteredSites =
    userRecommendedSelectedPlatform === "all"
      ? userRecommendedSites
      : userRecommendedSites.filter((site) =>
          site.platforms.includes(userRecommendedSelectedPlatform)
        );
  const noTestFilteredSites =
    noTestSelectedPlatform === "all"
      ? noTestSites
      : noTestSites.filter((site) =>
          site.platforms.includes(noTestSelectedPlatform)
        );

  // 滚动到页面顶部的方法
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Hero lastUpdateDateStr={lastUpdateDateStr} siteCount={allSiteCount} />
      {/* <AdBanner /> */}
      <div className={styles.main}>
        <div>
          <h2>精选工具</h2>
          {/* 筛选组件 */}
          <div className={styles.filterDiv}>
            <span>平台筛选 👉 </span>
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
            >
              <option value={"all"}>全部</option>
              {sortedPlatformOptions.map((platformKey) => {
                const platformName =
                  platformTranslation[platformKey] || platformKey;
                return (
                  <option key={platformKey} value={platformKey}>
                    {platformName}
                  </option>
                );
              })}
            </select>
          </div>
          <p>
            💯 以下工具均经过全面人工测试可用且好用，推荐使用（<b>非广告</b>
            ），推荐值 👍👍👍👍👍 为满分。
          </p>
          <br />
        </div>
        <div className={styles.siteList}>
          {filteredSites.map((cardInfo, index) => (
            <Card key={index} cardInfo={cardInfo} />
          ))}
        </div>
        <div>
          <h2>用户推荐</h2>
          {/* 筛选组件 */}
          <div className={styles.filterDiv}>
            <span>平台筛选 👉 </span>
            <select
              value={userRecommendedSelectedPlatform}
              onChange={(e) =>
                setUserRecommendedSelectedPlatform(e.target.value)
              }
            >
              <option value={"all"}>全部</option>
              {userRecommendedSortedPlatformOptions.map((platformKey) => {
                const platformName =
                  platformTranslation[platformKey] || platformKey;
                return (
                  <option key={platformKey} value={platformKey}>
                    {platformName}
                  </option>
                );
              })}
            </select>
          </div>
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
          {userRecommendedFilteredSites.map((cardInfo, index) => (
            <Card key={index} cardInfo={cardInfo} />
          ))}
        </div>
        <div>
          <h2>备用工具</h2>
          {/* 筛选组件 */}
          <div className={styles.filterDiv}>
            <span>平台筛选 👉 </span>
            <select
              value={noTestSelectedPlatform}
              onChange={(e) => setNoTestSelectedPlatform(e.target.value)}
            >
              <option value={"all"}>全部</option>
              {noTestSortedPlatformOptions.map((platformKey) => {
                const platformName =
                  platformTranslation[platformKey] || platformKey;
                return (
                  <option key={platformKey} value={platformKey}>
                    {platformName}
                  </option>
                );
              })}
            </select>
          </div>
          <p>
            💢 以下工具均未经过全面人工测试，<b>仅保证能正常访问</b>
            ，在精选工具不满足需求时可自行选择以下工具作为备用。
          </p>
          <br />
        </div>
        <div className={styles.siteList}>
          {noTestFilteredSites.map((cardInfo, index) => (
            <Card key={index} cardInfo={cardInfo} />
          ))}
        </div>
      </div>
      {/* <AdBanner /> */}
      <button
        className={styles.backToTopBtn}
        title="回到顶部"
        onClick={scrollToTop}
      >
        ⬆️
      </button>
    </div>
  );
}
