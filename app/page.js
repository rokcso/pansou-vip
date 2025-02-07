"use client";

import Hero from "./components/hero";
import Card from "./components/card";
import AdBanner from "./components/fragments/adBanner";
import { useState } from "react";
import styles from "./page.module.css";
import featuredSites from "../public/data/featuredSites.json";
import secondaryFeaturedSites from "../public/data/secondaryFeaturedSites.json";
import standbySites from "../public/data/standbySites.json";
import blackSites from "../public/data/blackSites.json";
import wastedSites from "../public/data/wastedSites.json";
import forumSites from "../public/data/forumSites.json";

export default function Home() {
  const [showGift, setShowGift] = useState(true);

  // 全局常量，数据最新更新时间（字符串格式）
  const lastUpdateDateStr = "2025-02-07";

  // 统计已收录的网站的数量
  const featuredSiteCount = featuredSites.length;
  const secondaryFeaturedSiteCount = secondaryFeaturedSites.length;
  const standbySiteCount = standbySites.length;
  const blackSiteCount = blackSites.length;
  const wastedSiteCount = wastedSites.length;
  const forumSiteCount = forumSites.length;
  const allSiteCount =
    featuredSiteCount +
    secondaryFeaturedSiteCount +
    standbySiteCount +
    blackSiteCount +
    wastedSiteCount +
    forumSiteCount;

  // 平台筛选，用户选择的平台的值，默认 all
  const [featuredSelectedPlatform, setFeaturedSelectedPlatform] =
    useState("all");
  const [
    secondaryFeaturedSelectedPlatform,
    setSecondaryFeaturedSelectedPlatform,
  ] = useState("all");
  const [standbySelectedPlatform, setStandbySelectedPlatform] = useState("all");
  const [blackSelectedPlatform, setBlackSelectedPlatform] = useState("all");
  const [wastedSelectedPlatform, setWastedSelectedPlatform] = useState("all");

  // 用户可用来筛选平台的选项，从 Site 数据中获取 platforms 数据，将其声明为 Set 对象可以直接去重，再转换为数组
  const featuredPlatformOptions = Array.from(
    new Set(featuredSites.flatMap((site) => site.platforms))
  );
  const secondaryFeaturedSitePlatformOptions = Array.from(
    new Set(secondaryFeaturedSites.flatMap((site) => site.platforms))
  );
  const standbySitePlatformOptions = Array.from(
    new Set(standbySites.flatMap((site) => site.platforms))
  );
  const blackSitePlatformOptions = Array.from(
    new Set(blackSites.flatMap((site) => site.platforms))
  );
  const wastedSitePlatformOptions = Array.from(
    new Set(wastedSites.flatMap((site) => site.platforms))
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
    115: "115 网盘",
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
  const featuredSortedPlatformOptions = platformOrder.filter((platform) =>
    featuredPlatformOptions.includes(platform)
  );
  const secondaryFeaturedSortedPlatformOptions = platformOrder.filter(
    (platform) => secondaryFeaturedSitePlatformOptions.includes(platform)
  );
  const standbySortedPlatformOptions = platformOrder.filter((platform) =>
    standbySitePlatformOptions.includes(platform)
  );
  const blackSortedPlatformOptions = platformOrder.filter((platform) =>
    blackSitePlatformOptions.includes(platform)
  );
  const wastedSortedPlatformOptions = platformOrder.filter((platform) =>
    wastedSitePlatformOptions.includes(platform)
  );

  // 根据用户选择的平台过滤要显示的 Site 数据
  const featuredFilteredSites =
    featuredSelectedPlatform === "all"
      ? featuredSites
      : featuredSites.filter((site) =>
          site.platforms.includes(featuredSelectedPlatform)
        );
  const featuredFilteredSortedSites = featuredFilteredSites.sort(
    (a, b) => b.score - a.score
  );
  const secondaryFeaturedFilteredSites =
    secondaryFeaturedSelectedPlatform === "all"
      ? secondaryFeaturedSites
      : secondaryFeaturedSites.filter((site) =>
          site.platforms.includes(secondaryFeaturedSelectedPlatform)
        );
  const secondaryFeaturedFilteredSortedSites =
    secondaryFeaturedFilteredSites.sort((a, b) => b.score - a.score);
  const standbyFilteredSites =
    standbySelectedPlatform === "all"
      ? standbySites
      : standbySites.filter((site) =>
          site.platforms.includes(standbySelectedPlatform)
        );
  const standbyFilteredSortedSites = standbyFilteredSites.sort(
    (a, b) => b.score - a.score
  );
  const blackFilteredSites =
    blackSelectedPlatform === "all"
      ? blackSites
      : blackSites.filter((site) =>
          site.platforms.includes(blackSelectedPlatform)
        );
  const blackFilteredSortedSites = blackFilteredSites.sort(
    (a, b) => b.score - a.score
  );
  const wastedFilteredSites =
    wastedSelectedPlatform === "all"
      ? wastedSites
      : wastedSites.filter((site) =>
          site.platforms.includes(wastedSelectedPlatform)
        );
  const wastedFilteredSortedSites = wastedFilteredSites.sort(
    (a, b) => b.score - a.score
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
      <AdBanner />
      <div className={styles.main}>
        {/* 精选工具 Start */}
        {featuredFilteredSortedSites.length > 0 && (
          <div>
            <h2>精选工具</h2>
            {/* 筛选组件 */}
            <div className={styles.filterDiv}>
              <span>平台筛选 👉 </span>
              <select
                value={featuredSelectedPlatform}
                onChange={(e) => setFeaturedSelectedPlatform(e.target.value)}
              >
                <option value={"all"}>全部</option>
                {featuredSortedPlatformOptions.map((platformKey) => {
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
              💯 以下工具均已完成全面人工测试，且
              <a href="/rubric" title="盘搜VIP 网盘搜索工具评分标准">
                得分（满分 5 分）优秀
              </a>
              ，特别推荐！如果你也有好用的网盘搜索工具，欢迎 👉{" "}
              <a
                href="https://cvlr2wiufrz.feishu.cn/share/base/form/shrcnAPSuz3I1DJ2z722woXjHnc"
                title="网盘搜索工具投稿问卷链接"
                target="_blank"
                rel="nofollow"
              >
                投稿推荐
              </a>
              。
            </p>
            <div className={styles.siteList}>
              {featuredFilteredSortedSites.map((cardInfo, index) => (
                <Card key={index} cardInfo={cardInfo} />
              ))}
            </div>
          </div>
        )}
        {/* 精选工具 End */}
        {/* 用户推荐 Start */}
        {secondaryFeaturedFilteredSortedSites.length > 0 && (
          <div>
            <h2>次要推荐</h2>
            {/* 筛选组件 */}
            <div className={styles.filterDiv}>
              <span>平台筛选 👉 </span>
              <select
                value={secondaryFeaturedSelectedPlatform}
                onChange={(e) =>
                  setSecondaryFeaturedSelectedPlatform(e.target.value)
                }
              >
                <option value={"all"}>全部</option>
                {secondaryFeaturedSortedPlatformOptions.map((platformKey) => {
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
            <p>🥳 以下工具均已完成全面人工测试，且得分及格，推荐使用！</p>
            <div className={styles.siteList}>
              {secondaryFeaturedFilteredSortedSites.map((cardInfo, index) => (
                <Card key={index} cardInfo={cardInfo} />
              ))}
            </div>
          </div>
        )}
        {/* 用户推荐 End */}
        {/* 备用工具 Start */}
        {standbyFilteredSortedSites.length > 0 && (
          <div>
            <h2>备用工具</h2>
            {/* 筛选组件 */}
            <div className={styles.filterDiv}>
              <span>平台筛选 👉 </span>
              <select
                value={standbySelectedPlatform}
                onChange={(e) => setStandbySelectedPlatform(e.target.value)}
              >
                <option value={"all"}>全部</option>
                {standbySortedPlatformOptions.map((platformKey) => {
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
              💢
              以下部分工具均已完成全面人工测试（未测试完成工具将尽快测试完成），但得分较低，不作推荐，但在高分工具不满足需求时可自行选择使用。
            </p>
            <div className={styles.siteList}>
              {standbyFilteredSortedSites.map((cardInfo, index) => (
                <Card key={index} cardInfo={cardInfo} />
              ))}
            </div>
          </div>
        )}
        {/* 备用工具 End */}
        {/* 黑名单工具 Start */}
        {blackFilteredSortedSites.length > 0 && (
          <div>
            <h2>黑名单工具</h2>
            {/* 筛选组件 */}
            <div className={styles.filterDiv}>
              <span>平台筛选 👉 </span>
              <select
                value={blackSelectedPlatform}
                onChange={(e) => setBlackSelectedPlatform(e.target.value)}
              >
                <option value={"all"}>全部</option>
                {blackSortedPlatformOptions.map((platformKey) => {
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
              🤮 <b>以下工具经过人工测试难用至极，请慎重使用。</b>
            </p>
            <div className={styles.siteList}>
              {blackFilteredSortedSites.map((cardInfo, index) => (
                <Card key={index} cardInfo={cardInfo} />
              ))}
            </div>
          </div>
        )}
        {/* 黑名单工具 End */}
        {/* 废弃工具 Start */}
        {wastedFilteredSortedSites.length > 0 && (
          <div>
            <h2>废弃工具</h2>
            {/* 筛选组件 */}
            <div className={styles.filterDiv}>
              <span>平台筛选 👉 </span>
              <select
                value={wastedSelectedPlatform}
                onChange={(e) => setWastedSelectedPlatform(e.target.value)}
              >
                <option value={"all"}>全部</option>
                {wastedSortedPlatformOptions.map((platformKey) => {
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
              🗑️
              以下工具曾经收录，但最新测试时已不可用，暂存于此，恢复后再添加回上面正常分类。
            </p>
            <div className={styles.siteList}>
              {wastedFilteredSortedSites.map((cardInfo, index) => (
                <Card key={index} cardInfo={cardInfo} />
              ))}
            </div>
          </div>
        )}
        {/* 废弃工具 End */}
      </div>
      {/* 礼物 */}
      {/* <div
        className={`${styles.gift} ${
          showGift ? styles.showGift : styles.hideGift
        }`}
        onClick={() => {
          showGift ? setShowGift(false) : setShowGift(true);
        }}
      >
        {showGift ? (
          <div className={styles.giftContent}>
            <div className={styles.textArea}>
              <b>💰 副业赚钱</b>
              <div>
                <p>
                  搭建专属的网盘搜索工具，轻松赚取网盘分佣！还有更多副业项目...
                </p>
              </div>
            </div>
            <div className={styles.btnArea}>
              <button
                className={styles.upBtn}
                onClick={() => {
                  setShowGift(false);
                }}
              >
                我知道了
              </button>
              <hr />
              <button
                className={styles.downBtn}
                onClick={() => {
                  window.location.href = "/gift";
                }}
              >
                我去看看
              </button>
            </div>
          </div>
        ) : (
          "💰"
        )}
      </div> */}
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
