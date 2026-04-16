/**
 * MBTI 8기능 및 에니어그램 데이터셋
 */

export const MBTI_DATA = {
  "ISTJ": { 
    functions: ["Si", "Te", "Fi", "Ne", "Se", "Ti", "Fe", "Ni"], 
    strengths: "세부사항 정리, 신뢰성 있는 결과물", 
    weaknesses: "변화 적응의 어려움", 
    tips: "체계적인 가이드라인을 제공하세요.",
    synergyGuide: {
      style: "철저한 데이터 기반의 완벽주의자",
      approach: "명확한 마감 기한과 객관적인 증거를 가지고 접근하세요.",
      do: ["정량적 수치 활용", "정해진 프로세스 존중"],
      dont: ["갑작스러운 일정 변경", "불투명한 책임 소재"],
      phrases: ["지난번 데이터와 비교했을 때...", "이 계획의 구체적인 단계는..."]
    }
  },
  "ISFJ": { 
    functions: ["Si", "Fe", "Ti", "Ne", "Se", "Fi", "Te", "Ni"], 
    strengths: "꼼꼼한 협조, 헌신적 지원", 
    weaknesses: "갈등 상황 기피", 
    tips: "감사함을 적극적으로 표현하세요.",
    synergyGuide: {
      style: "팀의 안정을 최우선하는 헌신적 지원가",
      approach: "부드러운 화법으로 협조를 구하고 진행 과정을 꾸준히 공유하세요.",
      do: ["인격적인 예우", "신뢰를 바탕으로 한 장기적 관계"],
      dont: ["과격한 경쟁 유도", "개인적인 가치관 비하"],
      phrases: ["지난번 도와주신 덕분에 큰 힘이 됐어요.", "혹시 이런 방식으로 협업하면 어떨까요?"]
    }
  },
  "INFJ": { 
    functions: ["Ni", "Fe", "Ti", "Se", "Ne", "Fi", "Te", "Si"], 
    strengths: "통찰력 있는 비전, 인간 중심 가치", 
    weaknesses: "지나친 완벽주의", 
    tips: "장기적인 목표를 공유하세요.",
    synergyGuide: {
      style: "본질을 꿰뚫어 보는 통찰가",
      approach: "업무의 핵심 가치와 미래의 방향성에 대해 깊이 있는 대화를 나누세요.",
      do: ["비전과 의미 부여", "조용한 집중 환경 보장"],
      dont: ["단순 반복 업무 강요", "얄팍한 계산적 태도"],
      phrases: ["이 프로젝트가 갖는 진정한 의미는...", "추후 어떤 영향을 미치게 될까요?"]
    }
  },
  "INTJ": { 
    functions: ["Ni", "Te", "Fi", "Se", "Ne", "Fe", "Ti", "Si"], 
    strengths: "논리적 전략 설계, 독립적 성과", 
    weaknesses: "융통성 부족", 
    tips: "논리적인 근거를 명확히 제시하세요.",
    synergyGuide: {
      style: "독립적이고 효율적인 전략가",
      approach: "최종 목표를 명시하고 방법론은 그들에게 일임하세요. 감정보다 논리로 소통해야 합니다.",
      do: ["지적 자율성 부여", "결과 중심적 소통"],
      dont: ["불필요한 참견", "논리 없는 감정적 호소"],
      phrases: ["결론부터 말씀드리면...", "가장 효율적인 루트는 이것입니다."]
    }
  },
  "ISTP": { 
    functions: ["Ti", "Se", "Ni", "Fe", "Te", "Si", "Ne", "Fi"], 
    strengths: "효율적 문제 해결, 도구 활용 능숙", 
    weaknesses: "감정 표현 서툼", 
    tips: "자율적인 작업 환경을 보장하세요.",
    synergyGuide: {
      style: "침착하게 문제를 해결하는 기술자",
      approach: "복잡한 설명보다는 즉각적인 요구 사항을 전달하고 자율성을 주세요.",
      do: ["핵심 사항만 전달", "효율적 도구 활용 제안"],
      dont: ["과도한 친목 도모 강권", "감정적인 피드백"],
      phrases: ["이 부분을 가장 빠르게 고치려면...", "구체적으로 어떤 지원이 필요하세요?"]
    }
  },
  "ISFP": { 
    functions: ["Fi", "Se", "Ni", "Te", "Fe", "Si", "Ne", "Ti"], 
    strengths: "온화한 태도, 감각적 완성도", 
    weaknesses: "추진력 부족", 
    tips: "개인의 가치관을 존중해 주세요.",
    synergyGuide: {
      style: "현재에 충실한 감각적인 예술가",
      approach: "강압적이지 않은 부드러운 분위기에서 협업하고 개인의 선택권을 존중하세요.",
      do: ["미적/감각적 가치 인정", "유연한 스케줄 제공"],
      dont: ["지나치게 엄격한 규율", "일방적인 통보"],
      phrases: ["느낌이 정말 좋네요.", "대표님만의 스타일로 완성해 주시겠어요?"]
    }
  },
  "INFP": { 
    functions: ["Fi", "Ne", "Si", "Te", "Fe", "Ni", "Se", "Ti"], 
    strengths: "창의적 아이디어, 진정성 있는 관계", 
    weaknesses: "현실 감각 약화", 
    tips: "비전의 의미를 함께 찾아주세요.",
    synergyGuide: {
      style: "이상과 가치를 추구하는 몽상가",
      approach: "업무의 가치를 설명하고 그들의 창의성을 자극하는 개방형 질문을 하세요.",
      do: ["심리적 안전감 제공", "아이디어 경청"],
      dont: ["비판적인 냉소", "현실성만 따지는 태도"],
      phrases: ["이 일이 세상에 어떤 도움이 될까요?", "대표님의 새로운 시각을 반영하고 싶어요."]
    }
  },
  "INTP": { 
    functions: ["Ti", "Ne", "Si", "Fe", "Te", "Ni", "Se", "Fi"], 
    strengths: "직관적 분석, 혁신적 아이디어", 
    weaknesses: "결정에 시간 소요", 
    tips: "자유로운 토론 분위기를 만드세요.",
    synergyGuide: {
      style: "지적 호기심이 강한 분석가",
      approach: "토론의 문을 열어두고 논리적인 호기심을 자극하는 과제를 주세요.",
      do: ["지적 도전 과제 부여", "충분한 사고 시간 보장"],
      dont: ["답이 정해진 업무 강권", "형식적인 절차"],
      phrases: ["이 원리가 어떻게 작동한다고 보세요?", "다각도로 검토해 주실 수 있나요?"]
    }
  },
  "ESTP": { 
    functions: ["Se", "Ti", "Fe", "Ni", "Si", "Te", "Fi", "Ne"], 
    strengths: "순발력 있는 해결, 행동 중심", 
    weaknesses: "충동적 결정", 
    tips: "즉각적인 피드백을 주세요.",
    synergyGuide: {
      style: "실습과 경험을 즐기는 행동파",
      approach: "이론적인 설명보다는 실질적인 혜택과 결과를 먼저 이야기하세요.",
      do: ["속도감 있는 진행", "활동적인 협업"],
      dont: ["장황한 이론 설명", "서면 위주의 보고"],
      phrases: ["지금 바로 시작해 보죠.", "이게 우리에게 어떤 이익을 줄까요?"]
    }
  },
  "ESFP": { 
    functions: ["Se", "Fi", "Te", "Ni", "Si", "Fe", "Ti", "Ne"], 
    strengths: "활기찬 에너지, 뛰어난 사교력", 
    weaknesses: "집중력 분산", 
    tips: "재미있고 활기찬 분위기를 조성하세요.",
    synergyGuide: {
      style: "분위기를 밝게 만드는 에너지 뱅크",
      approach: "지루하지 않게 칭찬과 즐거움을 섞어 소통하고 함께하는 느낌을 주세요.",
      do: ["분위기 환기", "공개적인 칭찬"],
      dont: ["지나치게 고립된 업무", "엄숙하고 무거운 회의"],
      phrases: ["정말 재밌을 것 같아요!", "이걸 하면 모두가 좋아하겠네요."]
    }
  },
  "ENFP": { 
    functions: ["Ne", "Fi", "Te", "Si", "Ni", "Fe", "Ti", "Se"], 
    strengths: "멀티태스킹 능숙, 긍정적 에너지", 
    weaknesses: "디테일 간과", 
    tips: "새로운 도전을 독려하세요.",
    synergyGuide: {
      style: "열정이 넘치는 아이디어 머신",
      approach: "아이디어의 가능성을 먼저 칭찬하고 디테일은 나중에 검토하세요.",
      do: ["상상력 자극", "긍정적인 지지"],
      dont: ["초기에 아이디어 꺾기", "세세한 마이크로 매니징"],
      phrases: ["와, 정말 기발한데요?", "어떻게 이런 생각을 하셨어요?"]
    }
  },
  "ENTP": { 
    functions: ["Ne", "Ti", "Fe", "Si", "Ni", "Te", "Fi", "Se"], 
    strengths: "혁신적 발상, 뛰어난 설득력", 
    weaknesses: "실행력 부족", 
    tips: "토론의 목적을 명확히 하세요.",
    synergyGuide: {
      style: "지적 유희를 즐기는 논쟁가",
      approach: "논리적인 반박도 하나의 재미로 즐기므로 유연하게 대처하고 실행력을 보강해 주세요.",
      do: ["흥미진진한 토론", "다양한 가능성 제시"],
      dont: ["권위적인 태도", "전례만 따지는 보수성"],
      phrases: ["이런 반대 의견은 어떨까요?", "새로운 관점에서 접근해 봅시다."]
    }
  },
  "ESTJ": { 
    functions: ["Te", "Si", "Ne", "Fi", "Ti", "Se", "Ni", "Fe"], 
    strengths: "조직 관리 능숙, 실행력", 
    weaknesses: "독단적 경향", 
    tips: "명확한 역할과 책임을 부여하세요.",
    synergyGuide: {
      style: "현실적이고 목표 지향적인 관리자",
      approach: "체계적인 계획과 결과 보고를 중시하고 위계질서를 존중하세요.",
      do: ["철저한 준비성", "결과물에 대한 책임감"],
      dont: ["불분명한 보고 체계", "감정에 치우친 변명"],
      phrases: ["현재 진척도는 %입니다.", "정해진 규칙에 따르면..."]
    }
  },
  "ESFJ": { 
    functions: ["Fe", "Si", "Ne", "Ti", "Fi", "Se", "Ni", "Te"], 
    strengths: "조화로운 팀워크, 실무 지원", 
    weaknesses: "비판에 민감", 
    tips: "칭찬과 인정을 아끼지 마세요.",
    synergyGuide: {
      style: "협력과 조화를 중시하는 마당발",
      approach: "개인적인 친분을 먼저 쌓고 조화로운 업무 방식을 제안하세요.",
      do: ["화목한 팀 분위기 유지", "사회적 매너 준수"],
      dont: ["비사회적/냉담한 태도", "비인격적인 피드백"],
      phrases: ["함께해서 정말 든든해요.", "서로 조금씩 배려해서 진행해 볼까요?"]
    }
  },
  "ENFJ": { 
    functions: ["Fe", "Ni", "Se", "Ti", "Fi", "Ne", "Si", "Te"], 
    strengths: "탁월한 리더십, 타인 성장 독려", 
    weaknesses: "타인에 과잉 의존", 
    tips: "진심 어린 감사와 격려를 하세요.",
    synergyGuide: {
      style: "사람의 마음을 움직이는 조력자",
      approach: "개인의 성장을 고려한 설득 방식을 취하고 그들의 리더십을 지지하세요.",
      do: ["열정에 대한 리액션", "타인에 대한 배려 관찰"],
      dont: ["이기적인 무관심", "냉소적인 분석"],
      phrases: ["대표님이 계셔서 팀이 끈끈해졌어요.", "사람들을 위해 이런 가치를 실현합시다."]
    }
  },
  "ENTJ": { 
    functions: ["Te", "Ni", "Se", "Fi", "Ti", "Ne", "Si", "Fe"], 
    strengths: "강력한 카리스마, 조직 리딩", 
    weaknesses: "공감 능력 부족", 
    tips: "빠른 결과와 핵심 위주로 소통하세요.",
    synergyGuide: {
      style: "과단성 있는 비즈니스 리더",
      approach: "결론을 먼저 말하고 전략적 이익을 강조하세요. 능력에 대한 확신을 보여줘야 합니다.",
      do: ["자신감 있는 태도", "전략적 유능함"],
      dont: ["비효율적인 우유부단함", "피상적인 아부"],
      phrases: ["핵심 요약은 이렇습니다.", "이 결정이 장기적으로 유리합니다."]
    }
  }
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
