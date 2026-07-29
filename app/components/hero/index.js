import styles from "./index.module.css";

export default function ({ lastUpdateDateStr, siteCount }) {
  const nowDate = new Date();
  const lastUpdateDate = new Date(lastUpdateDateStr);
  const daysAgo = Math.floor(
    (nowDate - lastUpdateDate) / (1000 * 60 * 60 * 24)
  );

  function handleDonateClick() {
    // 希望复制到剪贴板的文本
    const textToCopy =
      "推荐你一个人工亲测精选的网盘搜索工具导航网站：https://panhunt.com，真的挺好用的！";

    // 判断用户系统是 windows 还是 macos
    const isMac = navigator.userAgent.toLowerCase().indexOf("mac") > -1;
    // console.log(isMac);
    const bookmarkMsg = isMac
      ? "请点击 Command + D 将 panhunt.com 添加到书签！🫰"
      : "请点击 Ctrl + D 将 panhunt.com 添加到书签！🫰";

    // 检查 Clipboard API 可用性
    if (navigator.clipboard) {
      // 使用 Clipboard API 将文本写入剪贴板
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          // 写入剪贴板成功后的回调
          alert(
            bookmarkMsg + "\n推荐文本已复制到剪贴板，快去分享给你的朋友们吧~ ❤️"
          );
        })
        .catch((err) => {
          // 写入剪贴板失败后的回调
          console.error("无法复制文本到剪贴板: ", err);
          alert(
            bookmarkMsg +
              "\n将 panhunt.com 分享给你的朋友们就是对我最好的鼓励~ ❤️"
          );
        });
    } else {
      // 如果 Clipboard API 不可用，使用传统的提示方式
      alert(
        bookmarkMsg + "\n将 panhunt.com 分享给你的朋友们就是对我最好的鼓励~ ❤️"
      );
    }
  }

  return (
    <div className={styles.hero}>
      <h1>人工亲测精选的网盘搜索工具导航</h1>
      <p>⭐ 坚持人工亲测精选，给你 VIP 一样的体验</p>
      <p>
        💫 定期维护更新（已收录 <b>{siteCount}</b>{" "}
        个实用网盘搜索工具），最近更新时间：
        {lastUpdateDateStr}（{daysAgo} 天前）
      </p>
      <p>
        👋 盘搜VIP正在升级为 PanHunt，
        <span onClick={handleDonateClick}>
          旧域名：pansou.vip，新品牌：
          <b>panhunt.com</b>
        </span>
        {/* <span onClick={handleDonateClick}>
          域名：pansou.vip，速记：
          <b>盘搜点VIP</b>
        </span> */}
      </p>
      {/* <button onClick={handleDonateClick}>❤️ 点赞</button> */}
      {/* <a
        // href="https://lizhi.shop/index.php?cid=y39pjk8l"
        href="/gift"
        title="副业赚钱项目分享"
        // target="_blank"
      >
        <button className={styles.donate}>❤️ 副业赚钱</button>
      </a> */}
      <a
        // href="https://lizhi.shop/index.php?cid=y39pjk8l"
        href="https://panhunt.com?utm_source=pansou.vip"
        title="Pan Hunt"
        // target="_blank"
      >
        <button className={styles.donate}>❤️ 前往 PanHunt 新版</button>
      </a>
    </div>
  );
}
