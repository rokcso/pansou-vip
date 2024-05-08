import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  // 使用 useEffect 钩子在组件加载后设置 HTML 标签的语言
  useEffect(() => {
    document.documentElement.lang = "zh"; // 将 'zh' 替换为您需要的语言代码
  }, []); // 空依赖数组确保这个效果仅在组件挂载时运行一次
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}
