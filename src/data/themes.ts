export interface Theme {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  available: boolean;
  path: string;
  color: string;
  bgGradient: string;
}

export const THEMES: Theme[] = [
  {
    id: 'idol',
    title: '내가 아이돌이었다면?',
    subtitle: '기획사 얼굴상 분석',
    description: '당신의 얼굴은 SM, YG, HYBE, JYP 중 어느 기획사 스타일인가요?',
    emoji: '🎤',
    available: true,
    path: '/theme/idol',
    color: '#6366f1',
    bgGradient: 'from-indigo-500 to-purple-600',
  },
  {
    id: 'animal',
    title: '나의 동물상은?',
    subtitle: '동물 관상 분석',
    description: '강아지상? 고양이상? 여우상? 당신의 동물상을 알아보세요!',
    emoji: '🐾',
    available: false,
    path: '/theme/animal',
    color: '#f59e0b',
    bgGradient: 'from-amber-400 to-orange-500',
  },
  {
    id: 'country',
    title: '나는 어느 나라 사람상?',
    subtitle: '국가별 외모 분석',
    description: '당신의 얼굴형은 어느 나라 사람과 가장 닮았을까요?',
    emoji: '🌏',
    available: false,
    path: '/theme/country',
    color: '#10b981',
    bgGradient: 'from-emerald-400 to-teal-500',
  },
  {
    id: 'drama',
    title: 'K-드라마 주인공이라면?',
    subtitle: '드라마 역할 유형 분석',
    description: '당신은 재벌 2세? 순수 청년? K-드라마 속 당신의 역할을 찾아보세요!',
    emoji: '📺',
    available: false,
    path: '/theme/drama',
    color: '#ec4899',
    bgGradient: 'from-pink-400 to-rose-500',
  },
];
