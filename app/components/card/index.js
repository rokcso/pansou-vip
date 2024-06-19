import PlatformTag from "../fragments/platformTag";
import styles from "./index.module.css";
import { Copy, Share } from "@icon-park/react";

export default function ({ cardInfo }) {
  // 为 cardInfo 提供默认值
  const defaultCardInfo = {
    id: "pansou_vip",
    title: "盘搜VIP",
    url: "https://www.pansou.vip/",
    description: "人工甄选的网盘搜索工具导航",
    score: 5,
    platforms: [
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
    ],
  };
  // 如果 cardInfo 无则使用 defaultCardInfo 作为 info
  const info = cardInfo || defaultCardInfo;

  // 根据 cardInfo 中的 score 来生成对应的 Emoji 字符串
  const scoreSymbols = Array.from({ length: info.score }, () => "👍").join("");

  // 指定 platform 的显示顺序
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
  // 将 platform 映射到对应的中文名称
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
  // 将传入的 platform 按照上面定义的顺序排序并且翻译成对应的中文名称
  const translatedSortedPlatforms = platformOrder
    .filter((platform) => info.platforms.includes(platform))
    .map((platform) => platformTranslation[platform]);

  // 复制链接到用户系统剪贴板
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(info.url);
      alert("Copied!");
    } catch (err) {
      console.error("Failed to copy: ", err);
      alert("Failed to copy!");
    }
  };

  return (
    <div className={styles.card}>
      <a
        href={`${info.url}?utm_source=pansou.vip/`}
        title={info.title}
        target="_blank"
      >
        <div className={styles.cardTitleAndAction}>
          <div className={styles.cardTitle}>
            <h3>{info.title}</h3>
          </div>
          {/* <div className={styles.cardAction}>
          <button onClick={copyToClipboard} className={styles.copyBtn}>
          <Copy theme="outline" size="24" fill="#fff"/>
          </button>
          <a href={info.url} target="_blank" className={styles.linkBtn}>
            <Share theme="outline" size="24" fill="#fff" />
          </a>
        </div> */}
        </div>
        <div className={styles.cardScoreAndDesc}>
          {info.score > 0 && (
            <p className={styles.cardScore}>
              {scoreSymbols}（{info.score} 分）
            </p>
          )}
          <p>🌟 优点：{info.advantages}</p>
          <p>🚫 缺点：{info.disadvantages}</p>
          {info.description.length > 0 && (
            <p className={styles.cardDesc}>🧻 评论：{info.description}</p>
          )}
        </div>
        <div className={styles.cardPlatform}>
          {translatedSortedPlatforms.map((name, index) => (
            <PlatformTag key={index} platformName={name} />
          ))}
        </div>
      </a>
    </div>
  );
}
