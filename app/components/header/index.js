import styles from "./index.module.css";

export default function () {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.homeTab}>
          <a href="/" title="盘搜VIP的首页">
            <span className={styles.icon}>⛅</span>&nbsp;
            <span>盘搜VIP</span>
          </a>
        </div>
        <div className={styles.headerLink}>
          {/* <a href="/changelog">
                <span>Changelog</span>
            </a> */}
          <a href="/about" title="盘搜VIP的关于页面">
            <span>
              <b>常见问题</b>
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
