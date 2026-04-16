import React from 'react';
import { Radar } from 'react-chartjs-2';
import { MBTI_DATA, ENNEAGRAM_DATA, FUNCTION_NAMES } from '../constants/data';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const ResultView = ({ personality }) => {
  const { mbti, enneagram, stress } = personality.finalResult;
  const mbtiInfo = MBTI_DATA[mbti];
  const enneagramInfo = ENNEAGRAM_DATA[enneagram];

  const radarData = {
    labels: mbtiInfo.functions.map(f => `${FUNCTION_NAMES[f]} (${f})`),
    datasets: [
      {
        label: '인지 기능 강도',
        data: [100, 85, 70, 50, 45, 35, 25, 15], // 기본 가중치 (실제로는 로직 기반으로 계산 가능)
        backgroundColor: 'rgba(139, 92, 246, 0.2)',
        borderColor: '#8B5CF6',
        borderWidth: 2,
        pointBackgroundColor: '#8B5CF6',
      },
    ],
  };

  const radarOptions = {
    scales: {
      r: {
        angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
        pointLabels: { color: '#94a3b8', font: { size: 10 } },
        ticks: { display: false, stepSize: 20 },
      },
    },
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
  };

  return (
    <div className="animate-fade-in">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>입체적 자아 분석 리포트</h1>
        <div style={{ color: 'var(--accent-gold)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.1em' }}>PRO AI ANALYSIS</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div className="glass-panel" style={{ padding: '2rem', minHeight: '400px' }}>
          <Radar data={radarData} options={radarOptions} />
        </div>

        <div className="glass-card" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem', color: 'var(--primary)' }}>
            [전문 분석 보고서]
          </h3>
          <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <p><strong>종합 진단:</strong> 당신은 <strong>{mbti}</strong> 유형으로서 <strong>{mbtiInfo.strengths}</strong> 능력이 탁월하며, <strong>{enneagramInfo.name}({enneagram}번)</strong> 유형의 동기인 <strong>'{enneagramInfo.motivation}'</strong>을 기반으로 움직입니다.</p>
            <p><span style={{ color: 'var(--secondary)' }}>How:</span> 주기능인 <strong>{FUNCTION_NAMES[mbtiInfo.functions[0]]}({mbtiInfo.functions[0]})</strong>을 통해 세상을 인식하고 전략을 세웁니다.</p>
            <p><span style={{ color: 'var(--primary)' }}>Why:</span> <strong>'{enneagramInfo.fear}'</strong>에 대한 무의식적 두려움이 당신의 성취를 이끄는 핵심 동력입니다.</p>
          </div>

          <div style={{ marginTop: '2rem', padding: '1rem', background: stress > 6 ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)', border: `1px solid ${stress > 6 ? 'var(--error)' : 'var(--accent-gold)'}`, borderRadius: '0.5rem' }}>
            <h4 style={{ color: stress > 6 ? 'var(--error)' : 'var(--accent-gold)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              {stress > 6 ? '⚠️ 스트레스 경고: 분열 조짐' : '✨ 안정 상태: 통합의 흐름'}
            </h4>
            <p style={{ fontSize: '0.85rem' }}>
              {stress > 6 
                ? `현재 스트레스가 높아 ${enneagramInfo.behavior}을 보일 수 있습니다. ${mbtiInfo.tips}을 기억하세요.` 
                : `현재 매우 안정적입니다. ${enneagramInfo.growth}번 유형의 긍정적 에너지를 발휘하기 좋은 시점입니다.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultView;
