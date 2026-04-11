import { MBTI_DATA, ENNEAGRAM_DATA, FUNCTION_NAMES, MBTI_QUESTIONS, ENNEAGRAM_QUESTIONS } from './data.js';

let radarChart = null;

// 테스트 상태 관리 객체
const testState = {
  currentQuestions: [],
  currentIndex: 0,
  answers: {
    EI: 0, SN: 0, TF: 0, JP: 0,
    enneagram: {} // { "1": score, "2": score ... }
  },
  mode: 'simple' // 'simple' or 'precise'
};

document.addEventListener('DOMContentLoaded', () => {
  initInputListeners();
  initTestListeners();
  updateAnalysis();
});

function initInputListeners() {
  const inputs = ['mbti-select', 'enneagram-select', 'stress-slider'];
  inputs.forEach(id => {
    document.getElementById(id).addEventListener('change', updateAnalysis);
    if (id === 'stress-slider') {
      document.getElementById(id).addEventListener('input', (e) => {
        document.getElementById('stress-value').textContent = e.target.value;
      });
    }
  });

  const colleagueInputs = ['colleague-mbti'];
  colleagueInputs.forEach(id => {
    document.getElementById(id).addEventListener('change', updateColleagueTips);
  });
}

function initTestListeners() {
  document.getElementById('start-simple-test').addEventListener('click', () => startTest('simple'));
  document.getElementById('start-precise-test').addEventListener('click', () => startTest('precise'));
  document.getElementById('cancel-test').addEventListener('click', closeTest);
  
  const optionBtns = document.querySelectorAll('.option-btn');
  optionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const score = parseInt(e.target.dataset.score);
      handleAnswer(score);
    });
  });
}

// 테스트 시작
function startTest(mode) {
  testState.mode = mode;
  testState.currentIndex = 0;
  testState.answers = { EI: 0, SN: 0, TF: 0, JP: 0, enneagram: {} };
  
  // 질문 필터링
  const mbtiQs = mode === 'simple' ? MBTI_QUESTIONS.filter(q => q.simple) : MBTI_QUESTIONS;
  const enneagramQs = mode === 'simple' ? ENNEAGRAM_QUESTIONS.filter(q => q.simple) : ENNEAGRAM_QUESTIONS;
  
  testState.currentQuestions = [...mbtiQs, ...enneagramQs];
  
  document.getElementById('test-overlay').style.display = 'flex';
  renderQuestion();
}

function renderQuestion() {
  const q = testState.currentQuestions[testState.currentIndex];
  const qArea = document.getElementById('question-area');
  
  // 애니메이션 효과
  qArea.classList.remove('slide-in');
  void qArea.offsetWidth; // reflow
  qArea.classList.add('slide-in');

  document.getElementById('question-text').textContent = q.text;
  
  // 진행도 업데이트
  const progress = ((testState.currentIndex) / testState.currentQuestions.length) * 100;
  document.getElementById('test-progress').style.width = `${progress}%`;
  document.getElementById('test-step-indicator').textContent = `질문 ${testState.currentIndex + 1} / ${testState.currentQuestions.length}`;
  
  // 카테고리 표시
  const isMbti = 'dim' in q;
  const badge = document.getElementById('test-category-badge');
  badge.textContent = isMbti ? `MBTI 섹션 (${q.dim})` : "에니어그램 섹션";
  badge.style.background = isMbti ? "var(--secondary-accent)" : "var(--accent-color)";

  // 격려 문구
  const encouragement = document.getElementById('test-encouragement');
  if (progress > 80) encouragement.textContent = "거의 다 왔어요! 조금만 더 힘내세요.";
  else if (progress > 50) encouragement.textContent = "절반이나 넘었네요. 당신의 내면이 보이기 시작합니다.";
  else encouragement.textContent = "좋은 흐름입니다. 편하게 답변해 주세요.";
}

function handleAnswer(score) {
  const q = testState.currentQuestions[testState.currentIndex];
  
  if ('dim' in q) {
    // MBTI 채점: E, S, T, J 방향이면 +, 아니면 - 처리 (data.js 구조에 따름)
    // 여기서는 간단히 q.type이 'E', 'S' 등일 때 score를 합산하는 방식
    const multiplier = (q.type === 'E' || q.type === 'S' || q.type === 'T' || q.type === 'J') ? 1 : -1;
    testState.answers[q.dim] += (score * multiplier);
  } else {
    // 에니어그램 채점: 해당 타입 점수 누적
    if (!testState.answers.enneagram[q.type]) testState.answers.enneagram[q.type] = 0;
    testState.answers.enneagram[q.type] += score;
  }

  testState.currentIndex++;
  
  if (testState.currentIndex < testState.currentQuestions.length) {
    renderQuestion();
  } else {
    finishTest();
  }
}

