import Head from "next/head";

export default function CustomHead() {
  return (
    <>
      <Head>
        <title>盘搜VIP - 网盘搜索工具精选导航 - pansou.vip</title>
        <meta
          name="description"
          content="盘搜VIP，精选各大人工亲测好用的网盘搜索工具，提供网盘搜索工具一站式导航，优质、无广告、免费，长期维护更新，给你 VIP 一样的体验"
        />
        <meta
          name="keywords"
          content="盘搜搜, 盘搜, 盘搜VIP, 网盘搜索, pansou, 云盘搜索, 猫狸盘搜"
        />
        <meta
          property="og:title"
          content="盘搜VIP - 网盘搜索工具精选导航，资源丰富，人工亲测"
        />
        <meta
          property="og:description"
          content="精选各大人工亲测好用的网盘搜索工具，提供网盘搜索工具一站式导航，优质、无广告、免费，长期维护更新，给你 VIP 一样的体验。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pansou.vip/" />
        <meta
          property="og:image"
          content="https://www.pansou.vip/img/preview.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rokcso" />
        <meta
          name="twitter:title"
          content="盘搜VIP - 网盘搜索工具精选导航，资源丰富，人工亲测"
        />
        <meta
          name="twitter:description"
          content="精选各大人工亲测好用的网盘搜索工具，提供网盘搜索工具一站式导航，优质、无广告、免费，长期维护更新，给你 VIP 一样的体验。"
        />
        <meta
          name="twitter:image"
          content="https://www.pansou.vip/img/preview.jpg"
        />
        <link rel="canonical" href="https://www.pansou.vip" />
        <link rel="icon" href="/favicon/icon16x16.png" />
        <link rel="icon" href="/favicon/icon32x32.png" />
        <link rel="icon" href="/favicon/icon48x48.png" />
        <link rel="icon" href="/favicon/icon64x64.png" />
        <link rel="icon" href="/favicon/icon128x128.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        {/* Bing Webmaster Tools 所有权验证 */}
        <meta name="msvalidate.01" content="05E9347530EE1BD90989B5CE372F8A34" />
        {/* 百度搜索资源平台所有权验证 */}
        <meta name="baidu-site-verification" content="codeva-UUrg35CVxA" />
        {/* 私有化部署的 umami 统计分析 */}
        {/* <script
          async
          src="https://umami.rokcso.com/script.js"
          data-website-id="cb83dca9-6660-498d-b734-7fda164d8e43"
        ></script> */}
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X619Y8FDPE"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-X619Y8FDPE');`,
          }}
        />
        {/* 百度统计代码 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var _hmt = _hmt || [];
                    (function() {
                      var hm = document.createElement("script");
                      hm.src = "https://hm.baidu.com/hm.js?7b11ad50149dfb60bd4a4bdf67510106";
                      var s = document.getElementsByTagName("script")[0]; 
                      s.parentNode.insertBefore(hm, s);
                    })();`,
          }}
        />
        {/* Google Adsence */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2984496936924659"
          crossorigin="anonymous"
        ></script>
      </Head>
    </>
  );
}
