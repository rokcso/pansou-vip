/**
 * 通用 JSON-LD（结构化数据）输出组件。
 *
 * 为什么抽成一个组件：`application/ld+json` 的内容必须是一段 JSON 文本，
 * React 里唯一的写法是 dangerouslySetInnerHTML。集中到一处之后，每个页面
 * 只关心「给哪一份数据」，不用各自复制 <script> 标签和 stringify 调用，
 * 也就不会出现某页忘了 JSON.stringify 导致 schema 变成无意义的 [object]。
 *
 * 关于转义：这里不做 HTML 转义，因为本仓所有 schema 的数据都来自页面里的
 * 静态文案和 public/data/*.json，没有用户输入。日后若把用户内容（评论、
 * 投稿）塞进 JSON-LD，必须先转义 `</script`，否则字符串里的闭合标签会
 * 提前结束脚本块，变成注入点。
 *
 * 放在 app/components/seo/ 下：App Router 只把 page.js / layout.js /
 * route.js 当作路由文件，普通模块即使放在 app/ 里也不会生成路由。
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
