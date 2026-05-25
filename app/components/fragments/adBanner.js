import styles from "./adBanner.module.css";

export default function AdBanner() {
  return (
    <a href="https://panhunt.com/sale" title="网站出售" target="_blank" rel="nofollow" className={styles.noteLink}>
      <div className={styles.note}>
        <b>📢 PanHunt（含 panhunt.com + pansou.vip 双域名）出售中，欢迎咨询！</b>
      </div>
    </a>
  );
}
