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
        <p>💯 亲测满分为 👍👍👍👍👍</p>
        <SitesList sites={sitesData}></SitesList>
        <h2>备用工具</h2>
        <p>
          ⚠️ 以下工具纯属收集、导航，
          <b>未经过人工亲测，但都测试能正常访问且资源比较新</b>
          ，在上述工具不满足需求时可自行选择以下工具使用。
        </p>
        <SitesList sites={noTestSitesData}></SitesList>
      </Layout>
    </>
  );
}
