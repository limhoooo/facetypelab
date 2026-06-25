'use client';

import { useEffect, useRef, useState } from 'react';
import { getAgencyClass, AGENCIES } from '@/data/agencies';
import type { Prediction } from '@/hooks/useTeachableMachine';

interface WebcamViewProps {
  // TM 코드의 model.predict(webcam.canvas) 와 동일한 함수
  predictRaw: (canvas: HTMLCanvasElement) => Promise<Prediction[]>;
  onCapture: (predictions: Prediction[], captureSrc: string) => void;
  onStop: () => void;
}

export default function WebcamView({ predictRaw, onCapture, onStop }: WebcamViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const cancelledRef = useRef(false);
  const latestRef = useRef<Prediction[]>([]);
  const predictRawRef = useRef(predictRaw);

  const [isReady, setIsReady] = useState(false);
  const [camError, setCamError] = useState<string | null>(null);

  // 라이브 바 표시용 ref (TM 코드처럼 직접 DOM 업데이트 → React re-render 없이 60fps)
  const barRefs = useRef<{ bar: HTMLDivElement | null; pct: HTMLSpanElement | null; label: HTMLSpanElement | null }[]>([]);

  useEffect(() => { predictRawRef.current = predictRaw; }, [predictRaw]);

  useEffect(() => {
    cancelledRef.current = false;

    (async () => {
      try {
        // TM 코드: model = await tmImage.load(...) / webcam = new tmImage.Webcam(200, 200, flip)
        const tmImage = await import('@teachablemachine/image');
        const webcam = new tmImage.Webcam(200, 200, true); // TM 코드와 동일한 크기/flip
        await webcam.setup(); // TM 코드: await webcam.setup()
        await webcam.play();  // TM 코드: await webcam.play()

        if (cancelledRef.current) { webcam.stop(); return; }

        if (containerRef.current) {
          webcam.canvas.className = 'rounded-2xl w-full h-full object-cover';
          containerRef.current.appendChild(webcam.canvas);
        }
        setIsReady(true);

        // TM 코드의 loop() 함수와 동일한 구조
        const loop = async () => {
          if (cancelledRef.current) return;

          webcam.update(); // TM 코드: webcam.update()

          // TM 코드: const prediction = await model.predict(webcam.canvas)
          const prediction = await predictRawRef.current(webcam.canvas);

          // TM 코드: labelContainer.childNodes[i].innerHTML = classPrediction
          // → React 없이 직접 DOM 업데이트 (동일한 방식)
          for (let i = 0; i < prediction.length; i++) {
            const refs = barRefs.current[i];
            if (!refs) continue;
            const pct = Math.round(prediction[i].probability * 100);
            if (refs.pct) refs.pct.textContent = `${pct}%`;
            if (refs.bar) refs.bar.style.width = `${pct}%`;
            if (refs.label) {
              const ac = getAgencyClass(prediction[i].className);
              const la = !ac ? AGENCIES.find((a) => a.id === prediction[i].className) : null;
              refs.label.textContent = ac
                ? `${ac.emoji} ${ac.agencyName} ${ac.genderLabel}`
                : la ? `${la.emoji} ${la.nameKo}` : prediction[i].className;
            }
          }

          // 캡처용 저장
          latestRef.current = prediction;

          // TM 코드: window.requestAnimationFrame(loop)
          rafRef.current = requestAnimationFrame(loop);
        };

        // TM 코드: window.requestAnimationFrame(loop)
        rafRef.current = requestAnimationFrame(loop);
      } catch {
        if (!cancelledRef.current) setCamError('카메라 권한을 허용해주세요.');
      }
    })();

    return () => {
      cancelledRef.current = true;
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {/* 웹캠 화면 */}
      <div className="relative w-56 h-56 rounded-3xl overflow-hidden bg-gray-900 shadow-lg ring-4 ring-rose-400/40">
        <div ref={containerRef} className="w-full h-full" />
        {!isReady && !camError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/70">
            <div className="w-8 h-8 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            <p className="text-xs">카메라 연결 중...</p>
          </div>
        )}
        {camError && (
          <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
            <p className="text-white/80 text-sm">{camError}</p>
          </div>
        )}
      </div>

      {/* 실시간 라이브 바 — TM 코드의 label-container 역할 */}
      {isReady && (
        <div className="w-full bg-gray-50 rounded-2xl p-4 space-y-2">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">실시간 분석</p>
          {/* 최대 클래스 수만큼 슬롯 생성 (TM 코드: for let i=0; i<maxPredictions; i++) */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span ref={(el) => { if (!barRefs.current[i]) barRefs.current[i] = { bar: null, pct: null, label: null }; barRefs.current[i].label = el; }} className="text-gray-500 truncate max-w-[75%]" />
                <span ref={(el) => { if (!barRefs.current[i]) barRefs.current[i] = { bar: null, pct: null, label: null }; barRefs.current[i].pct = el; }} className="font-extrabold text-gray-300 ml-1" />
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  ref={(el) => { if (!barRefs.current[i]) barRefs.current[i] = { bar: null, pct: null, label: null }; barRefs.current[i].bar = el; }}
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-none"
                  style={{ width: '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 버튼 */}
      <div className="flex gap-3 w-full">
        <button
          onClick={onStop}
          className="flex-1 py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-sm transition-colors"
        >
          ✕ 카메라 끄기
        </button>
        <button
          onClick={() => {
            const webcam = (containerRef.current?.querySelector('canvas') as HTMLCanvasElement | null);
            const captureSrc = webcam ? webcam.toDataURL('image/jpeg') : '';
            if (latestRef.current.length > 0) onCapture(latestRef.current, captureSrc);
          }}
          disabled={!isReady}
          className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 disabled:opacity-40 text-white font-bold text-sm shadow-md transition-all"
        >
          📸 지금 결과 보기
        </button>
      </div>
    </div>
  );
}
