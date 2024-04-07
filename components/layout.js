import styles from "./layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  const lastUpdateDateString = "2024/04/07";
  const currentDate = new Date();
  const lastUpdateDate = new Date(lastUpdateDateString);
  const daysAgo = Math.floor(
    (currentDate - lastUpdateDate) / (1000 * 60 * 60 * 24)
  );
  return (
    <>
      <div className={styles.layout}>
        <header className={styles.header}>
          <Link href={`/`} className={styles.logo}>
            <h1>盘搜 VIP ⛅ 云盘搜索工具精选导航</h1>
          </Link>
          <div className={styles.tipsDiv}>
            <p>
              👋 如果对你有所帮助，请收藏本站，本站域名&nbsp;
              <a href="https://www.pansou.vip">pansou.vip</a>
            </p>
            <p>
              💫 本站每月维护更新，最近更新时间：{lastUpdateDateString}（
              {daysAgo} 天前）
            </p>
            <p>
              🚀 如果你有好用的云盘搜索工具，欢迎&nbsp;
              <a href="https://jinshuju.net/f/s590FY">提交收录</a>
            </p>
            <p>
              💡 关于本站 & 云盘搜索工具使用的常见问题，请查看&nbsp;
              <a href="/faq">FAQ</a>
            </p>
          </div>
        </header>
        <main>{children}</main>
        <footer className={styles.footer}>
          <span>盘搜 VIP 💖 云盘搜索工具精选导航&nbsp;</span>
          <span>
            Copyright&nbsp;&copy;&nbsp;2023&nbsp;
            <Link href="https://rokcso.com">rokcso 🍩</Link>
            &nbsp;
          </span>
          <span>All rights reserved.</span>
        </footer>
      </div>
    </>
  );
}
