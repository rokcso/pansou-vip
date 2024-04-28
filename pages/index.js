import CustomHead from "../components/customHead";
import Layout from "../components/layout";
import SitesList from "../components/sitesList";
import sitesData from "../public/sitesData.json";
import noTestSitesData from "../public/noTestSitesData.json";
import userRecommendedSitesData from "../public/userRecommendedSitesData.json";

export default function Home() {
  return (
    <>
      <CustomHead />
      <Layout>
        <h2>精选工具</h2>
        <p>
          💯 以下工具均经过全面人工测试可用且好用，推荐使用（<b>非广告</b>
          ），推荐值 👍👍👍👍👍 为满分。
        </p>
        <SitesList sites={sitesData}></SitesList>
        <br />
        <h2>用户推荐</h2>
        <p>
          🥳&nbsp;以下工具均来自用户推荐，且经过一定程度的人工测试筛选，较为好用。如果你也有好用的网盘搜索工具，欢迎&nbsp;👉&nbsp;
          <a
            href="https://cvlr2wiufrz.feishu.cn/share/base/form/shrcnAPSuz3I1DJ2z722woXjHnc"
            title="网盘搜索工具投稿问卷链接"
            target="_blank"
          >
            投稿
          </a>
          。
        </p>
        <SitesList sites={userRecommendedSitesData}></SitesList>
        <br />
        <h2>备用工具</h2>
        <p>
          💢 以下工具均未经过全面人工测试，<b>仅保证能正常访问</b>
          ，在精选工具不满足需求时可自行选择以下工具作为备用。
        </p>
        <SitesList sites={noTestSitesData}></SitesList>
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
