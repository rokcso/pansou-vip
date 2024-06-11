import styles from "./adBanner.module.css";

export default function AdBanner() {
  return (
    <a
      href="https://rydnl.yhzu.cn/"
      title="淘宝优惠商城"
      className={styles.noteLink}
    >
      <div className={styles.note}>
        💰 <b>淘宝隐藏优惠券</b>：薅羊毛精选，每日严选大牌，1 折起购好物！
      </div>
    </a>
  );
}
