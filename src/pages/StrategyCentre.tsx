import React from 'react';

// Placeholder data for strategies
const strategies = [
  {
    title: 'AI Smart Planner',
    description: 'Generate an optimal weekly study schedule based on your progress and goals.',
    icon: '🤖',
    action: 'Generate Plan',
  },
  {
    title: 'Pace Analysis',
    description: 'Analyze your question-solving speed and identify areas for improvement.',
    icon: '⏱️',
    action: 'Analyze Pace',
  },
  {
    title: 'Weakest Subjects First',
    description: 'Focus your efforts on the subjects where you have the lowest scores.',
    icon: '📉',
    action: 'View Subjects',
  },
  {
    title: 'High-Yield Topics',
    description: 'Prioritize topics that appear most frequently in exams.',
    icon: '🎯',
    action: 'Explore Topics',
  },
];

// Placeholder for a strategy card component
const StrategyCard = ({ title, description, icon, action }: { title: string; description: string; icon: string; action: string }) => (
  <div className="bg-card p-6 rounded-lg shadow-md flex flex-col">
    <div className="flex-1">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-card-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    <button className="w-full mt-4 p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
      {action}
    </button>
  </div>
);

const StrategyCentre = () => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {strategies.map(strategy => (
          <StrategyCard key={strategy.title} {...strategy} />
        ))}
      </div>
    </div>
  );
};

export default StrategyCentre;
