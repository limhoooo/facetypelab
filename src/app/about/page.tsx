import type { Metadata } from 'next';
import PolicyLayout from '@/components/PolicyLayout';

export const metadata: Metadata = {
  title: '서비스 소개 | FaceType Lab',
  description: 'FaceType Lab은 AI 기반 얼굴 유형 분석 플랫폼입니다.',
};

export default function AboutPage() {
  return (
    <PolicyLayout
      title="서비스 소개"
      subtitle="About FaceType Lab"
      updatedAt="2026년 6월 24일"
    >
      <h2>FaceType Lab이란?</h2>
      <p>
        FaceType Lab은 Google의 <strong>Teachable Machine</strong> 기술을 활용하여
        사진 한 장으로 나의 얼굴 유형을 분석해주는 AI 기반 오락 서비스입니다.
        &ldquo;내가 아이돌이었다면 어느 기획사 소속이었을까?&rdquo; 같은 재미있는 질문에
        AI가 답해드립니다.
      </p>

      <h2>핵심 기술</h2>
      <ul>
        <li>
          <strong>Google Teachable Machine</strong> — 이미지 분류 AI 모델 학습 플랫폼
        </li>
        <li>
          <strong>TensorFlow.js</strong> — 브라우저에서 직접 AI 모델을 실행
        </li>
        <li>
          <strong>Next.js</strong> — 빠르고 SEO 친화적인 웹 프레임워크
        </li>
      </ul>

      <h2>개인정보 보호 철학</h2>
      <p>
        FaceType Lab은 <strong>Privacy by Design</strong> 원칙을 따릅니다.
        업로드된 사진은 이용자의 브라우저 내에서만 처리되며,
        어떠한 서버에도 전송·저장되지 않습니다.
        얼굴 인식 결과도 기기 밖으로 나가지 않습니다.
      </p>

      <h2>제공 테마</h2>
      <ul>
        <li>🎤 <strong>내가 아이돌이었다면?</strong> — SM, YG, HYBE, JYP 기획사 얼굴상 분석</li>
        <li>🐾 <strong>나의 동물상은?</strong> — 고양이상, 강아지상 등 동물 관상 (준비 중)</li>
        <li>🌏 <strong>나는 어느 나라 사람상?</strong> — 국가별 외모 유형 분석 (준비 중)</li>
        <li>📺 <strong>K-드라마 주인공이라면?</strong> — 드라마 역할 유형 분석 (준비 중)</li>
      </ul>

      <h2>주의사항</h2>
      <p>
        본 서비스의 모든 분석 결과는 <strong>재미 목적의 AI 추정</strong>입니다.
        실제 외모, 인종, 개인 특성을 판단하거나 차별하는 것과 무관하며,
        결과를 과도하게 신뢰하지 않을 것을 권장합니다.
      </p>

      <h2>문의</h2>
      <p>
        서비스 관련 문의 및 제안은 아래 이메일로 보내주세요.
      </p>
      <ul>
        <li><strong>이메일:</strong> <a href="mailto:dlagh123@gmail.com">dlagh123@gmail.com</a></li>
      </ul>
    </PolicyLayout>
  );
}
