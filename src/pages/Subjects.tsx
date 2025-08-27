import React from 'react';

// Placeholder data for subjects
const subjects = [
  { name: 'Cardiology', progress: 75, color: 'bg-red-500' },
  { name: 'Pulmonology', progress: 50, color: 'bg-blue-500' },
  { name: 'Gastroenterology', progress: 90, color: 'bg-green-500' },
  { name: 'Nephrology', progress: 30, color: 'bg-yellow-500' },
  { name: 'Endocrinology', progress: 60, color: 'bg-purple-500' },
  { name: 'Neurology', progress: 80, color: 'bg-indigo-500' },
  { name: 'Oncology', progress: 45, color: 'bg-pink-500' },
  { name: 'Rheumatology', progress: 20, color: 'bg-orange-500' },
];

// Placeholder for a progress bar component
const ProgressBar = ({ progress, color }: { progress: number; color: string }) => (
  <div className="w-full bg-muted rounded-full h-2.5">
    <div className={`${color} h-2.5 rounded-full`} style={{ width: `${progress}%` }}></div>
  </div>
);

// Placeholder for a subject card component
const SubjectCard = ({ name, progress, color }: { name:string; progress: number; color: string }) => (
    <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
        <h3 className="text-lg font-semibold text-card-foreground mb-2">{name}</h3>
        <ProgressBar progress={progress} color={color} />
        <p className="text-sm text-muted-foreground mt-2">{progress}% Complete</p>
    </div>
);

const Subjects = () => {
    return (
        <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {subjects.map(subject => (
                    <SubjectCard key={subject.name} {...subject} />
                ))}
            </div>
        </div>
    );
};

export default Subjects;
