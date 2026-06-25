'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const STAGES = [
  { label: '얼굴 감지 중...', pct: 20 },
  { label: '이목구비 분석 중...', pct: 45 },
  { label: '기획사 특징 추출 중...', pct: 70 },
  { label: '최종 매칭 중...', pct: 90 },
  { label: '결과 산출 완료!', pct: 100 },
];

interface AnalyzingScreenProps {
  userImageSrc: string;
  onComplete: () => void;
}

export default function AnalyzingScreen({ userImageSrc, onComplete }: AnalyzingScreenProps) {
  const [stageIdx, setStageIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const totalMs = 3000;
    const startTime = Date.now();

    // 프로그레스 바 부드럽게 증가
    const tick = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const raw = (elapsed / totalMs) * 100;
      setProgress(Math.min(raw, 100));
    }, 30);

    // 스테이지 텍스트 순서대로 전환
    const stageTimers = STAGES.map((_, i) =>
      setTimeout(() => setStageIdx(i), (totalMs / STAGES.length) * i)
    );

    // 3초 후 완료
    const done = setTimeout(() => {
      setDone(true);
      clearInterval(tick);
      setTimeout(onComplete, 300); // 완료 애니메이션 잠깐 보여주고 전환
    }, totalMs);

    return () => {
      clearInterval(tick);
      stageTimers.forEach(clearTimeout);
      clearTimeout(done);
    };
  }, [onComplete]);

  const current = STAGES[stageIdx];

  return (
    <div className="flex flex-col items-center gap-6 py-4 animate-fade-in">

      {/* 스캔 사진 영역 */}
      <div className="relative w-52 h-52">
        {/* 사진 */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
          <Image src={userImageSrc} alt="분석 중" fill className="object-cover" />
          <div className="absolute inset-0 bg-indigo-900/30" />
        </div>

        {/* 레이더 링 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="radar-ring absolute w-32 h-32 rounded-full border-2 border-cyan-400/60" />
          <div className="radar-ring-delay absolute w-32 h-32 rounded-full border-2 border-violet-400/60" />
        </div>

        {/* 스캔 라인 */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <div className="scan-line absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_8px_2px_rgba(103,232,249,0.6)]" />
        </div>

        {/* 코너 브라켓 */}
        <div className="corner-pulse absolute top-2 left-2  w-5 h-5 border-t-2 border-l-2 border-cyan-400" />
        <div className="corner-pulse absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-cyan-400" style={{ animationDelay: '0.3s' }} />
        <div className="corner-pulse absolute bottom-2 left-2  w-5 h-5 border-b-2 border-l-2 border-cyan-400" style={{ animationDelay: '0.6s' }} />
        <div className="corner-pulse absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-cyan-400" style={{ animationDelay: '0.9s' }} />

        {/* 중앙 십자선 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <div className="w-10 h-px bg-cyan-300" />
          <div className="absolute h-10 w-px bg-cyan-300" />
        </div>

        {/* 완료 체크 */}
        {done && (
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-indigo-900/60 backdrop-blur-sm animate-fade-in">
            <span className="text-5xl">✓</span>
          </div>
        )}
      </div>

      {/* 스테이지 텍스트 */}
      <div className="text-center space-y-2">
        <p key={stageIdx} className="glitch text-gray-800 font-bold text-sm animate-fade-in">
          {current.label}
        </p>
        {/* 도트 */}
        <div className="flex justify-center gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce"
              style={{ animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </div>
      </div>

      {/* 프로그레스 바 */}
      <div className="w-full space-y-1.5">
        <div className="flex justify-between text-xs text-gray-400 font-mono">
          <span>AI ANALYZING</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 transition-all duration-75 relative"
            style={{ width: `${progress}%` }}
          >
            {/* 반짝임 효과 */}
            <div className="absolute right-0 top-0 h-full w-4 bg-white/40 blur-sm rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
