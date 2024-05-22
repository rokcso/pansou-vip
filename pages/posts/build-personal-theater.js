import Image from "next/image";
import CustomHead from "../../components/customHead";
import Layout from "../../components/layout";

export default function About() {
  return (
    <>
      <CustomHead />
      <Layout>
        <div>
          <h2>【教程】打造个人影院，畅享全网影视资源</h2>
          <p>
            本文主要分享我目前如何使用{" "}
            <a href="https:www.pansou.vip/" title="盘搜VIP">
              盘搜VIP
            </a>{" "}
            和{" "}
            <a href="https://okaapps.com/product/1659622164" title="VidHub">
              VidHub
            </a>{" "}
            搭配打造我的个人影院，实现 ¥0
            成本观看全网影视资源的同时还能获得优秀的观影体验。
          </p>
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
