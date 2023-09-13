import CustomHead from "../components/customHead";
import Layout from "../components/layout";
import SitesList from "../components/sitesList";
import sitesData from "../public/sitesData.json";

export default function Home() {
  return (
    <>
      <CustomHead />
      <Layout>
        <SitesList sites={sitesData}></SitesList>
      </Layout>
    </>
  );
}
