import Head from "next/head";

export default function CustomHead() {
  return (
    <>
      <Head>
        <title>盘搜 VIP - 云盘搜索工具精选导航 - pansou.vip</title>
        <meta
          name="description"
          content="盘搜 VIP，精选各大人工亲测好用的云盘搜索工具，提供云盘搜索工具一站式导航，给你 VIP 的体验"
        />
        <meta
          name="keywords"
          content="云盘搜索, 资源搜索, 网盘搜索, 阿里云盘, 百度云盘"
        />
        <link rel="canonical" href="https://www.pansou.vip" />
        <link rel="icon" href="/favicon/icon16x16.png" />
        <link rel="icon" href="/favicon/icon32x32.png" />
        <link rel="icon" href="/favicon/icon48x48.png" />
        <link rel="icon" href="/favicon/icon64x64.png" />
        <link rel="icon" href="/favicon/icon128x128.png" />
      </Head>
    </>
  );
}
