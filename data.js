/**
 * MBTI 8기능 및 에니어그램 데이터셋
 */

export const MBTI_DATA = {
  "ISTJ": { functions: ["Si", "Te", "Fi", "Ne", "Se", "Ti", "Fe", "Ni"], strengths: "세부사항 정리, 신뢰성 있는 결과물", weaknesses: "변화 적응의 어려움", tips: "체계적인 가이드라인을 제공하세요." },
  "ISFJ": { functions: ["Si", "Fe", "Ti", "Ne", "Se", "Fi", "Te", "Ni"], strengths: "꼼꼼한 협조, 헌신적 지원", weaknesses: "갈등 상황 기피", tips: "감사함을 적극적으로 표현하세요." },
  "INFJ": { functions: ["Ni", "Fe", "Ti", "Se", "Ne", "Fi", "Te", "Si"], strengths: "통찰력 있는 비전, 인간 중심 가치", weaknesses: "지나친 완벽주의", tips: "장기적인 목표를 공유하세요." },
  "INTJ": { functions: ["Ni", "Te", "Fi", "Se", "Ne", "Fe", "Ti", "Si"], strengths: "논리적 전략 설계, 독립적 성과", weaknesses: "융통성 부족", tips: "논리적인 근거를 명확히 제시하세요." },
  "ISTP": { functions: ["Ti", "Se", "Ni", "Fe", "Te", "Si", "Ne", "Fi"], strengths: "효율적 문제 해결, 도구 활용 능숙", weaknesses: "감정 표현 서툼", tips: "자율적인 작업 환경을 보장하세요." },
  "ISFP": { functions: ["Fi", "Se", "Ni", "Te", "Fe", "Si", "Ne", "Ti"], strengths: "온화한 태도, 감각적 완성도", weaknesses: "추진력 부족", tips: "개인의 가치관을 존중해 주세요." },
  "INFP": { functions: ["Fi", "Ne", "Si", "Te", "Fe", "Ni", "Se", "Ti"], strengths: "창의적 아이디어, 진정성 있는 관계", weaknesses: "현실 감각 약화", tips: "비전의 의미를 함께 찾아주세요." },
  "INTP": { functions: ["Ti", "Ne", "Si", "Fe", "Te", "Ni", "Se", "Fi"], strengths: "직관적 분석, 혁신적 아이디어", weaknesses: "결정에 시간 소요", tips: "자유로운 토론 분위기를 만드세요." },
  "ESTP": { functions: ["Se", "Ti", "Fe", "Ni", "Si", "Te", "Fi", "Ne"], strengths: "순발력 있는 해결, 행동 중심", weaknesses: "충동적 결정", tips: "즉각적인 피드백을 주세요." },
  "ESFP": { functions: ["Se", "Fi", "Te", "Ni", "Si", "Fe", "Ti", "Ne"], strengths: "활기찬 에너지, 뛰어난 사교력", weaknesses: "집중력 분산", tips: "재미있고 활기찬 분위기를 조성하세요." },
  "ENFP": { functions: ["Ne", "Fi", "Te", "Si", "Ni", "Fe", "Ti", "Se"], strengths: "멀티태스킹 능숙, 긍정적 에너지", weaknesses: "디테일 간과", tips: "새로운 도전을 독려하세요." },
  "ENTP": { functions: ["Ne", "Ti", "Fe", "Si", "Ni", "Te", "Fi", "Se"], strengths: "혁신적 발상, 뛰어난 설득력", weaknesses: "실행력 부족", tips: "토론의 목적을 명확히 하세요." },
  "ESTJ": { functions: ["Te", "Si", "Ne", "Fi", "Ti", "Se", "Ni", "Fe"], strengths: "조직 관리 능숙, 실행력", weaknesses: "독단적 경향", tips: "명확한 역할과 책임을 부여하세요." },
  "ESFJ": { functions: ["Fe", "Si", "Ne", "Ti", "Fi", "Se", "Ni", "Te"], strengths: "조화로운 팀워크, 실무 지원", weaknesses: "비판에 민감", tips: "칭찬과 인정을 아끼지 마세요." },
  "ENFJ": { functions: ["Fe", "Ni", "Se", "Ti", "Fi", "Ne", "Si", "Te"], strengths: "탁월한 리더십, 타인 성장 독려", weaknesses: "타인에 과잉 의존", tips: "진심 어린 감사와 격려를 하세요." },
  "ENTJ": { functions: ["Te", "Ni", "Se", "Fi", "Ti", "Ne", "Si", "Fe"], strengths: "강력한 카리스마, 조직 리딩", weaknesses: "공감 능력 부족", tips: "빠른 결과와 핵심 위주로 소통하세요." }
};

