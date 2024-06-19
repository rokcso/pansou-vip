import styles from "./adBanner.module.css";

export default function AdBanner() {
  return (
    // <a
    //   href="https://rydnl.yhzu.cn/"
    //   title="淘宝优惠商城"
    //   className={styles.noteLink}
    // >
    //   <div className={styles.note}>
    //     💰 <b>淘宝隐藏优惠券</b>：薅羊毛精选，每日严选大牌，1 折起购好物！
    //   </div>
    // </a>
    <a
      href="/rubric"
      title="盘搜VIP的网盘搜索工具评分标准"
      className={styles.noteLink}
    >
      <div className={styles.note}>
        <b>《盘搜VIP 网盘搜索工具评分标准》上线啦！</b>🎉
        平台收录的所有工具都将按照本评分标准进行人工测试，预计一周内完成。
      </div>
    </a>
  );
}
