import styles from "./adBanner.module.css";

export default function AdBanner() {
  const adInfo = [
    {
      title: "Arclet Copier",
      description: "PanHunt 开发者最新作品：Arclet Copier 已经上线！",
      url: "https://arcletcopier.com/zh/",
    },
    {
      title: "正版软件",
      description: "正版软件热销中！160+ 热门软件无套路折扣直降！",
      url: "https://lizhi.shop/site/discount/id/20241111?cid=y39pjk8l",
    },
    {
      title: "Pan Hunt",
      description: "盘搜VIP 全新升级：Pan Hunt，云盘猎人，网罗全网资源！",
      url: "https://panhunt.com?utm_source=pansou.vip",
    },
  ];
  const nowAd = adInfo[Math.floor(Math.random() * adInfo.length)];
  return (
    <a
      href={nowAd.url}
      title={nowAd.title}
      target="_blank"
      className={styles.noteLink}
      rel="nofollow"
    >
      <div className={styles.note}>
        <b>{nowAd.description}</b>
      </div>
    </a>
  );
}
