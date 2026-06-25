export interface AgencyClass {
  id: string;           // 'sm_male', 'sm_female' — Teachable Machine 클래스명과 일치
  agencyId: string;     // 'sm'
  agencyName: string;   // 'SM 엔터테인먼트'
  gender: 'male' | 'female';
  genderLabel: string;  // '남자아이돌 상' | '여자아이돌 상'
  color: string;
  gradient: string;
  emoji: string;
  description: string;
  keywords: string[];
  representativeIdols: string[];
  representativeImage: string; // '/representative/sm_male.jpg'
}

export const AGENCY_CLASSES: Record<string, AgencyClass> = {
  // ── SM ──────────────────────────────────────────────────────────────
  sm_male: {
    id: 'sm_male',
    agencyId: 'sm',
    agencyName: 'SM 엔터테인먼트',
    gender: 'male',
    genderLabel: '남자아이돌 상',
    color: '#1A1A2E',
    gradient: 'from-blue-900 to-indigo-900',
    emoji: '💎',
    description: '차갑고 조각 같은 이목구비, 완벽한 비율의 SM 남자아이돌 상! EXO·NCT·SHINee의 세련된 도시남 미남형 얼굴입니다.',
    keywords: ['조각미', '차가운 눈빛', '완벽한 비율', '도시적'],
    representativeIdols: ['EXO', 'NCT', 'SHINee'],
    representativeImage: '/representative/sm_male.jpg',
  },
  sm_female: {
    id: 'sm_female',
    agencyId: 'sm',
    agencyName: 'SM 엔터테인먼트',
    gender: 'female',
    genderLabel: '여자아이돌 상',
    color: '#1A1A2E',
    gradient: 'from-blue-800 to-purple-900',
    emoji: '💎',
    description: '도자기 피부에 서늘하고 우아한 분위기의 SM 여자아이돌 상! aespa·Red Velvet·소녀시대의 고혹적인 미모입니다.',
    keywords: ['도자기 피부', '우아함', '고혹적', '완벽한 이목구비'],
    representativeIdols: ['aespa', 'Red Velvet', '소녀시대'],
    representativeImage: '/representative/sm_female.jpg',
  },

  // ── YG ──────────────────────────────────────────────────────────────
  yg_male: {
    id: 'yg_male',
    agencyId: 'yg',
    agencyName: 'YG 엔터테인먼트',
    gender: 'male',
    genderLabel: '남자아이돌 상',
    color: '#1C1C1C',
    gradient: 'from-gray-900 to-yellow-900',
    emoji: '🔥',
    description: '강렬한 눈빛과 힙한 카리스마의 YG 남자아이돌 상! BIGBANG·WINNER·TREASURE의 스트릿 감성 얼굴입니다.',
    keywords: ['강렬한 눈빛', '힙한 감성', '카리스마', '스트릿'],
    representativeIdols: ['BIGBANG', 'WINNER', 'TREASURE'],
    representativeImage: '/representative/yg_male.jpg',
  },
  yg_female: {
    id: 'yg_female',
    agencyId: 'yg',
    agencyName: 'YG 엔터테인먼트',
    gender: 'female',
    genderLabel: '여자아이돌 상',
    color: '#1C1C1C',
    gradient: 'from-yellow-900 to-orange-900',
    emoji: '🔥',
    description: '독보적인 개성과 강렬한 눈빛의 YG 여자아이돌 상! BLACKPINK·Baby Monster의 파워풀한 매력입니다.',
    keywords: ['개성파', '강렬함', '걸크러시', '글로벌'],
    representativeIdols: ['BLACKPINK', 'Baby Monster'],
    representativeImage: '/representative/yg_female.jpg',
  },

  // ── HYBE ────────────────────────────────────────────────────────────
  hybe_male: {
    id: 'hybe_male',
    agencyId: 'hybe',
    agencyName: 'HYBE',
    gender: 'male',
    genderLabel: '남자아이돌 상',
    color: '#0D0D0D',
    gradient: 'from-purple-900 to-blue-900',
    emoji: '✨',
    description: '자연스러운 미소와 친근한 매력의 HYBE 남자아이돌 상! BTS·SEVENTEEN·TXT의 보이넥스트도어 감성입니다.',
    keywords: ['자연스러운 미소', '친근함', '보이넥스트도어', '다양한 스펙트럼'],
    representativeIdols: ['BTS', 'SEVENTEEN', 'TXT'],
    representativeImage: '/representative/hybe_male.jpg',
  },
  hybe_female: {
    id: 'hybe_female',
    agencyId: 'hybe',
    agencyName: 'HYBE',
    gender: 'female',
    genderLabel: '여자아이돌 상',
    color: '#0D0D0D',
    gradient: 'from-pink-900 to-purple-900',
    emoji: '✨',
    description: '청순하고 자연스러운 매력의 HYBE 여자아이돌 상! NewJeans·LE SSERAFIM·ILLIT의 사랑스러운 얼굴입니다.',
    keywords: ['청순', '자연스러움', '사랑스러움', '글로벌'],
    representativeIdols: ['NewJeans', 'LE SSERAFIM', 'ILLIT'],
    representativeImage: '/representative/hybe_female.jpg',
  },

  // ── JYP ─────────────────────────────────────────────────────────────
  jyp_male: {
    id: 'jyp_male',
    agencyId: 'jyp',
    agencyName: 'JYP 엔터테인먼트',
    gender: 'male',
    genderLabel: '남자아이돌 상',
    color: '#0A2647',
    gradient: 'from-orange-900 to-red-900',
    emoji: '🌟',
    description: '에너지 넘치고 발랄한 JYP 남자아이돌 상! Stray Kids·2PM·DAY6의 건강하고 친근한 매력입니다.',
    keywords: ['에너제틱', '친근함', '건강미', '눈웃음'],
    representativeIdols: ['Stray Kids', '2PM', 'DAY6'],
    representativeImage: '/representative/jyp_male.jpg',
  },
  jyp_female: {
    id: 'jyp_female',
    agencyId: 'jyp',
    agencyName: 'JYP 엔터테인먼트',
    gender: 'female',
    genderLabel: '여자아이돌 상',
    color: '#0A2647',
    gradient: 'from-red-800 to-orange-800',
    emoji: '🌟',
    description: '발랄하고 눈웃음이 예쁜 JYP 여자아이돌 상! TWICE·ITZY·NMIXX의 건강하고 사랑스러운 매력입니다.',
    keywords: ['눈웃음', '발랄함', '건강미', '사랑스러움'],
    representativeIdols: ['TWICE', 'ITZY', 'NMIXX'],
    representativeImage: '/representative/jyp_female.jpg',
  },

  // ── Starship ────────────────────────────────────────────────────────
  starship_male: {
    id: 'starship_male',
    agencyId: 'starship',
    agencyName: 'Starship 엔터테인먼트',
    gender: 'male',
    genderLabel: '남자아이돌 상',
    color: '#1a1a40',
    gradient: 'from-indigo-900 to-blue-900',
    emoji: '⭐',
    description: '고급스럽고 세련된 Starship 남자아이돌 상! Monsta X·Cravity의 강인하고 매력적인 얼굴입니다.',
    keywords: ['세련됨', '강인함', '고급스러움'],
    representativeIdols: ['Monsta X', 'Cravity'],
    representativeImage: '/representative/starship_male.jpg',
  },
  starship_female: {
    id: 'starship_female',
    agencyId: 'starship',
    agencyName: 'Starship 엔터테인먼트',
    gender: 'female',
    genderLabel: '여자아이돌 상',
    color: '#1a1a40',
    gradient: 'from-blue-700 to-cyan-800',
    emoji: '⭐',
    description: '러블리하면서도 고급스러운 Starship 여자아이돌 상! IVE의 완벽한 비율과 세련된 분위기입니다.',
    keywords: ['러블리', '고급스러움', '완벽한 비율'],
    representativeIdols: ['IVE'],
    representativeImage: '/representative/starship_female.jpg',
  },

  // ── Cube ────────────────────────────────────────────────────────────
  cube_male: {
    id: 'cube_male',
    agencyId: 'cube',
    agencyName: 'Cube 엔터테인먼트',
    gender: 'male',
    genderLabel: '남자아이돌 상',
    color: '#1a2a1a',
    gradient: 'from-green-900 to-teal-900',
    emoji: '🎲',
    description: '개성 넘치는 아티스트형 Cube 남자아이돌 상! BTOB·Pentagon의 독특한 매력과 실력파 얼굴입니다.',
    keywords: ['아티스트형', '개성', '실력파'],
    representativeIdols: ['BTOB', 'Pentagon'],
    representativeImage: '/representative/cube_male.jpg',
  },
  cube_female: {
    id: 'cube_female',
    agencyId: 'cube',
    agencyName: 'Cube 엔터테인먼트',
    gender: 'female',
    genderLabel: '여자아이돌 상',
    color: '#1a2a1a',
    gradient: 'from-teal-800 to-green-900',
    emoji: '🎲',
    description: '개성 강하고 파워풀한 Cube 여자아이돌 상! (G)I-DLE·HyunA의 독보적인 카리스마입니다.',
    keywords: ['개성파', '카리스마', '아티스트'],
    representativeIdols: ['(G)I-DLE', 'HyunA'],
    representativeImage: '/representative/cube_female.jpg',
  },

  // ── RBW ─────────────────────────────────────────────────────────────
  rbw_male: {
    id: 'rbw_male',
    agencyId: 'rbw',
    agencyName: 'RBW 엔터테인먼트',
    gender: 'male',
    genderLabel: '남자아이돌 상',
    color: '#2a1a1a',
    gradient: 'from-red-900 to-rose-900',
    emoji: '🎵',
    description: '퍼포먼스와 실력이 강조되는 RBW 남자아이돌 상! ONEUS의 에너제틱하고 강렬한 얼굴입니다.',
    keywords: ['실력파', '에너제틱', '퍼포먼스'],
    representativeIdols: ['ONEUS'],
    representativeImage: '/representative/rbw_male.jpg',
  },
  rbw_female: {
    id: 'rbw_female',
    agencyId: 'rbw',
    agencyName: 'RBW 엔터테인먼트',
    gender: 'female',
    genderLabel: '여자아이돌 상',
    color: '#2a1a1a',
    gradient: 'from-rose-800 to-pink-900',
    emoji: '🎵',
    description: '독보적인 개성과 실력의 RBW 여자아이돌 상! MAMAMOO·Purple Kiss의 매력적이고 당당한 얼굴입니다.',
    keywords: ['독보적', '당당함', '실력파'],
    representativeIdols: ['MAMAMOO', 'Purple Kiss'],
    representativeImage: '/representative/rbw_female.jpg',
  },

  // ── WM ──────────────────────────────────────────────────────────────
  wm_male: {
    id: 'wm_male',
    agencyId: 'wm',
    agencyName: 'WM 엔터테인먼트',
    gender: 'male',
    genderLabel: '남자아이돌 상',
    color: '#1a1a2a',
    gradient: 'from-violet-900 to-indigo-900',
    emoji: '🌙',
    description: '청순하고 소년미 넘치는 WM 남자아이돌 상! ONF의 달달하고 친근한 매력입니다.',
    keywords: ['소년미', '달달함', '친근함'],
    representativeIdols: ['ONF'],
    representativeImage: '/representative/wm_male.jpg',
  },
  wm_female: {
    id: 'wm_female',
    agencyId: 'wm',
    agencyName: 'WM 엔터테인먼트',
    gender: 'female',
    genderLabel: '여자아이돌 상',
    color: '#1a1a2a',
    gradient: 'from-purple-700 to-violet-900',
    emoji: '🌙',
    description: '청순하고 동화 같은 WM 여자아이돌 상! Oh My Girl의 환상적이고 사랑스러운 얼굴입니다.',
    keywords: ['청순 판타지', '동화적', '사랑스러움'],
    representativeIdols: ['Oh My Girl'],
    representativeImage: '/representative/wm_female.jpg',
  },

  // ── Pledis ──────────────────────────────────────────────────────────
  pledis_male: {
    id: 'pledis_male',
    agencyId: 'pledis',
    agencyName: 'Pledis 엔터테인먼트',
    gender: 'male',
    genderLabel: '남자아이돌 상',
    color: '#1a2535',
    gradient: 'from-sky-900 to-blue-900',
    emoji: '🎯',
    description: '세련되고 균형 잡힌 Pledis 남자아이돌 상! NU\'EST의 완벽한 이목구비와 성숙한 매력입니다.',
    keywords: ['세련됨', '성숙함', '균형'],
    representativeIdols: ["NU'EST"],
    representativeImage: '/representative/pledis_male.jpg',
  },
  pledis_female: {
    id: 'pledis_female',
    agencyId: 'pledis',
    agencyName: 'Pledis 엔터테인먼트',
    gender: 'female',
    genderLabel: '여자아이돌 상',
    color: '#1a2535',
    gradient: 'from-blue-700 to-sky-800',
    emoji: '🎯',
    description: '밝고 사랑스러운 Pledis 여자아이돌 상! fromis_9의 친근하고 발랄한 매력입니다.',
    keywords: ['밝음', '사랑스러움', '발랄함'],
    representativeIdols: ['fromis_9'],
    representativeImage: '/representative/pledis_female.jpg',
  },
};

