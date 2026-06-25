import type { Metadata } from 'next';
import ThemeCard from '@/components/ThemeCard';
import Footer from '@/components/Footer';
import { THEMES } from '@/data/themes';

export const metadata: Metadata = {
  title: 'FaceType Lab — 내 얼굴 유형 분석기',
  description: 'AI가 분석하는 나의 얼굴 유형! 기획사 얼굴상, 동물상 등 다양한 테마로 나를 알아보세요.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-violet-50">
      {/* 히어로 */}
      <div className="bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 px-4 pt-16 pb-24 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-3xl mb-5 text-3xl shadow-lg">
          🧬
        </div>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          FaceType Lab
        </h1>
        <p className="text-indigo-200 mt-3 text-base leading-relaxed">
          사진 한 장으로 알아보는 나의 얼굴 유형
          <br />
          다양한 테마로 나만의 결과를 확인해보세요!
        </p>
      </div>

      {/* 카드 영역 — 히어로 아래로 겹쳐 올라옴 */}
      <div className="max-w-xl mx-auto px-4 -mt-10 pb-16">
        <div className="flex flex-col gap-3">
          {THEMES.map((theme) => (
            <ThemeCard key={theme.id} theme={theme} />
          ))}
        </div>

      </div>
      <Footer />
    </main>
  );
}
