'use client';

import { useEffect, useState } from 'react';
import ImageUploader from '@/components/ImageUploader';
import WebcamView from '@/components/WebcamView';
import ResultCard from '@/components/ResultCard';
import AnalyzingScreen from '@/components/AnalyzingScreen';
import { useTeachableMachine } from '@/hooks/useTeachableMachine';
import type { Prediction } from '@/hooks/useTeachableMachine';
import { TM_LABEL_MAP } from '@/data/agencies';

// 모델 레이블("SM (여자 아이돌)")을 내부 키(sm_female)로 정규화
const normalizeLabel = (className: string) => TM_LABEL_MAP[className] ?? className;

const MODEL_URL = '/models/idol/model.json';

type Screen = 'loading' | 'error' | 'input' | 'analyzing' | 'result';
type Mode   = 'upload' | 'webcam';

export default function IdolClassifier() {
  const { loadModel, predictRaw } = useTeachableMachine();

  const [screen, setScreen]       = useState<Screen>('loading');
  const [mode, setMode]           = useState<Mode>('upload');
  const [showWebcam, setShowWebcam] = useState(false);
  const [results, setResults]     = useState<Prediction[]>([]);
  const [userImageSrc, setUserImageSrc] = useState<string | null>(null);

  // 모델 로드
  useEffect(() => {
    fetch(MODEL_URL, { method: 'HEAD' })
      .then((r) => {
        if (!r.ok) throw new Error('404');
        return loadModel(MODEL_URL);
      })
      .then(() => setScreen('input'))
      .catch(() => setScreen('error'));
  }, [loadModel]);

  // 이미지 업로드 예측 (예측 + 최소 3초 동시 대기)
  const handleImageReady = async (img: HTMLImageElement, src: string) => {
    setUserImageSrc(src);
    setScreen('analyzing');
    try {
      const [prediction] = await Promise.all([
        predictRaw(img),
        new Promise((r) => setTimeout(r, 3300)), // 애니메이션 완료까지 최소 대기
      ]);
      if (prediction.length === 0) throw new Error('empty');
      const normalized = prediction.map((p) => ({ ...p, className: normalizeLabel(p.className) }));
      setResults([...normalized].sort((a, b) => b.probability - a.probability));
      setScreen('result');
    } catch {
      setScreen('input');
    }
  };

  // 웹캠 캡처
  const handleWebcamCapture = (preds: Prediction[], captureSrc?: string) => {
    if (preds.length === 0) return;
    const normalized = preds.map((p) => ({ ...p, className: normalizeLabel(p.className) }));
    setResults([...normalized].sort((a, b) => b.probability - a.probability));
    if (captureSrc) setUserImageSrc(captureSrc);
    setShowWebcam(false);
    setScreen('result');
  };

  // 다시 하기
  const handleReset = () => {
    setResults([]);
    setUserImageSrc(null);
    setShowWebcam(false);
    setMode('upload');
    setScreen('input');
  };

  // ── 로딩 ──
  if (screen === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-10 text-gray-400">
        <div className="w-8 h-8 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm">AI 모델 불러오는 중...</p>
      </div>
    );
  }

  // ── 에러 ──
  if (screen === 'error') {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <div className="text-5xl">⚠️</div>
        <p className="text-gray-800 font-bold">서비스를 불러올 수 없습니다</p>
        <p className="text-gray-500 text-sm">AI 모델 로딩에 실패했습니다.</p>
        <p className="text-gray-400 text-xs mt-1">
          문제가 지속되면 관리자에게 문의해주세요.
        </p>
      </div>
    );
  }

  // ── 결과 ──
  if (screen === 'result') {
    return <ResultCard predictions={results} userImageSrc={userImageSrc} onReset={handleReset} />;
  }

  // ── 분석 중 ──
  if (screen === 'analyzing' && userImageSrc) {
    return <AnalyzingScreen userImageSrc={userImageSrc} onComplete={() => {}} />;
  }

  // ── 입력 ──
  return (
    <div className="flex flex-col gap-4">
      {!showWebcam && (
        <div className="flex bg-gray-100 rounded-2xl p-1 gap-1">
          <button
            onClick={() => { setMode('upload'); setShowWebcam(false); }}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
              mode === 'upload' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            📸 사진 업로드
          </button>
          <button
            onClick={() => { setMode('webcam'); setShowWebcam(true); }}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
              mode === 'webcam' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            🎥 웹캠 촬영
          </button>
        </div>
      )}

      {showWebcam ? (
        <WebcamView
          predictRaw={predictRaw}
          onCapture={handleWebcamCapture}
          onStop={() => { setShowWebcam(false); setMode('upload'); }}
        />
      ) : (
        <ImageUploader
          onImageReady={handleImageReady}
          isLoading={false}
        />
      )}
    </div>
  );
}
