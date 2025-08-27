import React from 'react';
import LaunchpadCard from './LaunchpadCard';
import FilterSection from '../../components/forms/FilterSection';
import Checkbox from '../../components/forms/Checkbox';

interface LauncherProps {
  onStartSession: () => void;
}

const Launcher: React.FC<LauncherProps> = ({ onStartSession }) => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Study Session</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <LaunchpadCard
            icon="⚡️"
            title="Adaptive"
            description="AI-powered session based on your weak areas."
          />
          <LaunchpadCard
            icon="🔄"
            title="SRS"
            description="Review questions using Spaced Repetition."
          />
          <LaunchpadCard
            icon="❌"
            title="Mistakes"
            description="Practice questions you previously got wrong."
          />
          <LaunchpadCard
            icon="🔖"
            title="Bookmarks"
            description="Review questions you've bookmarked."
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Custom Session Builder</h2>
        <div className="p-6 border rounded-lg bg-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FilterSection title="Subjects">
              <Checkbox label="Cardiology" count={1250} />
              <Checkbox label="Pulmonology" count={870} />
              <Checkbox label="Neurology" count={920} />
            </FilterSection>
            <FilterSection title="Question Status">
              <Checkbox label="Unseen" />
              <Checkbox label="Correct" />
              <Checkbox label="Incorrect" />
              <Checkbox label="Flagged" />
            </FilterSection>
            <FilterSection title="Difficulty">
              <Checkbox label="Easy" />
              <Checkbox label="Medium" />
              <Checkbox label="Hard" />
            </FilterSection>
          </div>
          <div className="mt-6">
             <label htmlFor="num-questions" className="block text-sm font-medium text-muted-foreground mb-2">Number of Questions</label>
             <input type="range" id="num-questions" min="10" max="100" defaultValue="50" className="w-full" />
             <div className="flex justify-between text-sm text-muted-foreground">
                <span>10</span>
                <span>50</span>
                <span>100</span>
             </div>
          </div>
          <button
            onClick={onStartSession}
            className="w-full mt-6 p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold text-lg"
          >
            Start Custom Session
          </button>
        </div>
      </section>
    </div>
  );
};

export default Launcher;
