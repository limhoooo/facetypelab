import Link from 'next/link';

interface PolicyLayoutProps {
  title: string;
  subtitle: string;
  updatedAt: string;
  children: React.ReactNode;
}

export default function PolicyLayout({ title, subtitle, updatedAt, children }: PolicyLayoutProps) {
  return (
    <main className="min-h-screen bg-violet-50">
      {/* 헤더 */}
      <div className="bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 px-4 pt-12 pb-20 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-8 transition-colors"
        >
          ← FaceType Lab 홈으로
        </Link>
        <h1 className="text-3xl font-extrabold text-white">{title}</h1>
        <p className="text-indigo-200 mt-2 text-sm">{subtitle}</p>
        <p className="text-indigo-300/60 mt-1 text-xs">최종 업데이트: {updatedAt}</p>
      </div>

      {/* 본문 카드 */}
      <div className="max-w-2xl mx-auto px-4 -mt-8 pb-16">
        <div className="bg-white rounded-3xl shadow-md p-7 prose prose-sm prose-gray max-w-none
          prose-headings:font-bold prose-headings:text-gray-900
          prose-h2:text-lg prose-h2:mt-8 prose-h2:mb-3 prose-h2:border-b prose-h2:border-gray-100 prose-h2:pb-2
          prose-h3:text-base prose-h3:mt-5 prose-h3:mb-2
          prose-p:text-gray-600 prose-p:leading-relaxed
          prose-ul:text-gray-600 prose-li:my-1
          prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-800
        ">
          {children}
        </div>

        {/* 하단 링크 */}
        <div className="flex justify-center gap-6 mt-8 text-xs text-violet-400">
          <Link href="/privacy-policy" className="hover:text-indigo-600 transition-colors">개인정보처리방침</Link>
          <Link href="/terms" className="hover:text-indigo-600 transition-colors">이용약관</Link>
          <Link href="/about" className="hover:text-indigo-600 transition-colors">서비스 소개</Link>
        </div>
      </div>
    </main>
  );
}
