import styles from "./layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  const lastUpdateDateString = "2024/04/21";
  const currentDate = new Date();
  const lastUpdateDate = new Date(lastUpdateDateString);
  const daysAgo = Math.floor(
    (currentDate - lastUpdateDate) / (1000 * 60 * 60 * 24)
  );
  return (
    <>
      <div className={styles.layout}>
        <header className={styles.header}>
          <Link href="/" title="盘搜 VIP 首页" className={styles.logo}>
            <h1>盘搜 VIP ⛅ 云盘搜索工具精选导航</h1>
          </Link>
          <div className={styles.tipsDiv}>
            <p>
              💫 本站每月维护更新，最近更新时间：{lastUpdateDateString}（
              {daysAgo} 天前）
            </p>
            <p>
              👋 如果对你有所帮助，请收藏本站，本站域名&nbsp;
              <Link href="/" title="盘搜 VIP 首页">
                <b>pansou.vip</b>
              </Link>
            </p>
            <p>
              ⛳ 常见问题 & 建议反馈 & 提交收录 👉&nbsp;
              <Link href="/about" title="盘搜 VIP 关于页面">
                去这里
              </Link>
            </p>
          </div>
        </header>
        <main>{children}</main>
        <footer className={styles.footer}>
          <span>盘搜 VIP 💖 云盘搜索工具精选导航&nbsp;</span>
          <span>
            Copyright&nbsp;&copy;&nbsp;2024&nbsp;
            <Link
              href="https://rokcso.com"
              title="rokcso 个人网站"
              target="_blank"
            >
              rokcso 🍩
            </Link>
            &nbsp;
          </span>
          <span>All rights reserved.</span>
        </footer>
      </div>
    </>
  );
}