// Teachable Machine 모델의 실제 레이블 → AGENCY_CLASSES 키 매핑
export const TM_LABEL_MAP: Record<string, string> = {
  'SM (여자 아이돌)':   'sm_female',
  'SM (남자 아이돌)':   'sm_male',
  'YG (여자 아이돌)':   'yg_female',
  'YG (남자 아이돌)':   'yg_male',
  'HYBE (여자 아이돌)': 'hybe_female',
  'HYBE (남자 아이돌)': 'hybe_male',
  'JYP (여자 아이돌)':  'jyp_female',
  'JYP (남자 아이돌)':  'jyp_male',
};

// 정규 키(sm_female 등) 또는 모델 레이블("SM (여자 아이돌)" 등) 모두 허용
export const getAgencyClass = (id: string): AgencyClass | undefined =>
  AGENCY_CLASSES[id] ?? AGENCY_CLASSES[TM_LABEL_MAP[id]];

// 하위 호환: 기존 코드에서 agency.id('sm')로 조회할 경우 사용
export interface Agency {
  id: string;
  name: string;
  nameKo: string;
  color: string;
  gradient: string;
  description: string;
  keywords: string[];
  representativeIdols: string[];
  emoji: string;
}

export const AGENCIES: Agency[] = [
  { id: 'sm',       name: 'SM Entertainment',  nameKo: 'SM 엔터테인먼트',    color: '#1A1A2E', gradient: 'from-blue-900 to-indigo-900',  description: '완벽한 조각미, 차갑고 세련된 이목구비', keywords: ['조각미', '도자기 피부', '차가운 눈빛'],   representativeIdols: ['EXO', 'aespa', 'NCT'],        emoji: '💎' },
  { id: 'yg',       name: 'YG Entertainment',  nameKo: 'YG 엔터테인먼트',    color: '#1C1C1C', gradient: 'from-gray-900 to-yellow-900',  description: '힙하고 강렬한 카리스마',               keywords: ['강렬한 눈빛', '힙한 감성', '카리스마'],   representativeIdols: ['BLACKPINK', 'BIGBANG'],        emoji: '🔥' },
  { id: 'hybe',     name: 'HYBE',              nameKo: '하이브',             color: '#0D0D0D', gradient: 'from-purple-900 to-pink-900',  description: '자연스럽고 친근한 매력',               keywords: ['자연스러운 미소', '청순', '친근함'],      representativeIdols: ['BTS', 'NewJeans', 'SEVENTEEN'], emoji: '✨' },
  { id: 'jyp',      name: 'JYP Entertainment', nameKo: 'JYP 엔터테인먼트',   color: '#0A2647', gradient: 'from-orange-900 to-red-900',   description: '발랄하고 건강한 매력',                 keywords: ['눈웃음', '발랄함', '건강미'],            representativeIdols: ['TWICE', 'Stray Kids', 'ITZY'], emoji: '🌟' },
  { id: 'starship', name: 'Starship',          nameKo: 'Starship 엔터테인먼트', color: '#1a1a40', gradient: 'from-indigo-900 to-blue-900', description: '고급스럽고 러블리한 매력',              keywords: ['러블리', '고급스러움'],                  representativeIdols: ['IVE', 'Monsta X'],             emoji: '⭐' },
  { id: 'cube',     name: 'Cube Entertainment', nameKo: 'Cube 엔터테인먼트',  color: '#1a2a1a', gradient: 'from-green-900 to-teal-900',   description: '개성 넘치는 아티스트형',               keywords: ['아티스트형', '개성'],                    representativeIdols: ['(G)I-DLE', 'BTOB'],            emoji: '🎲' },
  { id: 'rbw',      name: 'RBW Entertainment', nameKo: 'RBW 엔터테인먼트',   color: '#2a1a1a', gradient: 'from-red-900 to-rose-900',     description: '독보적 개성과 실력파',                 keywords: ['독보적', '실력파'],                      representativeIdols: ['MAMAMOO', 'ONEUS'],            emoji: '🎵' },
  { id: 'wm',       name: 'WM Entertainment',  nameKo: 'WM 엔터테인먼트',    color: '#1a1a2a', gradient: 'from-violet-900 to-indigo-900', description: '청순 판타지, 동화적 이미지',            keywords: ['청순 판타지', '동화적'],                 representativeIdols: ['Oh My Girl', 'ONF'],           emoji: '🌙' },
  { id: 'pledis',   name: 'Pledis Entertainment', nameKo: 'Pledis 엔터테인먼트', color: '#1a2535', gradient: 'from-sky-900 to-blue-900', description: '세련되고 균형 잡힌 매력',              keywords: ['세련됨', '균형'],                        representativeIdols: ["fromis_9", "NU'EST"],          emoji: '🎯' },
];

export const getAgencyById = (id: string): Agency | undefined => AGENCIES.find((a) => a.id === id);