export const ENNEAGRAM_DATA = {
  "1": { name: "개혁가", motivation: "옳음과 완벽함 추구", fear: "결함과 부패", stress: "4", growth: "7", behavior: "비판적이고 경직된 태도" },
  "2": { name: "조력가", motivation: "사랑받고 인정받음", fear: "거절당하고 필요 없어짐", stress: "8", growth: "4", behavior: "강압적이고 불평하는 태도" },
  "3": { name: "성취자", motivation: "성공과 유능함", fear: "무가치함", stress: "9", growth: "6", behavior: "무기력해지고 회피하는 태도" },
  "4": { name: "예술가", motivation: "자신만의 정체성 발견", fear: "평범함과 정체성 상실", stress: "2", growth: "1", behavior: "지나치게 감정적이고 타인에 의존" },
  "5": { name: "탐구자", motivation: "지식과 유능함", fear: "무력함과 무능함", stress: "7", growth: "8", behavior: "산만해지고 충동적인 행동" },
  "6": { name: "충실가", motivation: "안전과 지원", fear: "지원 상실 및 불안", stress: "3", growth: "9", behavior: "과도하게 경쟁적이고 공격적" },
  "7": { name: "열정가", motivation: "즐거움과 만족", fear: "박탈과 고통", stress: "1", growth: "5", behavior: "비판적이고 완벽에 집착" },
  "8": { name: "도전자", motivation: "자기 결정과 통제", fear: "통제당함과 약함", stress: "5", growth: "2", behavior: "냉담해지고 자신을 고립시킴" },
  "9": { name: "평화주의자", motivation: "평화와 안정", fear: "단절과 상실", stress: "6", growth: "3", behavior: "불안해하고 의심이 많아짐" }
};

export const MBTI_QUESTIONS = [
  // E vs I
  { id: 1, text: "처음 본 사람과 대화하는 것이 어렵지 않다.", dim: "EI", type: "E", simple: true },
  { id: 2, text: "혼자 있을 때 에너지가 충전되는 편이다.", dim: "EI", type: "I", simple: true },
  { id: 3, text: "생각을 말로 표현하는 것보다 글로 쓰는 게 편하다.", dim: "EI", type: "I", simple: false },
  { id: 4, text: "모임의 중심에 서는 것을 즐긴다.", dim: "EI", type: "E", simple: false },
  { id: 5, text: "주말에는 밖으로 나가 사람들을 만나는 게 좋다.", dim: "EI", type: "E", simple: true },
  // S vs N
  { id: 6, text: "현실적이고 구체적인 사실에 더 집중한다.", dim: "SN", type: "S", simple: true },
  { id: 7, text: "상상력이 풍부하며 미래의 가능성을 즐긴다.", dim: "SN", type: "N", simple: true },
  { id: 8, text: "설명서나 매뉴얼을 꼼꼼히 읽는 편이다.", dim: "SN", type: "S", simple: false },
  { id: 9, text: "비유나 상징적인 표현을 자주 사용한다.", dim: "SN", type: "N", simple: false },
  { id: 10, text: "눈에 보이는 결과물이 있어야 안심이 된다.", dim: "SN", type: "S", simple: true },
  // T vs F
  { id: 11, text: "감정보다는 논리에 따라 결정을 내린다.", dim: "TF", type: "T", simple: true },
  { id: 12, text: "타인의 감정에 잘 공감하고 배려를 우선한다.", dim: "TF", type: "F", simple: true },
  { id: 13, text: "비판을 받으면 감정적으로 상처를 쉽게 받는다.", dim: "TF", type: "F", simple: false },
  { id: 14, text: "일 처리는 원칙에 충실해야 한다고 생각한다.", dim: "TF", type: "T", simple: false },
  { id: 15, text: "주변 사람들과의 조화가 업무 성과보다 중요하다.", dim: "TF", type: "F", simple: true },
  // J vs P
  { id: 16, text: "계획이 틀어지면 스트레스를 많이 받는다.", dim: "JP", type: "J", simple: true },
  { id: 17, text: "주변 환경이 항상 정리되어 있어야 마음이 놓인다.", dim: "JP", type: "J", simple: true },
  { id: 18, text: "새로운 정보에 따라 계획을 쉽게 바꾼다.", dim: "JP", type: "P", simple: false },
  { id: 19, text: "마감 직전에 집중력이 폭발적으로 증가한다.", dim: "JP", type: "P", simple: false },
  { id: 20, text: "변수에 대비하여 미리 준비하는 것을 선호한다.", dim: "JP", type: "J", simple: true }
];

