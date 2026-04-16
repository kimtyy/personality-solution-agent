import React, { useState } from 'react';
import { MBTI_DATA } from '../constants/data';
import { ShieldCheck, Zap, AlertCircle } from 'lucide-react';

const SynergyView = ({ personality }) => {
  const [colleagueMbti, setColleagueMbti] = useState('ENFP');
  const myMbti = personality.finalResult.mbti;
  const info = MBTI_DATA[colleagueMbti];

  const getSynergyText = (my, other) => {
    if (my === other) return "같은 유형이군요! 서로의 사고 방식을 잘 이해하지만, 동시에 사각지대도 겹칠 수 있으니 주의하세요.";
    let traits = [];
    if (my[1] !== other[1]) traits.push(other[1] === 'S' ? "구체적 데이터를 활용하세요." : "비전과 아이디어를 먼저 제시하세요.");
    if (my[2] !== other[2]) traits.push(other[2] === 'T' ? "논리적 인과관계를 강조하세요." : "사람에게 미치는 영향을 고려하세요.");
    return traits.length > 0 ? traits.join(" ") : "서로 보완적인 관계입니다.";
  };

  return (
    <div className="glass-panel" style={{ padding: '2.5rem', marginTop: '3rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h2 style={{ fontSize: '1.8rem' }}>동료 협업 시너지 가이드</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>대상 동료:</span>
          <select 
            value={colleagueMbti} 
            onChange={(e) => setColleagueMbti(e.target.value)}
            style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', borderRadius: '0.5rem' }}
          >
            {Object.keys(MBTI_DATA).map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem', background: 'rgba(125, 211, 252, 0.05)', borderColor: 'var(--secondary-dim)' }}>
        <p style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', color: 'var(--secondary)', fontWeight: 600 }}>
          <Zap size={18} /> {myMbti} × {colleagueMbti} 전략적 궁합
        </p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', lineHeight: 1.5 }}>{getSynergyText(myMbti, colleagueMbti)}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <div style={{ padding: '1.2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '0.75rem', border: '1px solid var(--glass-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem', color: 'var(--text-primary)', fontWeight: 600 }}>
            <ShieldCheck size={16} color="var(--primary)" /> 강점 활용
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{info.strengths}</p>
        </div>
        <div style={{ padding: '1.2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '0.75rem', border: '1px solid var(--glass-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem', color: 'var(--text-primary)', fontWeight: 600 }}>
            <AlertCircle size={16} color="var(--error)" /> 협업 시 주의
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{info.weaknesses}</p>
        </div>
        <div style={{ padding: '1.2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '0.75rem', border: '1px solid var(--glass-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem', color: 'var(--text-primary)', fontWeight: 600 }}>
            <Zap size={16} color="var(--accent-gold)" /> 커뮤니케이션 팁
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{info.tips}</p>
        </div>
      </div>
    </div>
  );
};

export default SynergyView;
