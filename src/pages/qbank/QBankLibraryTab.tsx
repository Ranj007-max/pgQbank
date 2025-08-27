import React, { useState } from 'react';

// --- Placeholder Data ---
const mcqs = [
  {
    id: 'mcq-1',
    question: 'What is the most common cause of community-acquired pneumonia?',
    options: ['Streptococcus pneumoniae', 'Haemophilus influenzae', 'Mycoplasma pneumoniae', 'Legionella pneumophila'],
    correctAnswer: 'Streptococcus pneumoniae',
    explanation: 'Streptococcus pneumoniae is the most common bacterial pathogen responsible for community-acquired pneumonia in all age groups.',
    subject: 'Pulmonology',
  },
  {
    id: 'mcq-2',
    question: 'Which of the following is a key feature of Parkinson\'s disease?',
    options: ['Intention tremor', 'Bradykinesia', 'Muscle spasticity', 'Aphasia'],
    correctAnswer: 'Bradykinesia',
    explanation: 'Bradykinesia, or slowness of movement, is one of the cardinal motor symptoms of Parkinson\'s disease, along with resting tremor, rigidity, and postural instability.',
    subject: 'Neurology',
  },
  {
    id: 'mcq-3',
    question: 'A patient presents with a "string sign" on a barium swallow. What is the most likely diagnosis?',
    options: ['Ulcerative colitis', 'Crohn\'s disease', 'Diverticulitis', 'Esophageal cancer'],
    correctAnswer: 'Crohn\'s disease',
    explanation: 'The "string sign" represents severe narrowing of the intestinal lumen, a characteristic finding in Crohn\'s disease.',
    subject: 'Gastroenterology',
  },
];

// --- Reusable Components ---

const MCQListItem = ({ mcq, isExpanded, onToggle }: { mcq: typeof mcqs[0], isExpanded: boolean, onToggle: () => void }) => {
  return (
    <div className="border-b last:border-b-0">
      <button className="w-full text-left p-4 hover:bg-muted" onClick={onToggle}>
        <p className="font-semibold">{mcq.question}</p>
        <p className="text-sm text-muted-foreground">{mcq.subject}</p>
      </button>
      {isExpanded && (
        <div className="p-4 bg-muted/50">
          <h4 className="font-semibold mb-2">Options:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {mcq.options.map(opt => (
              <li key={opt} className={opt === mcq.correctAnswer ? 'font-bold text-primary' : ''}>
                {opt} {opt === mcq.correctAnswer && '(Correct)'}
              </li>
            ))}
          </ul>
          <h4 className="font-semibold mt-4 mb-2">Explanation:</h4>
          <p className="text-sm">{mcq.explanation}</p>
          <div className="flex gap-2 mt-4">
            <button className="px-3 py-1 text-sm border rounded-md">Edit</button>
            <button className="px-3 py-1 text-sm border border-destructive text-destructive rounded-md">Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};


// --- Main Tab Component ---

const QBankLibraryTab = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredMcqs = mcqs.filter(mcq =>
    mcq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mcq.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="search"
          placeholder="Search questions or subjects..."
          className="w-full p-2 border rounded-md bg-input"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="border rounded-lg bg-card overflow-hidden">
        {filteredMcqs.map(mcq => (
          <MCQListItem
            key={mcq.id}
            mcq={mcq}
            isExpanded={expandedId === mcq.id}
            onToggle={() => handleToggle(mcq.id)}
          />
        ))}
      </div>
      {/* Note for future implementation */}
      <p className="text-xs text-muted-foreground mt-4">
        Note: For a large number of questions, this list should be virtualized for performance.
      </p>
    </div>
  );
};

export default QBankLibraryTab;
