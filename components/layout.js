import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  const addBookmark = () => {
    if (window.sidebar) {
      // Mozilla Firefox Bookmark
      window.sidebar.addPanel(location.href, document.title, "");
    } else if (window.external && "AddFavorite" in window.external) {
      // IE Favorite
      window.external.AddFavorite(location.href, document.title);
    } else if (window.opera && window.print) {
      // Opera Hotlist
      this.title = document.title;
      return true;
    } else {
      // Webkit - Safari / Chrome
      alert(
        "按 " +
          (/Mac/i.test(navigator.userAgent) ? "Cmd" : "Ctrl") +
          "+D 键将本页加入书签。"
      );
      return true;
    }
  };
  return (
    <>
      <Head>
        <title>网盘聚合搜索站精选导航</title>
        <meta name="description" content="这里是网站描述。" />
        <link rel="icon" href="/favicon/icon16x16.png" />
        <link rel="icon" href="/favicon/icon32x32.png" />
        <link rel="icon" href="/favicon/icon48x48.png" />
        <link rel="icon" href="/favicon/icon64x64.png" />
        <link rel="icon" href="/favicon/icon128x128.png" />
      </Head>
      <div className={styles.layout}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <Link href="/" className={styles.logo}>
              <span>盘搜 VIP</span>
            </Link>
            <button onClick={addBookmark}>收藏本站</button>
          </div>
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <span>网盘聚合搜索站精选导航&nbsp;</span>
          <span>
            Copyright &copy; 2023 <Link href="https://rok.ink">rok.ink</Link>
            .&nbsp;
          </span>
          <span>All rights reserved.</span>
        </footer>
      </div>
    </>
  );
}
