import styles from "./index.module.css";

export default function () {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.homeTab}>
          <a href="/">
            <span className={styles.icon}>⛅</span>&nbsp;
            <span>盘搜VIP</span>
          </a>
        </div>
        <div className={styles.headerLink}>
            <a href="/changelog">
                <span>Changelog</span>
            </a>
          <a href="/about">
            <span>About</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
