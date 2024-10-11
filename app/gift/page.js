import Image from "next/image";

export const metadata = {
  title: "网盘搜索项目副业赚钱 - 网盘搜索工具精选导航",
  description: "盘搜VIP 推荐的网盘搜索项目，帮助用户利用副业赚钱。",
  metadataBase: new URL("https://www.pansou.vip/"),
  alternates: {
    canonical: "/gift",
  },
};

export default function Home() {
  return (
    <div>
      <h1></h1>
      <div>
        <h2>搭建你自己的网盘搜索工具 & 副业赚钱</h2>
        <Image
          src="/img/yuansou.png"
          alt="元搜系统截图"
          layout="responsive"
          width={499}
          height={194}
        />
        <br />
        <br />
        <p>
          内测中... 你可以通过{" 👉 "}
          <a
            href="https://cvlr2wiufrz.feishu.cn/share/base/form/shrcnHckduwGEEFk2Y3yR04K3Ic?prefill_反馈类型=副业赚钱"
            title="留言问卷链接"
            target="_blank"
          >
            这个表单
          </a>
          {" 👈 "}
          提交你的微信，我将尽快（24h 内）与你取得联系。
        </p>
      </div>
    </div>
  );
}
