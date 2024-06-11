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
          <a href="/forum" title="网盘资源分享论坛导航">
            <span>
              <b>资源论坛</b>
            </span>
          </a>
          <a href="/faq" title="盘搜VIP的常见问题页面">
            <span>
              <b>常见问题</b>
            </span>
          </a>
          <a href="/about" title="盘搜VIP的关于页面">
            <span>
              <b>关于</b>
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
