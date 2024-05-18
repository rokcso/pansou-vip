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
    platform: [
      "ali",
      "baidu",
      "quark",
      "xunlei",
      "lanzou",
      "uc",
      "tianyi",
      "yidong",
    ],
  };
  // 如果 cardInfo 无则使用 defaultCardInfo 作为 info
  const info = cardInfo || defaultCardInfo;

  // 根据 cardInfo 中的 score 来生成对应的 Emoji 字符串
  const scoreSymbols = Array.from({ length: cardInfo.score }, () => "⭐").join(
    ""
  );

  // 将 platform 映射到对应的中文名称
  const platformTranslation = {
    ali: "阿里云盘",
    baidu: "百度网盘",
    quark: "夸克网盘",
    xunlei: "迅雷网盘",
    lanzou: "蓝奏云",
    uc: "UC网盘",
    tianyi: "天翼云盘",
    yidong: "移动云盘",
  };
  const translatedPlatforms = info.platform.map(platform => platformTranslation[platform]);

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
      <div>
        <div>
          <a href={info.url} target="_blank">
            <h2>{info.title}</h2>
          </a>
        </div>
        <div>
          <button onClick={copyToClipboard}>
            <Copy theme="outline" size="16" fill="#fff" />
          </button>
          <a href={info.url} target="_blank">
            <Share theme="outline" size="16" fill="#fff" />
          </a>
        </div>
      </div>
      <div>
        <p>{scoreSymbols}</p>
        <p>{info.description}</p>
      </div>
      <div>
        <div>
          {translatedPlatforms.map((name, index) => (
            <PlatformTag key={index} platformName={name} />
          ))}
        </div>
      </div>
    </div>
  );
}
