import Card from "../components/card";
import posts from "./posts.json";

export const metadata = {
  title: "什么是盘搜VIP？ - 网盘搜索工具精选导航",
  metadataBase: new URL("https://www.pansou.vip/"),
  alternates: {
    canonical: "/posts",
  },
};

export default function Home() {
  return (
    <div>
      <h1>文章</h1>
      <Card cardInfo={posts[0]} />
    </div>
  );
}
