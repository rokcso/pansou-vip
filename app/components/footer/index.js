import LinkArrow from "../fragments/linkArrow";
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
            <a href="mailto:rokcsox@gmail.com">
              Email <LinkArrow />
            </a>
          </div>
        </div>
        <div>
          <p>其他作品</p>
          <br />
          <a
            href="https://urlxcode.rokcso.com/"
            title="URLxcode 网址"
            target="_blank"
          >
            URL xcode
            <LinkArrow />
          </a>
          <br />
          <br />
          <a
            href="https://skillix.cc?utm_source=pansou.vip/"
            title="Skillix 小报童精选专栏优惠"
            target="_blank"
          >
            Skillix
            <LinkArrow />
          </a>
        </div>
        <div>
          <p>友情链接</p>
          <br />
          <a
            href="https://lunarye.com?utm_source=pansou.vip/"
            title="Lunarye 网址"
            target="_blank"
          >
            Lunarye™
            <LinkArrow />
          </a>
          <br />
          <br />
          <a
            href="https://www.ubrand.com?utm_source=pansou.vip/"
            title="uBrand 官网"
            target="_blank"
            rel="nofollow"
          >
            uBrand
            <LinkArrow />
          </a>
          <br />
          <br />
          <a
            href="https://tuostudy.upnb.top?utm_source=pansou.vip/"
            title="图欧学习资源导航"
            target="_blank"
            rel="nofollow"
          >
            图欧学习资源导航
            <LinkArrow />
          </a>
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
