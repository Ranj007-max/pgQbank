import React, { useState } from 'react';
import MCQCard from './MCQCard';
import type { Question } from './types';

interface SessionProps {
  questions: Question[];
  onAnswerSubmit: (questionId: string, answerIndex: number) => void;
  onEndSession: () => void;
}

const Session: React.FC<SessionProps> = ({ questions, onAnswerSubmit, onEndSession }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      alert("Please select an answer before submitting.");
      return;
    }
    onAnswerSubmit(currentQuestion.id, selectedAnswer);
    setIsSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setIsSubmitted(false);
    } else {
      onEndSession();
    }
  };

  const ExplanationPanel = () => (
    <div className="bg-card p-6 rounded-lg shadow-md">
        <h3 className="font-bold text-lg mb-2">Explanation</h3>
        <p className="text-muted-foreground mb-4">{currentQuestion.explanation}</p>
        <div className="space-y-2">
            <h4 className="font-semibold">Mistake Tagging</h4>
            <div className="flex flex-wrap gap-2">
                <button className="px-2 py-1 text-xs border rounded-full hover:bg-muted">Knowledge Gap</button>
                <button className="px-2 py-1 text-xs border rounded-full hover:bg-muted">Misread Question</button>
                <button className="px-2 py-1 text-xs border rounded-full hover:bg-muted">Silly Mistake</button>
            </div>
        </div>
    </div>
  );

  if (!currentQuestion) {
    return (
        <div className="flex items-center justify-center h-full">
            <p>No questions in this session.</p>
        </div>
    )
  }

  return (
    <div className="relative flex flex-col md:flex-row gap-8 p-8 h-full bg-background">
      <div className="absolute top-4 left-4 text-sm text-muted-foreground">
        Question {currentQuestionIndex + 1} of {questions.length}
      </div>
      <button
        onClick={onEndSession}
        className="absolute top-4 right-4 text-sm text-muted-foreground hover:text-foreground"
      >
        End Session
      </button>
      <main className="flex-1 flex flex-col gap-6">
        <MCQCard
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
            isSubmitted={isSubmitted}
        />
        {!isSubmitted ? (
             <button
                onClick={handleSubmit}
                className="w-full p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold text-lg"
            >
                Submit
            </button>
        ) : (
            <button
                onClick={handleNextQuestion}
                className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold text-lg"
            >
                Next Question
            </button>
        )}
      </main>

      <aside className={`w-full md:w-96 transition-opacity duration-300 ${isSubmitted ? 'opacity-100' : 'opacity-0'}`}>
        {isSubmitted && <ExplanationPanel />}
      </aside>
    </div>
  );
};

export default Session;
