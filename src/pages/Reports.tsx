import React, { useState } from 'react';

const tabs = ['Performance', 'Subject Deep Dive', 'Mistake Analysis', 'Peer Comparison'];

// Placeholder for a chart component
const ChartPlaceholder = ({ title }: { title: string }) => (
  <div className="bg-card p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold text-card-foreground mb-4">{title}</h3>
    <div className="w-full h-64 bg-muted rounded-md flex items-center justify-center">
      <p className="text-muted-foreground">Chart Placeholder</p>
    </div>
  </div>
);

const Reports = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="p-8">
      <div className="flex border-b">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === tab
                ? 'border-b-2 border-primary text-primary'
                : 'text-muted-foreground hover:text-primary'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="py-4">
        {activeTab === 'Performance' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartPlaceholder title="Overall Score Trend" />
            <ChartPlaceholder title="Time Management Analysis" />
          </div>
        )}
        {activeTab === 'Subject Deep Dive' && (
           <ChartPlaceholder title="Performance by Subject" />
        )}
        {activeTab === 'Mistake Analysis' && (
          <ChartPlaceholder title="Common Mistake Categories" />
        )}
        {activeTab === 'Peer Comparison' && (
          <ChartPlaceholder title="Your Percentile Rank vs. Peers" />
        )}
      </div>
    </div>
  );
};

export default Reports;
