import React from 'react';

// Placeholder for a card component
const Card = ({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) => (
  <div className={`bg-card p-6 rounded-lg shadow-md ${className}`}>
    <h2 className="text-lg font-semibold text-card-foreground mb-4">{title}</h2>
    <div className="text-card-foreground">{children}</div>
  </div>
);

// Placeholder for a metric item
const Metric = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-sm text-muted-foreground">{label}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const Dashboard = () => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Key Metrics Section */}
        <Card title="Key Metrics" className="lg:col-span-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Metric label="Questions Answered" value="1,250" />
            <Metric label="Correct Answers" value="78%" />
            <Metric label="Exams Taken" value="12" />
            <Metric label="Average Score" value="82%" />
            <Metric label="Time Spent" value="42h" />
            <Metric label="Subjects Covered" value="5/8" />
          </div>
        </Card>

        {/* Today's Briefing Section */}
        <Card title="AI-Powered Today's Briefing">
          <p className="text-sm">
            Focus on <strong>Cardiology</strong>, your weakest subject this week. Review your notes on <strong>arrhythmias</strong> and try 20 new QBank questions.
          </p>
        </Card>

        {/* Study Activity Heatmap Section */}
        <Card title="Study Activity" className="lg:col-span-3">
          <div className="w-full h-48 bg-muted rounded-md flex items-center justify-center">
            <p className="text-muted-foreground">Study Activity Heatmap Placeholder</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
