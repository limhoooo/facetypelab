import type { Metadata } from 'next';
import IdolClassifier from './IdolClassifier';

export const metadata: Metadata = {
  title: '내가 아이돌이었다면? — 기획사 얼굴상 분석 | FaceType Lab',
  description: '내 사진으로 알아보는 SM, YG, HYBE, JYP 기획사 얼굴상! AI가 분석해드립니다.',
  openGraph: {
    title: '내가 아이돌이었다면? 기획사 얼굴상 분석',
    description: 'SM? YG? HYBE? JYP? 당신의 얼굴은 어느 기획사 스타일인가요?',
    url: 'https://facetypelab.pages.dev/theme/idol',
    siteName: 'FaceType Lab',
  },
};

const AGENCY_INFO = [
  { emoji: '💎', name: 'SM',   desc: '조각미 · 도자기 피부',  color: 'bg-blue-500' },
  { emoji: '🔥', name: 'YG',   desc: '강렬함 · 힙한 감성',   color: 'bg-yellow-500' },
  { emoji: '✨', name: 'HYBE', desc: '자연스러움 · 청순',    color: 'bg-purple-500' },
  { emoji: '🌟', name: 'JYP',  desc: '눈웃음 · 발랄함',     color: 'bg-orange-500' },
];

export default function IdolThemePage() {
  return (
    <main className="min-h-screen bg-violet-50">
      {/* 히어로 */}
      <div className="bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 px-4 pt-12 pb-24 text-center">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-8 transition-colors"
        >
          ← 목록으로
        </a>
        <div className="text-5xl mb-4 drop-shadow-md">🎤</div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          내가 아이돌이었다면?
        </h1>
        <p className="text-rose-100 mt-3 text-sm leading-relaxed">
          사진을 올리면 AI가 당신의 얼굴이
          <br />
          <span className="text-white font-bold">SM · YG · HYBE · JYP</span> 중
          어느 기획사 스타일인지 분석해드려요!
        </p>
      </div>

      <div className="max-w-xl mx-auto px-4 -mt-10 pb-16 space-y-4">
        {/* 분류기 카드 */}
        <div className="bg-white rounded-3xl shadow-md p-6">
          <IdolClassifier />
        </div>

        {/* 기획사 소개 */}
        <div className="bg-white rounded-3xl shadow-md p-5">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">기획사별 얼굴상</p>
          <div className="grid grid-cols-2 gap-3">
            {AGENCY_INFO.map((ag) => (
              <div key={ag.name} className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3">
                <div className={`w-9 h-9 ${ag.color} rounded-2xl flex items-center justify-center text-lg shadow-sm shrink-0`}>
                  {ag.emoji}
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm">{ag.name}</p>
                  <p className="text-gray-400 text-xs leading-tight">{ag.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
