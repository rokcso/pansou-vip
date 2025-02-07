import styles from "./adBanner.module.css";

export default function AdBanner() {
  const adInfo = [
    {
      title: "氢刻舟小铺",
      description: "➡️ 超大流量卡，超低价，去看看",
      url: "https://simhaoka.com/phone/index?id=8AECBC4E09973D2C2C8C637A99B4AA58",
    },
    {
      title: "Skillix 小报童精选专栏",
      description: "全新发布：小报童精选专栏特别优惠，最高 5 折！",
      url: "https://skillix.cc/?utm_source=pansou.vip",
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
    {
      title: "Pan Hunt",
      description: "盘搜VIP 全新升级：Pan Hunt，云盘猎人，网罗全网资源！",
      url: "https://panhunt.com?utm_source=pansou.vip",
    },
    {
      title: "Pan Hunt",
      description: "盘搜VIP 全新升级：Pan Hunt，云盘猎人，网罗全网资源！",
      url: "https://panhunt.com?utm_source=pansou.vip",
    },
    {
      title: "Pan Hunt",
      description: "盘搜VIP 全新升级：Pan Hunt，云盘猎人，网罗全网资源！",
      url: "https://panhunt.com?utm_source=pansou.vip",
    },
    {
      title: "Pan Hunt",
      description: "盘搜VIP 全新升级：Pan Hunt，云盘猎人，网罗全网资源！",
      url: "https://panhunt.com?utm_source=pansou.vip",
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
