import LinkArrow from "../fragments/linkArrow";
import styles from "./index.module.css";

export default function () {
  return (
    <div className={styles.footer}>
      <div className={styles.footerItem}>
        <div>
          <p>⛅ 盘搜VIP</p>
          <p>网盘搜索工具精选</p>
          <div>
            <a href="https://x.com/rokcso/" target="_blank">
              X
              <LinkArrow />
            </a>
            &nbsp;&nbsp;
            <a href="https://okjk.co/RqK5zW" target="_blank">
              Jike
              <LinkArrow />
            </a>
            &nbsp;&nbsp;
            <a href="https://github.com/rokcso/" target="_blank">
              GitHub
              <LinkArrow />
            </a>
          </div>
        </div>
        <div>
          <p>其他作品</p>
          <a href="https://www.urlxcode.com/">
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
      <p className={styles.footerCopy}>
        Copyright &copy; 2024 <a href="https://rokcso.com">rokcso.com<LinkArrow /></a> All
        rights reserved.
      </p>
    </div>
  );
}
