import React from 'react';
import { MBTI_DATA, ENNEAGRAM_DATA } from '../constants/data';
import { Sparkles, Brain, Users } from 'lucide-react';

const LandingView = ({ personality }) => {
  return (
    <div className="animate-fade-in">
      <section style={{ textAlign: 'center', padding: '4rem 0' }}>
        <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(139, 92, 246, 0.1)', color: 'var(--primary)', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem', border: '1px solid var(--primary-dim)' }}>
          PRO AI ANALYSIS VERSION
        </div>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
          입체적 성격 분석 및<br />
          <span style={{ background: 'linear-gradient(90deg, #8B5CF6, #7DD3FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>비즈니스 솔루션</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          단순한 테스트를 넘어, 당신의 잠재력과 비즈니스 시너지를 데이터로 증명합니다. 인공지능 기반의 프리미엄 성격 큐레이션을 경험해 보세요.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div className="glass-card" style={{ padding: '2rem', textAlign: 'left', cursor: 'pointer' }} onClick={() => personality.startTest('simple')}>
            <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Sparkles size={20} color="white" />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>빠른 진단 모드</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>핵심 질문 15개로 빠르게 당신의 성향을 파악하고 비즈니스 팁을 확인하세요.</p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', textAlign: 'left', cursor: 'pointer', borderColor: 'var(--primary-dim)' }} onClick={() => personality.startTest('precise')}>
            <div style={{ width: '40px', height: '40px', background: 'var(--secondary)', borderRadius: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Brain size={20} color="white" />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>정밀 분석 모드</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>심층 질문을 통해 8가지 인지 기능과 에니어그램 동기를 완벽하게 해부합니다.</p>
          </div>
        </div>
      </section>

      <section className="glass-panel" style={{ padding: '2rem', marginTop: '2rem' }}>
        <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Users size={18} /> 직접 입력하여 리포트 보기
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>MBTI 유형</label>
            <select 
              value={personality.finalResult.mbti} 
              onChange={(e) => personality.updateResultManual('mbti', e.target.value)}
              style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', borderRadius: '0.5rem' }}
            >
              {Object.keys(MBTI_DATA).map(type => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>에니어그램</label>
            <select 
              value={personality.finalResult.enneagram} 
              onChange={(e) => personality.updateResultManual('enneagram', e.target.value)}
              style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', borderRadius: '0.5rem' }}
            >
              {Object.keys(ENNEAGRAM_DATA).map(num => <option key={num} value={num}>{num}번 유형</option>)}
            </select>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <button className="btn-primary" style={{ width: '100%' }} onClick={() => personality.setView('RESULT')}>분석 시작하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingView;
