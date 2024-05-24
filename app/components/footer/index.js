import LinkArrow from "../fragments/linkArrow";
import styles from "./index.module.css";

export default function () {
  return (
    <div className={styles.footer}>
      <div className={styles.footerItem}>
        <div>
          <p>⛅ 盘搜VIP</p>
          <p>网盘搜索工具精选</p>
          <br />
          <div>
            <a
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
            &nbsp;&nbsp;
            <a
              href="https://github.com/rokcso/"
              title="rokcso 的 GitHub 主页"
              target="_blank"
            >
              GitHub
              <LinkArrow />
            </a>
          </div>
        </div>
        <div>
          <p>其他作品</p>
          <a
            href="https://www.urlxcode.com/"
            title="URLxcode 网址"
            target="_blank"
          >
            URL xcode
            <LinkArrow />
          </a>
        </div>
        {/* <div>
          <p>Follow Me</p>
          <img src="/img/wxzsm.jpg" width={120} />
        </div> */}
        <div></div>
        <div></div>
      </div>
      <hr className={styles.footerDivider} />
      <p className={styles.footerCopy}>
        盘搜VIP 💖 网盘搜索工具精选导航 Copyright &copy; 2023-2024{" "}
        <a href="https://rokcso.com" title="rokcso 的个人网站" target="_blank">
          rokcso.com
          <LinkArrow />
        </a>{" "}
        All rights reserved.
      </p>
    </div>
  );
}
