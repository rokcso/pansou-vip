import CustomHead from "../components/customHead";
import Layout from "../components/layout";
import SitesList from "../components/sitesList";
import sitesData from "../public/sitesData.json";
import noTestSitesData from "../public/noTestSitesData.json";

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
        <h2>备用工具</h2>
        <p>
          💢 以下工具大部分未经过全面人工测试，<b>仅保证能正常访问</b>
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