function finishTest() {
  // 1. MBTI 결과 산출
  const res = testState.answers;
  const mbti = [
    res.EI >= 0 ? 'E' : 'I',
    res.SN >= 0 ? 'S' : 'N',
    res.TF >= 0 ? 'T' : 'F',
    res.JP >= 0 ? 'J' : 'P'
  ].join('');

  // 2. 에니어그램 결과 산출 (가장 높은 점수)
  let maxScore = -999;
  let enneagram = "1";
  for (const [type, score] of Object.entries(testState.answers.enneagram)) {
    if (score > maxScore) {
      maxScore = score;
      enneagram = type;
    }
  }

  // 3. UI 반영
  document.getElementById('mbti-select').value = mbti;
  document.getElementById('enneagram-select').value = enneagram;
  
  closeTest();
  updateAnalysis();
  
  // 결과 위치로 스크롤
  document.getElementById('analysis-section').scrollIntoView({ behavior: 'smooth' });
}

function closeTest() {
  document.getElementById('test-overlay').style.display = 'none';
}

function updateAnalysis() {
  const mbti = document.getElementById('mbti-select').value;
  const enneagram = document.getElementById('enneagram-select').value;
  const stress = parseInt(document.getElementById('stress-slider').value);

  const mbtiInfo = MBTI_DATA[mbti];
  const enneagramInfo = ENNEAGRAM_DATA[enneagram];

  renderReport(mbti, enneagram, mbtiInfo, enneagramInfo, stress);
  renderChart(mbtiInfo.functions);
  updateColleagueTips();
}

function renderReport(mbti, enneagram, mbtiInfo, enneagramInfo, stress) {
  const reportTitle = document.getElementById('report-title');
  const analysisReport = document.getElementById('analysis-report');
  const alertContainer = document.getElementById('alert-container');

  reportTitle.innerHTML = `<span style="display:block; margin-bottom: 0.2rem;">${mbti} ${enneagram}번 유형</span><span style="font-size: 0.85em; font-weight: 400; opacity: 0.9;">입체적 자아 분석 리포트</span>`;

  let reportHTML = `
    <p style="margin-bottom: 1.2rem;"><strong>[종합 진단]</strong> 당신은 <strong>${mbti}</strong> 유형으로서 <strong>${mbtiInfo.strengths}</strong> 능력이 탁월하며, 
    내면적으로는 <strong>${enneagramInfo.name}(${enneagram}번)</strong> 유형의 동기인 <strong>'${enneagramInfo.motivation}'</strong>을 기반으로 움직입니다.</p>
    
    <p style="margin-bottom: 1.2rem; color: var(--text-secondary);">MBTI는 당신이 <strong>'어떻게(How)'</strong> 행동하는지 보여줍니다: 
    주기능인 <strong>${FUNCTION_NAMES[mbtiInfo.functions[0]]}(${mbtiInfo.functions[0]})</strong>을 통해 세상을 인식하고 결정을 내립니다.</p>
    
    <p style="margin-bottom: 1.2rem; color: var(--text-secondary);">에니어그램은 당신이 <strong>'왜(Why)'</strong> 그렇게 행동하는지 설명합니다: 
    <strong>'${enneagramInfo.fear}'</strong>에 대한 두려움이 당신의 핵심 동인입니다.</p>
    
    <p>현재 스트레스 지수는 <strong>${stress}/10</strong>입니다. 
    ${stress > 6 ? `<span style="color: #ef4444;">스트레스 수준이 높습니다. 에니어그램의 <strong>분열(퇴화) 방향(${enneagramInfo.stress}번)</strong>으로 에너지가 흐르고 있을 가능성이 큽니다.</span>` : 
    `<span style="color: var(--gold);">현재 비교적 안정된 상태입니다. <strong>통합(성장) 방향(${enneagramInfo.growth}번)</strong>의 긍정적인 특성을 발휘하기 좋은 시기입니다.</span>`}</p>
  `;
  analysisReport.innerHTML = reportHTML;

  if (stress > 5) {
    alertContainer.style.display = 'block';
    alertContainer.innerHTML = `
      <strong>⚠️ 주의: 분열(퇴화) 조짐 포착</strong>
      스트레스 상황에서 당신은 ${enneagramInfo.behavior}을 보일 수 있습니다. 
      이를 극복하기 위해 잠시 멈추고 <strong>${mbtiInfo.tips}</strong>을 스스로에게 적용해 보세요.
    `;
  } else {
    alertContainer.style.display = 'none';
  }
}

