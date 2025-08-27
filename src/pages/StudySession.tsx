import React, { useState } from 'react';
import Launcher from './studysession/Launcher';
import Session from './studysession/Session';
import Summary from './studysession/Summary';
import type { Question } from './studysession/types';
import { mockSessionQuestions } from './studysession/mockData';

type ViewState = 'launcher' | 'session' | 'summary';

const StudySession = () => {
  const [view, setView] = useState<ViewState>('launcher');
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});

  const handleStartSession = (questions: Question[] = mockSessionQuestions) => {
    setSessionQuestions(questions);
    setUserAnswers({});
    setView('session');
  };

  const handleAnswerSubmit = (questionId: string, answerIndex: number) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleEndSession = () => {
    setView('summary');
  };

  const handleReviewMistakes = () => {
    const mistakes = sessionQuestions.filter(
      q => userAnswers[q.id] !== q.correctAnswer
    );
    handleStartSession(mistakes);
  };

  const handleRetry = () => {
    handleStartSession(sessionQuestions);
  };

  const handleDone = () => {
    setView('launcher');
  };

  const renderView = () => {
    switch (view) {
      case 'launcher':
        return <Launcher onStartSession={() => handleStartSession()} />;
      case 'session':
        return (
          <Session
            questions={sessionQuestions}
            onAnswerSubmit={handleAnswerSubmit}
            onEndSession={handleEndSession}
          />
        );
      case 'summary':
        return (
          <Summary
            questions={sessionQuestions}
            userAnswers={userAnswers}
            onReviewMistakes={handleReviewMistakes}
            onRetry={handleRetry}
            onDone={handleDone}
          />
        );
      default:
        return <Launcher onStartSession={() => handleStartSession()} />;
    }
  };

  return <div className="h-full">{renderView()}</div>;
};

export default StudySession;
