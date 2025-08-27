export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  subject: string;
  chapter: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
}

export interface SessionState {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: (number | null)[];
  isCompleted: boolean;
}

export type SessionType = 'Adaptive' | 'SRS' | 'Mistakes' | 'Bookmarks' | 'Custom';
