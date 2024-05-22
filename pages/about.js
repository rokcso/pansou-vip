import Image from "next/image";
import CustomHead from "../components/customHead";
import Layout from "../components/layout";
import styles from "./about.module.css";

export default function About() {
  return (
    <>
      <CustomHead />
      <Layout>
        <div className={styles.main}>
          <div>
            <h2>常见问题</h2>
            <div>
              <h3>搜索不到 xx 资源？</h3>
              <p>
                由于版权原因，直接搜索 xx
                资源的完全匹配的关键词可能会搜索不到任何结果，这时只需要调整一下搜索关键词，比如搜索「庆余年」可能会搜索不到任何结果，但是搜索「庆余年电视剧」则大概率会搜索到结果。
              </p>
              <br />
              <h3>为什么没有 xx 资源？</h3>
              <p>
                大部分网盘搜索工具的资源都是来自于网络公开分享的资源以及用户投稿，所以如果尝试了各种关键词、换了各种搜索工具还是无法找到的资源，大概率就是没什么人分享的啦！
              </p>
            </div>
          </div>
          <br />
          <div>
            <h2>问题反馈</h2>
            <p>
              如果你有任何问题咨询、建议反馈、点赞支持都可以 👉{" "}
              <a
                href="https://cvlr2wiufrz.feishu.cn/share/base/form/shrcnHckduwGEEFk2Y3yR04K3Ic"
                title="留言问卷链接"
                target="_blank"
              >
                点击这里
              </a>{" "}
              👈 给我留言。
            </p>
          </div>
          <br />
          <div>
            <h2>工具投稿</h2>
            <p>
              如果你也有好用的网盘搜索工具，欢迎 👉{" "}
              <a
                href="https://cvlr2wiufrz.feishu.cn/share/base/form/shrcnAPSuz3I1DJ2z722woXjHnc"
                title="网盘搜索工具投稿问卷链接"
                target="_blank"
              >
                投稿
              </a>{" "}
              👈 ，我会在测试通过之后进行收录。
            </p>
            <p>
              🙂 注意：
              <a href="/" title="盘搜VIP 首页">
                <b>盘搜VIP</b>
              </a>
              &nbsp;仅收录网盘搜索工具或其他网盘相关工具。
            </p>
          </div>
          <br />
          <div>
            <h2>关于本站</h2>
            <p>
              本站主要为个人自用，顺手将自己使用的工具整理发布，承诺所有工具绝对没有付费收录或推荐。
            </p>
            <br />
            <p>你还可以关注我的公众号，会不定期分享更多实用资源。👇</p>
            <Image
              src="/img/wxgzh.jpg"
              alt="空字节 微信公众号 二维码"
              width={300}
              height={100}
            />
          </div>
          <br />
          <div>
            <h2>如何提供支持或帮助</h2>
            <p>
              盘搜VIP 暂时并没有提供任何付费服务，纯纯用爱发电。
              如果你想对盘搜VIP 提供支持或帮助，最简单的方式就是
              <b>将盘搜VIP 分享给任何有需要的人</b>
              ，其次你还可以选择赞赏一下，赞赏收入将用于域名、服务器续费。
            </p>
            <Image src="/img/wxzsm.jpg" alt="赞赏码" width={300} height={300} />
          </div>
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Layout>
    </>
  );
}
