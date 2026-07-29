import styles from "./index.module.css";

export default function BrandTransition() {
  return (
    <aside className={styles.notice} aria-label="盘搜VIP品牌升级公告">
      <div>
        <p className={styles.eyebrow}>品牌升级公告</p>
        <h2>盘搜VIP正在升级为 PanHunt</h2>
        <p>
          旧站会在过渡期间继续提供导航服务。PanHunt 将承接更完整的工具详情、公开评测和使用内容。
        </p>
      </div>
      <div className={styles.actions}>
        <a href="/upgrade" title="查看盘搜VIP升级为PanHunt的说明">
          了解升级
        </a>
        <a
          href="https://panhunt.com/pansou-vip-upgrade?utm_source=pansou.vip&utm_medium=brand_notice"
          title="前往PanHunt品牌升级说明"
        >
          前往 PanHunt ↗
        </a>
      </div>
    </aside>
  );
}
