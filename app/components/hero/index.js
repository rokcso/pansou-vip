import styles from "./index.module.css";

export default function ({ lastUpdateDateStr, siteCount }) {
  const nowDate = new Date();
  const lastUpdateDate = new Date(lastUpdateDateStr);
  const daysAgo = Math.floor(
    (nowDate - lastUpdateDate) / (1000 * 60 * 60 * 24)
  );

  function handleDonateClick() {
    // 希望复制到剪贴板的文本
    const textToCopy = "推荐你一个人工亲测精选的网盘搜索工具导航网站：piansou.vip，真的挺好用的！";
  
    // 检查 Clipboard API 可用性
    if (navigator.clipboard) {
      // 使用 Clipboard API 将文本写入剪贴板
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          // 写入剪贴板成功后的回调
          alert("推荐文本已复制到剪贴板，快去分享给你的朋友们吧！❤️");
        })
        .catch((err) => {
          // 写入剪贴板失败后的回调
          console.error("无法复制文本到剪贴板: ", err);
          alert("将 pansou.vip 分享给你的朋友们就是对我最好的鼓励！❤️");
        });
    } else {
      // 如果 Clipboard API 不可用，使用传统的提示方式
      alert("将 pansou.vip 分享给你的朋友们就是对我最好的鼓励！❤️");
    }
  }

  return (
    <div className={styles.hero}>
      <h1>人工亲测精选的网盘搜索工具导航</h1>
      <p>⭐ 坚持人工亲测精选，给你 VIP 一样的体验</p>
      <p>
        💫 定期维护更新（已收录 {siteCount} 个实用网盘搜索工具），最近更新时间：{lastUpdateDateStr}（{daysAgo} 天前）
      </p>
      <p>
        👋 如果对你有所帮助，请收藏盘搜VIP，域名：pansou.vip，速记：
        <b>盘搜点VIP</b>
      </p>
      <button onClick={handleDonateClick}>❤️ 点赞</button>
    </div>
  );
}
