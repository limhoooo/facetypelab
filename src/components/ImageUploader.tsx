'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

interface ImageUploaderProps {
  onImageReady: (img: HTMLImageElement, src: string) => void;
  isLoading: boolean;
}

export default function ImageUploader({ onImageReady, isLoading }: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processImage = useCallback(
    (file: File) => {
      if (!file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const src = e.target?.result as string;
        setPreview(src);
        const img = document.createElement('img');
        img.onload = () => {
          onImageReady(img, src);
        };
        img.src = src;
      };
      reader.readAsDataURL(file);
    },
    [onImageReady],
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processImage(file);
  };

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file) processImage(file);
    },
    [processImage],
  );

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {preview ? (
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-56 h-56 rounded-3xl overflow-hidden shadow-lg ring-4 ring-rose-400/40">
            <Image src={preview} alt="업로드된 사진" fill className="object-cover" />
            {isLoading && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3">
                <div className="w-10 h-10 border-4 border-rose-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-rose-600 text-sm font-bold">분석 중...</p>
              </div>
            )}
          </div>
          <button
            onClick={() => { setPreview(null); if (fileInputRef.current) fileInputRef.current.value = ''; }}
            className="text-sm text-gray-400 hover:text-indigo-600 transition-colors"
          >
            다른 사진 선택 →
          </button>
        </div>
      ) : (
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`w-full h-52 rounded-3xl border-2 border-dashed cursor-pointer flex flex-col items-center justify-center gap-3 transition-all duration-200
            ${isDragging
              ? 'border-rose-400 bg-rose-50 scale-[1.01]'
              : 'border-gray-200 bg-gray-50 hover:border-indigo-400 hover:bg-indigo-50'
            }`}
        >
          <div className="w-14 h-14 bg-indigo-100 rounded-3xl flex items-center justify-center text-3xl">
            📸
          </div>
          <div className="text-center">
            <p className="text-gray-800 font-bold">사진을 업로드하세요</p>
            <p className="text-gray-400 text-sm mt-1">클릭하거나 드래그 앤 드롭</p>
            <p className="text-gray-300 text-xs mt-1">JPG · PNG · WEBP</p>
          </div>
        </div>
      )}

      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
    </div>
  );
}