export const ENNEAGRAM_QUESTIONS = [
  { id: 1, text: "나는 완벽을 기하며 잘못된 것을 바로잡고 싶다.", type: "1", simple: true },
  { id: 2, text: "원칙과 도덕성을 지키는 일이 무엇보다 중요하다.", type: "1", simple: false },
  { id: 3, text: "다른 사람을 도와주고 인정받을 때 가장 기쁘다.", type: "2", simple: true },
  { id: 4, text: "타인이 나를 필요로 하지 않을까 봐 걱정될 때가 있다.", type: "2", simple: false },
  { id: 5, text: "목표를 달성하고 성공하는 과정이 즐겁다.", type: "3", simple: true },
  { id: 6, text: "자신의 가치를 실적으로 증명해야 대우받는다고 믿는다.", type: "3", simple: false },
  { id: 7, text: "나만의 독특한 정체성을 찾고 풍부한 감정을 느끼고 싶다.", type: "4", simple: true },
  { id: 8, text: "평범하기보다 특별한 존재가 되고 싶은 욕구가 강하다.", type: "4", simple: false },
  { id: 9, text: "지식을 습득하고 세상을 관찰하는 것을 좋아한다.", type: "5", simple: true },
  { id: 10, text: "혼자만의 공간에서 깊이 생각할 때 가장 안전하다고 느낀다.", type: "5", simple: false },
  { id: 11, text: "신뢰할 수 있는 공동체 안에서 안정을 찾고 싶다.", type: "6", simple: true },
  { id: 12, text: "최악의 상황을 가정하고 미리 대비하는 편이다.", type: "6", simple: false },
  { id: 13, text: "인생은 즐거워야 하며 고통보다 재미있는 일을 찾는다.", type: "7", simple: true },
  { id: 14, text: "새로운 아이디어와 계획들로 늘 머릿속이 분주하다.", type: "7", simple: false },
  { id: 15, text: "내 삶을 스스로 통제하며 부당한 대우에 대항하고 싶다.", type: "8", simple: true },
  { id: 16, text: "자신의 약함을 드러내기보다 강한 모습을 보이려 노력한다.", type: "8", simple: false },
  { id: 17, text: "갈등을 피하고 내면의 평화를 유지하는 게 가장 중요하다.", type: "9", simple: true },
  { id: 18, text: "우유부단하다는 말을 듣더라도 모두의 의견을 존중하려 한다.", type: "9", simple: false }
];

export const FUNCTION_NAMES = {
  "Si": "내향 감각", "Se": "외향 감각", "Ni": "내향 직관", "Ne": "외향 직관",
  "Ti": "내향 사고", "Te": "외향 사고", "Fi": "내향 감정", "Fe": "외향 감정"
};
