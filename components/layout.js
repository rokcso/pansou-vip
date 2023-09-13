import styles from "./layout.module.css";
import Link from "next/link";

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
      <div className={styles.layout}>
        <header className={styles.header}>
          <Link href={`/`} className={styles.logo}>
            <span>盘搜 VIP</span>
          </Link>
          <button onClick={addBookmark}>收藏本站</button>
        </header>
        <main>{children}</main>
        <footer className={styles.footer}>
          <span>云盘搜索工具导航站&nbsp;</span>
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
