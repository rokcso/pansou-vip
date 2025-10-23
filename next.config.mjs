/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Cloudflare 不支持 Next.js Image Optimization
  },
  // 可选：如果需要自定义输出目录
  // distDir: 'out',
};

export default nextConfig;
