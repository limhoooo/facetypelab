'use client';

import Image from 'next/image';
import { AGENCIES, AGENCY_CLASSES, getAgencyClass } from '@/data/agencies';
import type { Prediction } from '@/hooks/useTeachableMachine';

interface ResultCardProps {
  predictions: Prediction[];
  userImageSrc?: string | null;
  onReset: () => void;
}

export default function ResultCard({ predictions, userImageSrc, onReset }: ResultCardProps) {
  const top = predictions[0];

  // 성별 분리 클래스(sm_male)와 기존 클래스(sm) 모두 지원
  const agencyClass = getAgencyClass(top?.className);
  const legacyAgency = !agencyClass ? AGENCIES.find((a) => a.id === top?.className) : null;

  if (!agencyClass && !legacyAgency) return null;

  // 표시에 사용할 데이터 통합
  const display = agencyClass ?? {
    agencyName: legacyAgency!.nameKo,
    genderLabel: '아이돌 상',
    gradient: legacyAgency!.gradient,
    emoji: legacyAgency!.emoji,
    description: legacyAgency!.description,
    keywords: legacyAgency!.keywords,
    representativeIdols: legacyAgency!.representativeIdols,
    representativeImage: null as string | null,
  };

  const handleShare = async () => {
    const label = agencyClass
      ? `${agencyClass.agencyName} ${agencyClass.genderLabel}`
      : legacyAgency!.nameKo + ' 얼굴상';
    const text = `나는 ${label}! ${display.emoji}\n"내가 아이돌이었다면?" 테스트 해보기 → https://facetypelab.pages.dev/theme/idol`;
    if (navigator.share) {
      await navigator.share({ text });
    } else {
      await navigator.clipboard.writeText(text);
      alert('결과가 클립보드에 복사되었습니다!');
    }
  };

  return (
    <div className="w-full animate-fade-in space-y-3">

      {/* ① 상단: 분석완료 + 서브타이틀 + 해시태그 */}
      <div className="px-1 py-4 text-center">
        <span className="text-3xl">{display.emoji}</span>
        <p className="text-gray-400 text-xs font-medium mt-2 tracking-widest uppercase">분석 완료</p>
        <h2 className="text-2xl font-extrabold mt-1 text-gray-900 leading-tight">{display.agencyName}</h2>
        <p className="text-sm font-semibold mt-1 mb-4">
          <span className="text-indigo-500">{display.genderLabel}</span>
          <span className="text-gray-600">입니다</span>
        </p>
        <div className="border-t border-gray-100 pt-4 space-y-3">
          <p className="text-gray-500 text-sm leading-relaxed">{display.description}</p>
          {/* 해시태그 */}
          <div className="flex flex-wrap justify-center gap-1.5">
            {display.keywords.map((kw) => (
              <span key={kw} className="bg-indigo-50 text-indigo-500 border border-indigo-100 rounded-full px-3 py-1 text-xs font-semibold">
                #{kw}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ② 하단 가로: 내 사진 | 대표 이미지 */}
      <div className="flex gap-3 items-stretch">

        {/* 왼쪽: 내 사진 (카드 꽉 채움) */}
        <div className="flex-1 rounded-3xl overflow-hidden shadow-lg relative min-h-[200px]">
          {userImageSrc ? (
            <Image src={userImageSrc} alt="내 사진" fill className="object-cover object-top" />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${display.gradient} flex items-center justify-center text-5xl`}>
              {display.emoji}
            </div>
          )}
        </div>

        {/* 오른쪽: 대표 이미지 */}
        {'representativeImage' in display && display.representativeImage ? (
          <div className="flex-1 rounded-3xl overflow-hidden shadow-sm relative min-h-[200px]">
            <Image
              src={display.representativeImage}
              alt={`${display.agencyName} ${display.genderLabel} 대표 이미지`}
              fill
              sizes="50vw"
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 text-white">
              <p className="text-xs text-white/60">대표 아이돌</p>
              <p className="text-xs font-extrabold drop-shadow leading-tight">
                {display.representativeIdols.join(' · ')}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex-1 rounded-3xl bg-white shadow-sm p-4 flex flex-col justify-center">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">대표 아이돌</p>
            <p className="text-gray-800 font-semibold text-sm">{display.representativeIdols.join(' · ')}</p>
          </div>
        )}
      </div>

      {/* 점수 */}
      <div className="bg-white rounded-3xl shadow-sm p-5 space-y-3">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">점수</p>
        {predictions.map((pred) => {
          const ac = getAgencyClass(pred.className);
          const la = !ac ? AGENCIES.find((a) => a.id === pred.className) : null;
          const label = ac ? `${ac.emoji} ${ac.agencyName} ${ac.genderLabel}` : la ? `${la.emoji} ${la.nameKo}` : pred.className;
          const gradient = ac?.gradient ?? la?.gradient ?? 'from-gray-400 to-gray-600';
          const pct = Math.round(pred.probability * 100);
          const isTop = pred.className === top.className;
          return (
            <div key={pred.className} className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className={isTop ? 'font-bold text-gray-900' : 'text-gray-400'}>{label}</span>
                <span className={`font-extrabold ${isTop ? 'text-indigo-600' : 'text-gray-300'}`}>{pct}%</span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${gradient} transition-all duration-700`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* 버튼 */}
      <div className="flex gap-3 pt-1">
        <button
          onClick={onReset}
          className="flex-1 py-3.5 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition-colors"
        >
          다시 하기
        </button>
        <button
          onClick={handleShare}
          className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white font-bold shadow-md transition-all"
        >
          공유하기 📤
        </button>
      </div>
    </div>
  );
}
