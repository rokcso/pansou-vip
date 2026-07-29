import BrandTransition from "../components/brandTransition";

export const metadata = {
  title: "盘搜VIP升级为PanHunt - 品牌升级说明",
  description:
    "盘搜VIP正在升级为PanHunt。了解两个品牌和域名的关系，以及工具导航、评分标准和资源论坛在新站的对应入口。",
  metadataBase: new URL("https://www.pansou.vip/"),
  alternates: {
    canonical: "/upgrade",
  },
};

const migrationEntries = [
  ["网盘搜索工具", "PanHunt 搜索工具", "https://panhunt.com/pan-search"],
  ["资源分享论坛", "PanHunt 资源论坛", "https://panhunt.com/pan-forums"],
  ["测试评分标准", "PanHunt 评测标准", "https://panhunt.com/benchmark"],
  ["常见问题", "PanHunt 常见问题", "https://panhunt.com/faq"],
];

export default function UpgradePage() {
  return (
    <div>
      <h1>盘搜VIP正在升级为 PanHunt</h1>
      <BrandTransition />
      <section>
        <h2>为什么升级</h2>
        <p>
          盘搜VIP从人工筛选网盘搜索工具开始，逐步积累了工具导航、资源论坛和评分标准。PanHunt 是这套经验面向下一阶段的主站：结构更清楚，工具信息更完整，评测方法和使用内容也会持续更新。
        </p>
        <p>
          两个站点在过渡期会并行服务。盘搜VIP会保留已有入口，PanHunt则成为长期更新、内容建设和品牌服务的重点。
        </p>
      </section>
      <section>
        <h2>哪些事情不会改变</h2>
        <ul>
          <li>继续以人工筛选和实际测试作为收录基础。</li>
          <li>不存储、上传或分发任何文件，只提供工具和社区入口。</li>
          <li>不以付费改变工具的自然评分和排序。</li>
          <li>继续提醒用户遵守适用法律、版权和平台规则。</li>
        </ul>
      </section>
      <section>
        <h2>从盘搜VIP继续使用</h2>
        <p>以下旧站内容已经有对应的新版入口。后续会逐步完成更精确的页面迁移。</p>
        <div>
          {migrationEntries.map(([oldName, newName, href]) => (
            <p key={oldName}>
              <b>{oldName}</b> →{" "}
              <a href={href} title={`前往${newName}`}>
                {newName}
              </a>
            </p>
          ))}
        </div>
      </section>
      <section>
        <h2>给老用户的一句话</h2>
        <p>
          如果你是通过盘搜VIP收藏或搜索来到这里，不需要重新理解一套陌生的服务。你熟悉的工具筛选思路会延续到PanHunt，只是入口、说明和判断依据会变得更完整。
        </p>
        <p>
          <a
            href="https://panhunt.com/pansou-vip-upgrade?utm_source=pansou.vip&utm_medium=upgrade_page"
            title="查看PanHunt的完整品牌升级说明"
          >
            查看 PanHunt 的完整升级说明 →
          </a>
        </p>
      </section>
    </div>
  );
}
