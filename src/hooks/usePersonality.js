import { useState, useMemo } from 'react';
import { MBTI_QUESTIONS, ENNEAGRAM_QUESTIONS } from '../constants/data';

export const usePersonality = () => {
  const [testState, setTestState] = useState({
    view: 'LANDING', // LANDING, TESTING, RESULT
    mode: 'simple',
    currentIndex: 0,
    questions: [],
    answers: {
      EI: 0, SN: 0, TF: 0, JP: 0,
      enneagram: {}
    },
    finalResult: {
      mbti: 'INTJ',
      enneagram: '1',
      stress: 5
    }
  });

  const startTest = (mode) => {
    const mbtiQs = mode === 'simple' ? MBTI_QUESTIONS.filter(q => q.simple) : MBTI_QUESTIONS;
    const enneagramQs = mode === 'simple' ? ENNEAGRAM_QUESTIONS.filter(q => q.simple) : ENNEAGRAM_QUESTIONS;
    
    setTestState(prev => ({
      ...prev,
      view: 'TESTING',
      mode,
      currentIndex: 0,
      questions: [...mbtiQs, ...enneagramQs],
      answers: { EI: 0, SN: 0, TF: 0, JP: 0, enneagram: {} }
    }));
  };

  const handleAnswer = (score) => {
    const q = testState.questions[testState.currentIndex];
    const newAnswers = { ...testState.answers };

    if ('dim' in q) {
      const multiplier = (q.type === 'E' || q.type === 'S' || q.type === 'T' || q.type === 'J') ? 1 : -1;
      newAnswers[q.dim] += (score * multiplier);
    } else {
      if (!newAnswers.enneagram[q.type]) newAnswers.enneagram[q.type] = 0;
      newAnswers.enneagram[q.type] += score;
    }

    if (testState.currentIndex + 1 < testState.questions.length) {
      setTestState(prev => ({
        ...prev,
        currentIndex: prev.currentIndex + 1,
        answers: newAnswers
      }));
    } else {
      // Finish Test
      const mbti = [
        newAnswers.EI >= 0 ? 'E' : 'I',
        newAnswers.SN >= 0 ? 'S' : 'N',
        newAnswers.TF >= 0 ? 'T' : 'F',
        newAnswers.JP >= 0 ? 'J' : 'P'
      ].join('');

      let maxScore = -Infinity;
      let enneagram = "1";
      for (const [type, score] of Object.entries(newAnswers.enneagram)) {
        if (score > maxScore) {
          maxScore = score;
          enneagram = type;
        }
      }

      setTestState(prev => ({
        ...prev,
        view: 'RESULT',
        finalResult: { ...prev.finalResult, mbti, enneagram }
      }));
    }
  };

  const updateResultManual = (key, value) => {
    setTestState(prev => ({
      ...prev,
      finalResult: { ...prev.finalResult, [key]: value }
    }));
  };

  const setView = (view) => {
    setTestState(prev => ({ ...prev, view }));
  };

  return {
    ...testState,
    startTest,
    handleAnswer,
    updateResultManual,
    setView
  };
};
