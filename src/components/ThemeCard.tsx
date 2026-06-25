import Link from 'next/link';
import type { Theme } from '@/data/themes';

interface ThemeCardProps {
  theme: Theme;
}

export default function ThemeCard({ theme }: ThemeCardProps) {
  const card = (
    <div
      className={`bg-white rounded-3xl shadow-md overflow-hidden transition-all duration-200
        ${theme.available
          ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer'
          : 'opacity-50 cursor-not-allowed'
        }`}
    >
      {/* 컬러 그라디언트 배너 */}
      <div className={`bg-gradient-to-r ${theme.bgGradient} px-5 pt-5 pb-8`}>
        <span className="text-4xl drop-shadow">{theme.emoji}</span>
      </div>

      {/* 텍스트 영역 — 배너와 겹치도록 음수 margin */}
      <div className="px-5 -mt-4 pb-5">
        <div className="bg-white rounded-2xl shadow-sm px-4 py-3 mb-3">
          <h3 className="text-gray-900 font-bold text-base leading-snug">{theme.title}</h3>
          <p className="text-indigo-500 text-xs font-semibold mt-0.5">{theme.subtitle}</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <p className="text-gray-500 text-sm leading-relaxed flex-1">{theme.description}</p>
          {theme.available ? (
            <div className="shrink-0 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center shadow">
              <span className="text-white text-sm font-bold">›</span>
            </div>
          ) : (
            <span className="shrink-0 text-xs bg-gray-100 text-gray-400 px-2.5 py-1 rounded-full font-medium">
              준비 중
            </span>
          )}
        </div>
      </div>
    </div>
  );

  if (!theme.available) return card;
  return <Link href={theme.path}>{card}</Link>;
}
