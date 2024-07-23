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
          {/* <a href="https://rydnl.yhzu.cn/" title="淘宝优惠商城">
            <span>
              <b>淘宝隐藏优惠券 💸</b>
            </span>
          </a>
          <a
            href="https://lizhi.shop/site/discount/id/618?cid=y39pjk8l"
            title="数码荔枝商城页"
          >
            <span>
              <b>正版软件促销 🎉</b>
            </span>
          </a> */}
          <a href="/rubric" title="盘搜VIP的网盘搜索工具评分标准">
            <span>
              <b>《测试标准》</b>
            </span>
          </a>
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
