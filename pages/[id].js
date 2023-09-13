import Layout from "../components/layout";
import CustomHead from "../components/customHead";
import Link from "next/link";
import sitesData from "../public/sitesData.json";

export default function Site({ site }) {
  const pStr = site.details.split("[|]");
  return (
    <>
      <CustomHead />
      <Layout>
        <Link href={site.link}>
          <h1>{site.name}</h1>
        </Link>
        {pStr.map((str, index) => (
          <p key={index}>{`${str}`}</p>
        ))}
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = sitesData.map((site) => ({
    params: {
      id: site.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const site = sitesData.find((site) => site.id === id);
  return {
    props: {
      site,
    },
  };
}
