import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Cloudflare Pages는 이미지 최적화 서버 없음
  },
};

export default nextConfig;