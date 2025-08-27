import React from 'react';
import type { Question } from './types';

interface MCQCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswerSelect: (index: number) => void;
  isSubmitted: boolean;
}

const MCQCard: React.FC<MCQCardProps> = ({ question, selectedAnswer, onAnswerSelect, isSubmitted }) => {
  const getButtonClass = (index: number) => {
    if (!isSubmitted) {
      return selectedAnswer === index
        ? 'bg-primary/20 border-primary' // Selected but not submitted
        : 'hover:bg-muted';
    }
    // After submission
    if (index === question.correctAnswer) {
      return 'bg-green-500/20 border-green-500 text-green-800'; // Correct answer
    }
    if (index === selectedAnswer) {
      return 'bg-red-500/20 border-red-500 text-red-800'; // Incorrectly selected answer
    }
    return 'border-gray-300'; // Default for other options
  };

  return (
    <div className="bg-card p-8 rounded-lg shadow-md flex-1 flex flex-col">
      <p className="text-sm text-muted-foreground mb-2">Cardiology / Arrhythmias</p>
      <h2 className="text-xl font-semibold mb-6 leading-relaxed">{question.text}</h2>
      <div className="space-y-4 w-full">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`w-full p-4 border-2 rounded-lg text-left transition-colors text-card-foreground ${getButtonClass(index)}`}
            onClick={() => !isSubmitted && onAnswerSelect(index)}
            disabled={isSubmitted}
          >
            <span className="font-semibold mr-2">{String.fromCharCode(65 + index)}.</span>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MCQCard;