function renderChart(functions) {
  const ctx = document.getElementById('radarChart').getContext('2d');
  const weights = [100, 85, 70, 50, 45, 35, 25, 15];
  const labels = functions.map(f => `${FUNCTION_NAMES[f]} (${f})`);

  if (radarChart) radarChart.destroy();

  // 모바일 여부에 따라 폰트 크기 조절
  const isMobile = window.innerWidth < 600;

  radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        label: '인지 기능 강도',
        data: weights,
        backgroundColor: 'rgba(124, 58, 237, 0.2)',
        borderColor: '#7c3aed',
        pointBackgroundColor: '#7c3aed',
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        r: {
          angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
          grid: { color: 'rgba(255, 255, 255, 0.1)' },
          pointLabels: { 
            color: '#94a3b8', 
            font: { size: isMobile ? 8 : 11 },
            padding: 5
          },
          ticks: { display: false, max: 100, min: 0 }
        }
      },
      plugins: { legend: { display: false } },
      maintainAspectRatio: false
    }
  });
}

function updateColleagueTips() {
  const myMbti = document.getElementById('mbti-select').value;
  const colleagueMbti = document.getElementById('colleague-mbti').value;
  const tipsContainer = document.getElementById('colleague-tips');
  const info = MBTI_DATA[colleagueMbti];

  // 시너지 분석 로직
  let synergyHTML = `
    <div style="margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px dashed var(--glass-border);">
      <h4 style="color: var(--gold); margin-bottom: 0.5rem; font-size: 1rem;">🤝 ${myMbti} × ${colleagueMbti} 시너지 분석</h4>
      <p style="font-size: 0.9rem; color: var(--text-primary); line-height: 1.4;">
        ${getSynergyText(myMbti, colleagueMbti)}
      </p>
    </div>
    <ul style="list-style: none; padding: 0; font-size: 0.95rem;">
      <li style="display: flex; margin-bottom: 0.8rem; align-items: flex-start;">
        <span style="flex-shrink: 0; width: 1.5rem;">✅</span>
        <span style="flex-shrink: 0; width: 3.5rem; font-weight: bold; color: var(--text-primary);">강점:</span>
        <span style="flex-grow: 1; word-break: keep-all;">${info.strengths}</span>
      </li>
      <li style="display: flex; margin-bottom: 0.8rem; align-items: flex-start;">
        <span style="flex-shrink: 0; width: 1.5rem;">⚠️</span>
        <span style="flex-shrink: 0; width: 3.5rem; font-weight: bold; color: var(--text-primary);">주의:</span>
        <span style="flex-grow: 1; word-break: keep-all;">${info.weaknesses}</span>
      </li>
      <li style="display: flex; margin-bottom: 0.8rem; align-items: flex-start;">
        <span style="flex-shrink: 0; width: 1.5rem;">💡</span>
        <span style="flex-shrink: 0; width: 3.5rem; font-weight: bold; color: var(--text-primary);">팁:</span>
        <span style="flex-grow: 1; word-break: keep-all;">${info.tips}</span>
      </li>
    </ul>
  `;
  tipsContainer.innerHTML = synergyHTML;
}

function getSynergyText(my, other) {
  if (my === other) return "같은 유형이군요! 서로의 논리 구조를 잘 이해하지만, 동시에 같은 사각지대(Weakness)를 가질 수 있으니 주의하세요.";
  
  let traits = [];
  // S vs N 차이
  if (my[1] !== other[1]) {
    traits.push(other[1] === 'S' ? "구체적인 데이터와 사실 위주로 설명하세요." : "전체적인 비전과 아이디어의 가치를 먼저 제시하세요.");
  }
  // T vs F 차이
  if (my[2] !== other[2]) {
    traits.push(other[2] === 'T' ? "논리적인 인과관계와 성과를 강조하세요." : "업무의 의미와 사람에게 미치는 영향을 고려해 대화하세요.");
  }
  // J vs P 차이
  if (my[3] !== other[3]) {
    traits.push(other[3] === 'J' ? "마감 기한을 엄수하고 계획적인 모습을 보이세요." : "융통성 있는 대안을 제시하며 압박감을 줄여주세요.");
  }

  return traits.length > 0 ? traits.join("<br><span style='flex-shrink: 0; width: 1.5rem; display: inline-block; color: var(--gold);'>✨</span>") : "서로 보완적인 관계입니다. 상대방의 강점을 신뢰하고 협력하세요.";
}
