import React from 'react';
import ProgressRing from './ProgressRing';
import type { Question } from './types';

interface SummaryProps {
  questions: Question[];
  userAnswers: Record<string, number>;
  onReviewMistakes: () => void;
  onRetry: () => void;
  onDone: () => void;
}

const Summary: React.FC<SummaryProps> = ({ questions, userAnswers, onReviewMistakes, onRetry, onDone }) => {
  const correctAnswers = questions.filter(q => userAnswers[q.id] === q.correctAnswer).length;
  const totalQuestions = questions.length;
  const score = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  const mistakes = questions.filter(q => userAnswers[q.id] !== q.correctAnswer);

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-card text-card-foreground rounded-xl shadow-2xl w-full max-w-2xl m-4 animate-in fade-in-0 zoom-in-95">
        <div className="p-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Session Complete!</h1>
          <p className="text-muted-foreground mb-8">Here's how you did.</p>

          <ProgressRing score={score} />

          <div className="text-left mt-8">
            <h2 className="text-xl font-semibold mb-4">Mistakes Review ({mistakes.length})</h2>
            <div className="space-y-4 max-h-60 overflow-y-auto p-1">
              {mistakes.length > 0 ? mistakes.map((mistake) => (
                <div key={mistake.id} className="p-4 border rounded-lg">
                  <p className="font-semibold">{mistake.text}</p>
                  <p className="text-sm">Your answer: <span className="text-red-500">{mistake.options[userAnswers[mistake.id]]}</span></p>
                  <p className="text-sm">Correct answer: <span className="text-green-500">{mistake.options[mistake.correctAnswer]}</span></p>
                </div>
              )) : (
                <p className="text-muted-foreground text-center p-4">No mistakes! Great job!</p>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <button
              onClick={onReviewMistakes}
              className="flex-1 p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold"
              disabled={mistakes.length === 0}
            >
              Review Mistakes
            </button>
            <button
              onClick={onRetry}
              className="flex-1 p-3 border rounded-lg hover:bg-muted font-semibold"
            >
              Retry Session
            </button>
             <button
              onClick={onDone}
              className="flex-1 p-3 border rounded-lg hover:bg-muted font-semibold"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
