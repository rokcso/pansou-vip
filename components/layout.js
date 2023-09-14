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
        </header>
        <main>{children}</main>
        <footer className={styles.footer}>
          <span>盘搜 VIP 💖 云盘搜索工具精选导航&nbsp;</span>
          <span>
            Copyright &copy; 2023 <Link href="https://rokcso.com">rokcso</Link>
            &nbsp;
          </span>
          <span>All rights reserved.</span>
        </footer>
      </div>
    </>
  );
}
