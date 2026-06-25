'use client';

import { useState, useCallback, useRef } from 'react';

export interface Prediction {
  className: string;
  probability: number;
}

interface TMModel {
  predict: (input: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement) => Promise<Prediction[]>;
  getTotalClasses: () => number;
}

interface UseTeachableMachineReturn {
  predictions: Prediction[];
  isLoading: boolean;
  isModelLoading: boolean;
  error: string | null;
  loadModel: (modelUrl: string) => Promise<void>;
  // 이미지 업로드용: 결과를 React state에 저장
  predict: (imageElement: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement) => Promise<void>;
  // 웹캠 루프용: TM 코드와 동일하게 prediction 배열을 직접 반환
  predictRaw: (imageElement: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement) => Promise<Prediction[]>;
  reset: () => void;
}

export function useTeachableMachine(): UseTeachableMachineReturn {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const modelRef = useRef<TMModel | null>(null);

  // TM 코드: model = await tmImage.load(modelURL, metadataURL)
  const loadModel = useCallback(async (modelUrl: string) => {
    setIsModelLoading(true);
    setError(null);
    try {
      const tmImage = await import('@teachablemachine/image');
      const metadataUrl = modelUrl.replace('model.json', 'metadata.json');
      modelRef.current = await tmImage.load(modelUrl, metadataUrl);
    } catch (err) {
      setError('모델을 불러오는데 실패했습니다.');
      console.error(err);
      throw err; // 호출자에서 실패 감지 가능하도록
    } finally {
      setIsModelLoading(false);
    }
  }, []);

  // 이미지 업로드용: TM 코드 model.predict() 후 React state 업데이트
  const predict = useCallback(async (imageElement: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement) => {
    if (!modelRef.current) return;
    setIsLoading(true);
    try {
      // TM 코드: const prediction = await model.predict(webcam.canvas);
      const prediction = await modelRef.current.predict(imageElement);
      setPredictions([...prediction].sort((a, b) => b.probability - a.probability));
    } catch (err) {
      setError('분석 중 오류가 발생했습니다.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 웹캠 루프용: TM 코드와 동일하게 배열 직접 반환 (setState 없음 → 60fps 가능)
  const predictRaw = useCallback(async (imageElement: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement): Promise<Prediction[]> => {
    if (!modelRef.current) return [];
    // TM 코드: const prediction = await model.predict(webcam.canvas);
    return modelRef.current.predict(imageElement);
  }, []);

  const reset = useCallback(() => {
    setPredictions([]);
    setError(null);
  }, []);

  return { predictions, isLoading, isModelLoading, error, loadModel, predict, predictRaw, reset };
}
