import type { Question } from './types';

export const mockSessionQuestions: Question[] = [
  {
    id: 'q1',
    text: 'A 65-year-old man presents with a 2-hour history of crushing chest pain. An ECG shows ST-segment elevation in leads V1-V4. Which coronary artery is most likely occluded?',
    options: [
      'Right Coronary Artery (RCA)',
      'Left Anterior Descending (LAD) Artery',
      'Left Circumflex (LCx) Artery',
      'Posterior Descending Artery (PDA)'
    ],
    correctAnswer: 1,
    explanation: 'ST-segment elevation in the precordial leads V1-V4 is characteristic of an anterior wall myocardial infarction, which is typically caused by occlusion of the Left Anterior Descending (LAD) artery.',
    subject: 'Cardiology',
    chapter: 'Ischemic Heart Disease',
    difficulty: 'Medium',
    tags: ['ECG', 'MI']
  },
  {
    id: 'q2',
    text: 'A 28-year-old woman presents with a history of recurrent episodes of palpitations. An ECG taken during an episode shows a narrow complex tachycardia with a regular rhythm at 180 bpm. Carotid sinus massage terminates the arrhythmia. What is the most likely diagnosis?',
    options: [
      'Atrial Fibrillation',
      'Ventricular Tachycardia',
      'Atrioventricular Nodal Reentrant Tachycardia (AVNRT)',
      'Sinus Tachycardia'
    ],
    correctAnswer: 2,
    explanation: 'AVNRT is the most common type of paroxysmal supraventricular tachycardia. It is characterized by a regular, narrow complex tachycardia that can often be terminated by vagal maneuvers like carotid sinus massage.',
    subject: 'Cardiology',
    chapter: 'Arrhythmias',
    difficulty: 'Hard',
    tags: ['ECG', 'Tachycardia']
  },
  {
    id: 'q3',
    text: 'Which of the following is the most common cause of community-acquired pneumonia in adults?',
    options: [
      'Haemophilus influenzae',
      'Mycoplasma pneumoniae',
      'Staphylococcus aureus',
      'Streptococcus pneumoniae'
    ],
    correctAnswer: 3,
    explanation: 'Streptococcus pneumoniae is the most common bacterial cause of community-acquired pneumonia (CAP) in all age groups.',
    subject: 'Pulmonology',
    chapter: 'Infections',
    difficulty: 'Easy',
    tags: ['Pneumonia', 'Microbiology']
  }
];
