import styles from "./layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.layout}>
        <header className={styles.header}>
          <Link href={`/`} className={styles.logo}>
            <h1>盘搜 VIP ⛅ 云盘搜索工具精选导航</h1>
          </Link>
          <p>👋 如果对你有所帮助，请收藏本站，本站域名 pansou.vip</p>
          <p className={styles.formLink}>
            🚀 如果你有好用的云盘搜索工具，欢迎
            <a href="https://jinshuju.net/f/s590FY">提交收录</a>
          </p>
          <p>💯 亲测满分为 👍👍👍👍👍</p>
          <p>💫 所有已收录的工具将每月维护更新信息</p>
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
