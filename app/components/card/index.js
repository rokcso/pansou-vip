import PlatformTag from "../fragments/platformTag";
import styles from "./index.module.css";
import { Copy, Share } from "@icon-park/react";
import { detailHref } from "../../data/catalog";

/**
 * 卡片底部的「查看点评 →」内链。
 *
 * 为什么用内联样式而不是 index.module.css：这份卡片样式的改动面要和「加一条
 * 内链」严格对齐，内联样式把改动收在唯一的这个文件里，也顺手保证内联样式
 * 的优先级盖住 `.card a` 那条模块规则（它会把颜色压成 #333、去掉下划线）。
 */
const detailBarStyle = { padding: "0 16px 14px 16px" };
const detailLinkStyle = {
  display: "inline-block",
  padding: "4px 0",
  fontSize: "14px",
  color: "#2f7b85",
  textDecoration: "underline",
  textUnderlineOffset: "2px",
};

export default function ({ cardInfo }) {
  // 为 cardInfo 提供默认值
  const defaultCardInfo = {
    id: "pansou_vip",
    title: "盘搜VIP",
    url: "https://www.pansou.vip/",
    advantages: "默认优势。",
    disadvantages: "默认劣势",
    description: "人工甄选的网盘搜索工具导航",
    nofollow: true,
    score: 5,
    factors: {},
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

  // 详情页路径。catalog 里查不到这条 id 时返回 null（例如上面的默认占位数据
  // pansou_vip 就不在目录里），此时整块内链不渲染——调用方不需要为这个能力
  // 传任何 prop，老用法原样有效。
  const detailPath = detailHref(info.id);

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
    115: "115 网盘",
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
        {...(info.nofollow && { rel: "nofollow" })}
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
          {info.advantages.length > 0 && <p>🌟 优点：{info.advantages}</p>}
          {info.disadvantages.length > 0 && (
            <p>🚫 缺点：{info.disadvantages}</p>
          )}
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
      {/* 内链必须是外层 <a> 的兄弟节点，不能放进去：整张卡片已经是一个指向
          外部站点的 <a>，嵌套 <a> 是无效 HTML，浏览器解析时会把它拆开，
          爬虫也会静默丢弃内层链接——那等于这条详情页没有任何入口。 */}
      {detailPath && (
        <div style={detailBarStyle}>
          <a
            href={detailPath}
            title={`${info.title} 的详细点评`}
            style={detailLinkStyle}
          >
            查看点评 →
          </a>
        </div>
      )}
    </div>
  );
}
