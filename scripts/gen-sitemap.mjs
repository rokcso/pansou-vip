#!/usr/bin/env node
/**
 * 生成 public/sitemap.xml。
 *
 * 为什么要有个脚本而不是手写：上一版 sitemap 的 lastmod 全部冻结在
 * 2026-07-29，而页面上的内容一直没停过，结果就是「页面说自己今天更新过、
 * sitemap 说内容停在两个月前」——两个信号互相打脸，Google 会倾向于相信
 * sitemap，进而降低重抓频率。手写 96 条 URL 的时候，没人会记得改 lastmod。
 *
 * 日期不在这里写死，而是从 app/page.js 的 lastUpdateDateStr 读取——那份常量
 * 是首页 hero 上「最近更新时间」的展示来源，也就是站内对「内容更新到哪天」
 * 唯一的声明。两处共用一份，就不存在漂移的可能；读不到则直接失败，而不是
 * 悄悄用一个过期日期生成。
 *
 * 用法：pnpm sitemap（或 node scripts/gen-sitemap.mjs）
 *
 * 不含 /about：该路径 301 到 panhunt.com，不是本站的规范页面。
 * 不写 priority / changefreq：Google 已明确表示忽略这两个字段。
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://www.pansou.vip';

const readJson = (relPath) =>
  JSON.parse(readFileSync(join(ROOT, relPath), 'utf8'));

/** 单一事实来源：首页 hero 展示的「最近更新时间」。 */
function resolveLastmod() {
  const source = readFileSync(join(ROOT, 'app/page.js'), 'utf8');
  const matched = source.match(/lastUpdateDateStr\s*=\s*"(\d{4}-\d{2}-\d{2})"/);
  if (!matched) {
    console.error(
      '找不到 app/page.js 里的 lastUpdateDateStr，拒绝生成 sitemap。\n' +
        '换用猜测的日期会让 sitemap 与页面上的更新时间不一致。'
    );
    process.exit(1);
  }
  return `${matched[1]}T00:00:00+00:00`;
}

/**
 * 工具档位的顺序即首页展示顺序（精选 → 次要 → 备用 → 黑名单 → 废弃），
 * 让 sitemap 的权重暗示与页面实际结构一致。
 */
const TOOL_TIERS = [
  'featuredSites',
  'secondaryFeaturedSites',
  'standbySites',
  'blackSites',
  'wastedSites',
];

const lastmod = resolveLastmod();

const paths = [
  '/',
  '/rubric',
  '/forum',
  '/faq',
  '/upgrade',
  ...TOOL_TIERS.flatMap((tier) =>
    readJson(`public/data/${tier}.json`).map((entry) => `/tool/${entry.id}`)
  ),
  ...readJson('public/data/forumSites.json').map(
    (entry) => `/forum/${entry.id}`
  ),
];

// 重复 URL 会让 Search Console 报「提交的网址有重复」，属于静默错误。
const duplicated = paths.filter((path, index) => paths.indexOf(path) !== index);
if (duplicated.length > 0) {
  console.error('sitemap 出现重复 URL：', [...new Set(duplicated)]);
  process.exit(1);
}

const entries = paths
  .map(
    (path) =>
      `  <url>\n    <loc>${SITE}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;

writeFileSync(join(ROOT, 'public/sitemap.xml'), xml);
console.log(`public/sitemap.xml 已生成：${paths.length} 条 URL，lastmod=${lastmod}`);
