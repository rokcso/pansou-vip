import AdBanner from "../components/fragments/adBanner";

export const metadata = {
  title: "盘搜VIP 网盘搜索工具评分标准 - 网盘搜索工具精选导航",
  description:
    "盘搜VIP 首创的网盘搜索工具评分标准细则，对网盘搜索工具量化打分，提供更客观的标准定义是否好用。",
  metadataBase: new URL("https://www.pansou.vip/"),
  alternates: {
    canonical: "/rubric",
  },
};

export default function Home() {
  return (
    <div>
      <h1>盘搜VIP 网盘搜索工具测试评分标准</h1>
      <AdBanner />
      <br />
      <div>
        <p>注：</p>
        <ul>
          <li>
            不同时间测试结果可能不一样，最终结果以测试时数据为准，未来不定期更新测试结果。
          </li>
          <li>凡是涉及机器测试，都以网站首页 URL 作为请求测试对象。</li>
          <li>
            如果存在网站无法测试某项，该项不参与计分，该项权重默认转移给资源丰富程度。
          </li>
        </ul>
        <p>关于推荐：</p>
        <ul>
          <li>
            人工测试总分 <b>≥4.0</b> 将被归类到「精选工具」，并在本站获得{" "}
            <a
              href="https://en.wikipedia.org/wiki/Nofollow"
              title="dofollow & nofollow"
              target="_blank"
            >
              dofollow
            </a>{" "}
            链接。
          </li>
        </ul>
      </div>

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

      <h2>机器测试（权重 20%）</h2>

      <h3>网络拨测（权重 50%）</h3>

      <div>
        <p>
          使用{" "}
          <a
            href="https://boce.aliyun.com/detect/http"
            title="阿里云网络拨测工具"
          >
            阿里云网络拨测工具
          </a>{" "}
          进行测试。主要测试网站对于国内请求的平均响应时长，时长越短代表访问响应越快，用户体验更好。
        </p>
        <p>平均响应时间（rt）：</p>
        <ul>
          <li>rt ≤ 400ms：5 分</li>
          <li>400ms {"<"} rt ≤ 800ms：4 分</li>
          <li>800ms {"<"} rt ≤ 1200ms：3 分</li>
          <li>1200ms {"<"} rt ≤ 1600ms：2 分</li>
          <li>1600ms {"<"} rt ≤ 2000ms：1 分</li>
          <li>2000ms {"<"} rt：0 分</li>
        </ul>

        <p>示例：</p>

        <p>
          <a href="https://www.pansou.vip/" title="盘搜VIP">
            https://www.pansou.vip/
          </a>{" "}
          的平均响应时长为 417ms，则该项得分为 4 分。
        </p>
      </div>

      <h3>Google PageSpeed Insights（权重 50%）</h3>

      <div>
        <p>
          使用{" "}
          <a
            href="https://pagespeed.web.dev/"
            title="Google PageSpeed Insights"
          >
            Google PageSpeed Insights
          </a>{" "}
          进行测试。依然是测试网站的访问性能（主要请求来自国外）和基于 Google
          构建的用户体验数据。
        </p>

        <p>
          分手机和桌面设备测试结果权重分配 1:1，此网址和源测试结果权重分配
          1:1，评估 Core Web Vitals 结果和性能得分。
        </p>

        <p>Core Web Vitals：</p>

        <ul>
          <li>通过：5 分</li>
          <li>非通过：0 分</li>
        </ul>

        <p>示例：</p>

        <p>
          <a href="https://www.pansou.vip/" title="盘搜VIP">
            https://www.pansou.vip/
          </a>{" "}
          的 Core Web Vitals 测试结果如下：
        </p>

        <ul>
          <li>
            手机
            <ul>
              <li>
                此网址
                <ul>
                  <li>非通过</li>
                </ul>
              </li>
              <li>
                源
                <ul>
                  <li>通过</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            桌面设备
            <ul>
              <li>
                此网址
                <ul>
                  <li>通过</li>
                </ul>
              </li>
              <li>
                源
                <ul>
                  <li>通过</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <p>最终该项得分：(0 + 5 + 5 + 5) / 4 = 3.75 分。</p>
      </div>

      <h2>人工测试（权重 80%）</h2>

      <h3>资源丰富程度（权重 60%）</h3>
      <div>
        <p>
          影视资源丰富度：在{" "}
          <a href="https://movie.douban.com/tv/" title="豆瓣">
            豆瓣
          </a>{" "}
          电视剧页面选择最新年代默认排序下前 3
          名的电视剧作为测试关键词（如果完整关键词搜索不到会尝试衍生关键词测试），分别尝试搜索，对目标结果（不考虑资源是否失效）的数量计数，根据数据打分。
        </p>

        <p>目标结果数量（rn）：</p>

        <ul>
          <li>18 {"<"} rn：5 分</li>
          <li>12 {"<"} rn ≤ 18：4 分</li>
          <li>7 {"<"} rn ≤ 12：3 分</li>
          <li>3 {"<"} rn ≤ 7：2 分</li>
          <li>0 {"<"} rn ≤ 3：1 分</li>
          <li>rn = 0：0 分</li>
        </ul>

        <p>示例：</p>

        <p>
          A 网盘搜索感受测试搜索电视剧 a, b, c 分别返回 6, 28, 0
          个目标结果，则该项得分为：(2 + 5 + 0) / 3 = 2.34 分。
        </p>

        <p>其他类目资源的测试用例待补充。</p>
      </div>

      <h3>广告密度（权重 10%）</h3>
      <div>
        <p>
          网站添加广告并不应该成为网站不被推荐的理由，但是过载的广告以至于影响用户的使用体验是不被推荐的。
        </p>

        <p>
          平均单页广告数计算规则：计数从网站首页到完成一次搜索并跳转到网盘的核心链路需要经过的页面数和出现的广告数（关闭浏览器广告拦截），以「广告数
          / 页面数」作为平均单页广告数。
        </p>

        <p>平均单页广告数（ad）：</p>

        <ul>
          <li>ad = 0：5 分</li>
          <li>0 {"<"} ad ≤ 1：4 分</li>
          <li>1 {"<"} ad ≤ 2：3 分</li>
          <li>2 {"<"} ad ≤ 3：2 分</li>
          <li>3 {"<"} ad ≤ 4：1 分</li>
          <li>4 {"<"} ad：0 分</li>
        </ul>

        <p>
          在核心链路上如果存在任何一个页面广告数量超过 4 个（包含 4
          个），计算广告数量超过 4 个（包含 4
          个）的页面数量占比核心链接总页面数量比例作为超高密度广告单页比例，最终广告密度得分需要乘以「1
          - 超高密度广告单页比例」。
        </p>

        <p>示例：</p>

        <p>
          A 网盘搜索工具从首页到完成一次搜索并跳转到网盘的核心链路需要经过「首页
          → 搜索结果页 → 结果详情页」三个页面，一共会展示 7
          个广告，那么平均单页广告数为 7/3 = 2.33 个，则该项得分 2 分。
        </p>

        <p>
          但是由于其首页有 5
          个广告，属于超高密度广告单页，且占比其核心链路总页面数量的 1/3，所以 A
          网盘搜索工具该项最终得分为：2 * (1 - 1/3) = 1.33 分。
        </p>
      </div>

      <h3>使用门槛（权重 10%）</h3>
      <div>
        <p>当命中多项使用门槛时，该项得分取最低值。</p>

        <p>使用门槛：</p>

        <ul>
          <li>访问即可使用，无需任何额外操作：5 分</li>
          <li>需要关注公众号等：2 分</li>
          <li>需要注册/登录账户：1 分</li>
          <li>需要付费：0 分</li>
        </ul>

        <p>其他使用门槛待发现。</p>
      </div>
      <h3>搜索响应速度（权重 10%）</h3>
      <div>
        <p>
          手动执行搜索（随机关键词），通过浏览器开发者工具统计单次搜索的完整
          Load 耗时。
        </p>

        <p>Load 耗时（st）：</p>

        <ul>
          <li>st ≤ 1000ms：5 分</li>
          <li>1000ms {"<"} st ≤ 2000ms：4 分</li>
          <li>2000ms {"<"} st ≤ 4000ms：3 分</li>
          <li>4000ms {"<"} st ≤ 6000ms：2 分</li>
          <li>6000ms {"<"} st ≤ 8000ms：1 分</li>
          <li>8000ms {"<"} st：0 分</li>
        </ul>
      </div>

      <h3>主观得分（权重 10%）</h3>
      <div>
        <p>对于不太好量化的项进行综合评估，满分 5 分。</p>
      </div>
    </div>
  );
}
