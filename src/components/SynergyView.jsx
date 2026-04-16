import React, { useState } from 'react';
import { MBTI_DATA } from '../constants/data';
import { ShieldCheck, Zap, AlertCircle, MessageSquare, Target, XCircle } from 'lucide-react';

const SynergyView = ({ personality }) => {
  const [colleagueMbti, setColleagueMbti] = useState('ENFP');
  const myMbti = personality.finalResult.mbti;
  const info = MBTI_DATA[colleagueMbti];
  const guide = info.synergyGuide;

  return (
    <div className="glass-panel" style={{ padding: '2.5rem', marginTop: '3rem' }}>
      {/* Header Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 className="section-title">동료 협업 시너지 가이드</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>대상 동료의 유형을 선택하여 맞춤형 협업 전략을 확인하세요.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)' }}>대상 동료:</span>
          <select 
            value={colleagueMbti} 
            onChange={(e) => setColleagueMbti(e.target.value)}
            style={{ 
              padding: '0.3rem 0.5rem', 
              background: 'transparent', 
              border: 'none', 
              color: 'white', 
              fontWeight: 700,
              fontSize: '1rem',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {Object.keys(MBTI_DATA).map(type => <option key={type} value={type} style={{ background: '#1e293b' }}>{type}</option>)}
          </select>
        </div>
      </div>

      {/* Main Strategy Dashboard */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        
        {/* Left: Personality Style & Approach */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-card" style={{ padding: '2rem', flex: 1, borderLeft: '4px solid var(--primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.2rem', color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem' }}>
              <Zap size={20} /> 협업 스타일에 대한 이해
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              "{guide.style}"
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {guide.approach}
            </p>
          </div>
          
          <div className="glass-card" style={{ padding: '2rem', background: 'rgba(139, 92, 246, 0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.2rem', color: 'var(--accent-gold)', fontWeight: 700, fontSize: '1.1rem' }}>
              <MessageSquare size={20} /> 실전 대화 치트키 (Scripts)
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {guide.phrases.map((phrase, idx) => (
                <div key={idx} style={{ padding: '0.8rem 1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '0.5rem', fontSize: '0.9rem', borderLeft: '2px solid var(--accent-gold)', fontStyle: 'italic' }}>
                  "{phrase}"
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Actions & Restrictions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-card" style={{ padding: '2rem', background: 'rgba(34, 197, 94, 0.05)', borderColor: 'rgba(34, 197, 94, 0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.2rem', color: '#4ade80', fontWeight: 700, fontSize: '1.1rem' }}>
              <ShieldCheck size={20} /> 권장 사항 (Recommended)
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {guide.do.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }} /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card" style={{ padding: '2rem', background: 'rgba(239, 68, 68, 0.05)', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.2rem', color: '#f87171', fontWeight: 700, fontSize: '1.1rem' }}>
              <XCircle size={20} /> 금기 사항 (Avoid)
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {guide.dont.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f87171' }} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.8rem', opacity: 0.6 }}>
        Sovereign AI Synergy Engine v2.0 • Real-time Collaboration Intelligence
      </div>
    </div>
  );
};

export default SynergyView;
