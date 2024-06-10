import styles from "./index.module.css";

export default function ({ lastUpdateDateStr }) {
  const nowDate = new Date();
  const lastUpdateDate = new Date(lastUpdateDateStr);
  const daysAgo = Math.floor(
    (nowDate - lastUpdateDate) / (1000 * 60 * 60 * 24)
  );

  function handleDonateClick() {
    alert("将 pansou.vip 分享给你的朋友们就是对我最好的鼓励！❤️");
  }

  return (
    <div className={styles.hero}>
      <h1>人工亲测精选的网盘搜索工具导航</h1>
      <p>⭐ 坚持人工亲测精选，给你 VIP 一样的体验</p>
      <p>
        💫 定期维护更新，最近更新时间：{lastUpdateDateStr}（{daysAgo} 天前）
      </p>
      <p>
        👋 如果对你有所帮助，请收藏盘搜VIP，域名：pansou.vip，速记：
        <b>盘搜点VIP</b>
      </p>
      <button onClick={handleDonateClick}>❤️ 点赞</button>
    </div>
  );
}
