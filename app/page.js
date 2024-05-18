"use client";

import Hero from "./components/hero";
import Card from "./components/card";
import styles from "./page.module.css";

export default function Home() {
  // 模拟数据
  const siteList = [
    {
      id: "search_engine_1",
      title: "云盘搜索大师",
      url: "https://search.clouddrive.com/",
      description: "一站式云盘资源搜索平台",
      score: 4,
      platform: ["ali", "baidu", "quark"],
    },
    {
      id: "search_engine_2",
      title: "网盘猎人",
      url: "https://www.diskhunter.net/",
      description: "专业的网盘资源搜索服务",
      score: 5,
      platform: ["xunlei", "lanzou", "uc"],
    },
    {
      id: "search_engine_3",
      title: "资源探索者",
      url: "https://www.resourceexplorer.com/",
      description: "发现最新的网盘共享资源",
      score: 3,
      platform: ["tianyi", "yidong", "ali"],
    },
    {
      id: "search_engine_4",
      title: "云盘宝库",
      url: "https://www.cloudtreasure.net/",
      description: "海量云盘资源，一键搜索",
      score: 4,
      platform: ["baidu", "quark", "xunlei"],
    },
    {
      id: "search_engine_5",
      title: "快搜网盘",
      url: "https://www.quicksearchdisk.com/",
      description: "快速搜索你的网盘资源",
      score: 5,
      platform: ["lanzou", "uc", "tianyi"],
    },
  ];

  return (
    <div>
      <Hero />
      <div className={styles.container}>
        {siteList.map((cardInfo, index) => (
          <Card key={index} cardInfo={cardInfo} />
        ))}
      </div>
    </div>
  );
}
