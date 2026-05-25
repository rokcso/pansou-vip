import styles from "./index.module.css";

export default function () {
  return (
    <div className={styles.footer}>
      <div className={styles.footerItem}>
        <div>
          <p>⛅ 盘搜VIP</p>
          <p>人工亲测的网盘搜索工具精选导航</p>
          <br />
          <div>
            {/* <a
              href="https://x.com/rokcso/"
              title="rokcso 的社交媒体：Twitter"
              target="_blank"
            >
              X
              <LinkArrow />
            </a>
            &nbsp;&nbsp;
            <a
              href="https://okjk.co/RqK5zW"
              title="rokcso 的社交媒体：即刻"
              target="_blank"
            >
              Jike
              <LinkArrow />
            </a>
            &nbsp;&nbsp; */}
            {/* <a
              href="https://github.com/rokcso/"
              title="rokcso 的 GitHub 主页"
              target="_blank"
            >
              GitHub
              <LinkArrow />
            </a> */}
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
