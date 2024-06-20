import Header from "./components/header";
import Footer from "./components/footer";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "盘搜VIP - 人工亲测精选的网盘搜索工具导航 - pansou.vip",
  description:
    "盘搜VIP，精选各大人工亲测好用的网盘搜索工具，提供网盘搜索工具一站式导航，优质、免费，长期维护更新，给你 VIP 一样的体验。",
  keywords: [
    "网盘搜索",
    "盘搜搜",
    "盘搜",
    "盘搜VIP",
    "网盘搜索工具",
    "pansou",
    "云盘搜索",
  ],
  authors: [{ name: "rokcso", url: "https://rokcso.com/" }],
  metadataBase: new URL("https://www.pansou.vip/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "盘搜VIP - 网盘搜索工具精选导航，资源丰富，人工亲测",
    description:
      "精选各大人工亲测好用的网盘搜索工具，提供网盘搜索工具一站式导航，优质、免费，长期维护更新，给你 VIP 一样的体验。",
    url: "https://www.pansou.vip/",
    siteName: "盘搜VIP",
    images: "/img/preview.jpg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "盘搜VIP - 网盘搜索工具精选导航，资源丰富，人工亲测",
    description:
      "精选各大人工亲测好用的网盘搜索工具，提供网盘搜索工具一站式导航，优质、免费，长期维护更新，给你 VIP 一样的体验。",
    site: "@rokcso",
    creator: "@rokcso",
    images: "/img/preview.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        {/* Bing Webmaster Tools 所有权验证 */}
        <meta name="msvalidate.01" content="05E9347530EE1BD90989B5CE372F8A34" />
        {/* 百度搜索资源平台所有权验证 */}
        <meta name="baidu-site-verification" content="codeva-UUrg35CVxA" />
        {/* Google gtag.js */}
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
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
