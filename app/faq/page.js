import AdSlot from "../components/adSlot";
import JsonLd from "../components/seo/jsonLd";

const SITE_URL = "https://www.pansou.vip";
const PAGE_PATH = "/faq";
const PAGE_TITLE = "盘搜VIP 使用指南 - 网盘搜索工具精选导航";
const PAGE_DESCRIPTION =
  "盘搜VIP的使用指南、常见问题与品牌升级说明：了解网盘搜索工具导航的使用边界，以及盘搜VIP升级为PanHunt后的新版入口。";
const PREVIEW_IMAGE = "/img/preview-new.png";

/**
 * openGraph / twitter 必须整块重写：Next 的 metadata 是浅合并，子页面只写
 * title / description / alternates 时，layout.js 里那块 openGraph（含
 * url: 首页地址）会被完整继承，og:url 就全都指向首页。
 */
export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  metadataBase: new URL("https://www.pansou.vip/"),
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: "盘搜VIP",
    images: [PREVIEW_IMAGE],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    // site / creator 与 layout.js 保持一致，整块重写时不能漏。
    site: "@panhunt",
    creator: "@panhunt",
    images: [PREVIEW_IMAGE],
  },
};

/**
 * 问答内容只写一份。
 *
 * 每个段落是一个「片段数组」：字符串是纯文本，`{ text, href }` 是链接。
 * 页面用这份数据渲染可见的问答，FAQPage schema 用同一份数据拼纯文本，
 * 所以只要改这里，页面和结构化数据必然一致——问答是最容易「页面改了、
 * schema 忘了改」的内容，抄成两份就是等着两边说法打架。
 *
 * 问题不带 "Q："、答案不带 "A："：前缀是排版标记，不是内容，留在 schema
 * 里只会让 Google 的富媒体结果显示成「Q：……」。
 */
const FAQ_GROUPS = [
  {
    heading: "常见问题",
    items: [
      {
        question: "盘搜VIP 和 PanHunt 是什么关系？",
        answer: [
          [
            "PanHunt 是盘搜VIP升级后的新品牌。过渡期间，盘搜VIP会继续保留已有的工具导航；工具详情、公开评测和新的使用内容会优先更新在 PanHunt。",
          ],
          [
            "不需要重新适应一套用法。想看新版工具和完整说明，可以前往 ",
            {
              text: "PanHunt 品牌升级说明",
              href: "https://panhunt.com/pansou-vip-upgrade?utm_source=pansou.vip&utm_medium=faq",
              title: "查看盘搜VIP升级为PanHunt的完整说明",
            },
            "，也可以继续阅读本站的 ",
            {
              text: "品牌升级页面",
              href: "/upgrade",
              title: "盘搜VIP品牌升级说明",
            },
            "。",
          ],
        ],
      },
      {
        question: "搜索不到 xxxxx 影视剧？",
        answer: [
          [
            "由于版权原因，直接搜索 xxxxx 影视剧的完全匹配的关键词可能会搜索不到任何结果，这时只需要调整一下搜索关键词，比如搜索「庆余年」可能会搜索不到任何结果，但是搜索「庆余年电视剧」则大概率会搜索到结果。",
          ],
        ],
      },
    ],
  },
  {
    heading: "用户提问",
    // 这一组原本在每问之间夹了 <br />，保留下来，避免改动视觉节奏。
    divided: true,
    items: [
      {
        question: "怎么没有 xxxxx 资源？搜不到。",
        answer: [
          [
            "1. 大部分网盘搜索工具的资源都是来自于网络公开分享的资源以及用户投稿，所以如果尝试了各种关键词、换了各种搜索工具还是无法找到的资源，大概率就是没什么人分享的啦！",
          ],
          [
            "2. 盘搜VIP 是一个网盘搜索工具的导航网站，本身并不提供网盘资源搜索服务。",
          ],
        ],
      },
      {
        question: "xxxxx 网盘搜索工具访问不了。",
        answer: [
          [
            "1. 本站收录的所有网盘搜索工具都会人工定期检查其可用性，无法访问的工具会被移除收录。",
          ],
          [
            "2. 有时候特定网络环境下可能无法访问部分网盘搜索工具，建议切换不同网络环境尝试一下。",
          ],
        ],
      },
    ],
  },
];

/** 把片段数组压成 schema 需要的纯文本，段落之间用换行分隔。 */
function toPlainText(paragraphs) {
  return paragraphs
    .map((parts) =>
      parts
        .map((part) => (typeof part === "string" ? part : part.text))
        .join(""),
    )
    .join("\n");
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_GROUPS.flatMap((group) => group.items).map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: toPlainText(item.answer),
    },
  })),
};

export default function Home() {
  return (
    <div>
      <JsonLd data={faqJsonLd} />
      <h1>盘搜VIP 使用指南</h1>
      <div>
        {FAQ_GROUPS.map((group) => (
          <div key={group.heading}>
            <h2>{group.heading}</h2>
            {group.items.map((item, index) => (
              <div key={item.question}>
                <h3>{item.question}</h3>
                {item.answer.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>
                    {paragraph.map((part, partIndex) =>
                      typeof part === "string" ? (
                        part
                      ) : (
                        <a key={partIndex} href={part.href} title={part.title}>
                          {part.text}
                        </a>
                      ),
                    )}
                  </p>
                ))}
                {group.divided && index < group.items.length - 1 && <br />}
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* 正文中段：插在「用户提问」之后、留言反馈与免责声明之前，不打断
          单个问答的阅读。 */}
      <AdSlot slot="detail" />
      <div>
        <h2>留言反馈</h2>
        <p>
          如果你有任何问题咨询、建议反馈、点赞支持都可以 👉{" "}
          <a
            href="https://thecoryso.feishu.cn/share/base/form/shrcnHIZqXuqzWO8nM2uskBaK2f"
            title="留言问卷链接"
            target="_blank"
          >
            点击这里
          </a>{" "}
          👈 给我留言。
        </p>
      </div>
      <br />
      <br />
      <div>
        <p>
          🔴 <b>声明</b>
        </p>
        <p>
          1. 盘搜VIP 是网盘搜索工具的<b>导航网站</b>
          ，本身并不提供网盘资源搜索服务。
        </p>
        <p>
          2. 盘搜VIP
          旨在帮助用户快速找到公开分享的网盘资源。我们不存储、上传或修改任何文件，也不对第三方链接的内容负责。
        </p>
        <p>
          3. 盘搜VIP
          对于用户通过本服务搜索到的任何内容、信息或资源的合法性、准确性、完整性或有用性不作任何明示或暗示的保证。
        </p>
        <p>
          4. 我们强烈建议用户在使用盘搜VIP
          时，确保搜索和下载的内容不侵犯任何版权或知识产权。用户应自行承担因下载或使用受版权保护的内容而可能产生的法律责任。
        </p>
        <p>
          5. 用户应遵守所有适用的版权和知识产权法律，不得利用盘搜VIP
          进行任何侵犯版权的活动。
        </p>
        <p>
          6. 如果版权所有者认为通过盘搜VIP
          搜索到的资源侵犯了其合法权益，请及时与我们联系。我们将在收到有效通知后，依据相关法律法规采取必要措施。
        </p>
      </div>
    </div>
  );
}
