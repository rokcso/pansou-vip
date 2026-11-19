/**
 * Google AdSense 广告位配置（pansou.vip）。
 *
 * 为什么单独抽一个文件：广告单元 ID 一旦散落到各个页面里，改版或换号时就
 * 只能靠全局搜索去捞，漏改一处就是线上一个永久空白的广告位。这里把「账号
 * ID」和「每个版位用哪个单元」集中在同一处，页面只关心版位语义（home /
 * category / detail），不关心具体数字。
 *
 * 这些单元位与 PanHunt 共用，同一个 AdSense 账号
 * ca-pub-2984496936924659，两站的 loader 与 ads.txt 都已覆盖 pub 号，所以
 * 直接复用已验证过的四个真实 display 单元即可，不需要新建单元。若日后需要
 * 区分两个站点的数据（按站点看收入 / 点击率），替换此文件里的 ID 即可，
 * 页面和组件都不用动。
 */

/** 发布商 ID。不是密钥：它出现在每个广告标签和 ads.txt 里。 */
export const ADSENSE_CLIENT = "ca-pub-2984496936924659";

/**
 * 版位 → data-ad-slot，取自 AdSense → 广告 → 按广告单元。
 *
 * 值允许为 undefined：组件在拿不到 ID 时直接返回 null，而不是留一块空占位，
 * 这样「少配一个版位」的后果是「这个位置没有广告」，而不是「这个位置有
 * 280px 的空白」。
 *
 * pansou.vip 没有工具详情页（详情内容都在 PanHunt），所以 detail 这一组
 * 单元在这里用于 forum / rubric / faq 这类列表页与说明页。
 */
export const ADSENSE_SLOTS = {
  // 首页主列表区（精选工具之后）
  home: "6850300529",
  // 首页次级列表区（备用工具之后），以及同类的列表聚合页
  category: "2994815997",
  // 列表 / 说明页：/forum、/rubric、/faq
  detail: "2172688911",
  // 预留：本站暂无「单篇长文」模板（rubric / faq 已用 detail 覆盖）。
  // 保留是因为它属于同一账号下已审核过的真实单元，日后加文章页可直接用。
  article: "4661899691",
};
