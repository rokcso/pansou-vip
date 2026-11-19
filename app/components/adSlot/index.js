"use client";

import { useEffect, useRef } from "react";
import { ADSENSE_CLIENT, ADSENSE_SLOTS } from "../../config/adsense";
import styles from "./index.module.css";

/**
 * 一个 Google AdSense display 广告位。
 *
 * 它和「直接粘贴 AdSense 代码片段」的差别只有三条，但三条都不能省：
 *
 * 1. **盒子先占位。** 广告创意到达之前 <ins> 就有 min-height，填充时不会
 *    产生布局位移。少了它，每个广告位都会把页面往下顶一次，把站点别处做
 *    好的 CLS 全部抵消掉，而「会跳动的广告」正是 AdSense 自己也不建议的。
 * 2. **没有 slot id 就不渲染。** ID 来自 app/config/adsense.js；取不到时
 *    组件返回 null，而不是留一块空盒子。半配置状态下的结果是「没有广告」，
 *    而不是「每页一段空白」。
 * 3. **一个 <ins> 只 push 一次，绝不允许两次。** adsbygoogle.push({}) 填充
 *    的是「最近一个还没填的 <ins>」，多 push 一次会让该单元永久空白并报错。
 *    开发环境 React 的 effect 会执行两遍，所以这里用 ref +
 *    Google 自己写入的 data-adsbygoogle-status 双重防重。
 *
 * loader（adsbygoogle.js）不在这里引入，它由 app/layout.js 的 <head> 统一
 * 加载。window.adsbygoogle 是个队列，loader 没到之前 push 是官方推荐的接入
 * 顺序，不需要等待。
 */
export default function AdSlot({ slot, className, label = true }) {
  const adSlotId = ADSENSE_SLOTS[slot];
  const insRef = useRef(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    if (!adSlotId) return;
    const el = insRef.current;
    if (!el) return;
    // 同一实例重复执行（React 18 StrictMode / 热更新）直接跳过。
    if (pushedRef.current) return;
    // 广告被处理过一次后会带上 status 标记，再 push 只会留下空白。
    if (el.getAttribute("data-adsbygoogle-status")) return;
    pushedRef.current = true;
    if (!window.adsbygoogle) window.adsbygoogle = [];
    try {
      window.adsbygoogle.push({});
    } catch (err) {
      // push 失败只记日志，绝不能让它冒泡把整页交互搞挂；占位盒子还在。
      console.error("AdSense push failed:", err);
    }
  }, [adSlotId]);

  if (!adSlotId) return null;

  return (
    <aside
      className={className ? `${styles.wrapper} ${className}` : styles.wrapper}
      aria-label="广告"
    >
      {label && <span className={styles.label}>广告</span>}
      <ins
        ref={insRef}
        className={`adsbygoogle ${styles.unit}`}
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={adSlotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
