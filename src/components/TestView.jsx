import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestView = ({ personality }) => {
  const currentQ = personality.questions[personality.currentIndex];
  const progress = (personality.currentIndex / personality.questions.length) * 100;

  if (!currentQ) return null;

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '700px', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, height: '4px', width: `${progress}%`, background: 'linear-gradient(90deg, var(--primary), var(--secondary))', transition: 'width 0.5s ease' }} />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          <span style={{ fontWeight: 600, color: 'var(--primary)' }}>
            {'dim' in currentQ ? `MBTI SECTION (${currentQ.dim})` : 'ENNEAGRAM SECTION'}
          </span>
          <span>질문 {personality.currentIndex + 1} / {personality.questions.length}</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={personality.currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h2 style={{ fontSize: '1.8rem', marginBottom: '3rem', lineHeight: 1.4, height: '6rem', display: 'flex', alignItems: 'center' }}>
              {currentQ.text}
            </h2>
          </motion.div>
        </AnimatePresence>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { label: '매우 그렇다', score: 3 },
            { label: '그렇다', score: 2 },
            { label: '조금 그렇다', score: 1 },
            { label: '그렇지 않다', score: 0 }
          ].map((option, idx) => (
            <button
              key={idx}
              className="btn-glass"
              style={{ padding: '1.2rem', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              onClick={() => personality.handleAnswer(option.score)}
            >
              {option.label}
              <span style={{ opacity: 0.3, fontSize: '0.8rem' }}>+{option.score}</span>
            </button>
          ))}
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <button 
            style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '0.8rem', cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => personality.setView('LANDING')}
          >
            테스트 중단하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestView;
