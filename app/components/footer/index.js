import styles from "./index.module.css";
import LinkArrow from "../fragments/linkArrow";

export default function () {
  return (
    <div className={styles.footer}>
      <div className={styles.footerItem}>
        <div>
          <p>⛅ 盘搜VIP</p>
          <p>人工亲测的网盘搜索工具精选导航</p>
          <br />
          <div>
            <a href="mailto:panhunt@coryso.com">
              Email <LinkArrow />
            </a>
          </div>
        </div>
      </div>
      <hr className={styles.footerDivider} />
      <p className={styles.footerCopy}>
        盘搜VIP 💖 人工亲测精选的网盘搜索工具导航 Copyright &copy; 2023-2024{" "}
        <a href="/" title="首页">
          pansou.vip
        </a>{" "}
        All rights reserved.
      </p>
    </div>
  );
}
