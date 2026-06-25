import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-violet-100 mt-4 py-8 px-4">
      <div className="max-w-xl mx-auto text-center space-y-3">
        <p className="text-violet-300 text-xs leading-relaxed">
          업로드된 사진은 서버에 저장되지 않으며 브라우저에서만 처리됩니다.
          <br />본 결과는 재미 목적이며 어떠한 차별적 의도도 없습니다.
        </p>
        <div className="flex justify-center gap-5 text-xs text-violet-400">
          <Link href="/about" className="hover:text-indigo-500 transition-colors">서비스 소개</Link>
          <Link href="/privacy-policy" className="hover:text-indigo-500 transition-colors">개인정보처리방침</Link>
          <Link href="/terms" className="hover:text-indigo-500 transition-colors">이용약관</Link>
          <a href="mailto:dlagh123@gmail.com" className="hover:text-indigo-500 transition-colors">문의</a>
        </div>
        <p className="text-violet-200 text-xs">© 2026 FaceType Lab. All rights reserved.</p>
      </div>
    </footer>
  );
}
