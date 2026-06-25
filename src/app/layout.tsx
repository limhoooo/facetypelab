import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://facetypelab.pages.dev'),
  title: 'FaceType Lab',
  description: 'AI 기반 얼굴 유형 분석 플랫폼',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${geist.variable} antialiased`}>
      <body className="bg-violet-50 min-h-screen">{children}</body>
    </html>
  );
}
