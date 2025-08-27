import React from 'react';

// Placeholder for a Question/Flashcard component
const StudyMaterial = () => (
  <div className="bg-card p-8 rounded-lg shadow-md flex-1 flex flex-col items-center justify-center">
    <h2 className="text-2xl font-bold mb-4">What is the primary function of the sinoatrial (SA) node?</h2>
    <div className="space-y-4 w-full max-w-md">
      <button className="w-full p-4 border rounded-lg text-left hover:bg-muted">A) To pump blood to the lungs</button>
      <button className="w-full p-4 border rounded-lg text-left hover:bg-muted">B) To act as the heart's natural pacemaker</button>
      <button className="w-full p-4 border rounded-lg text-left hover:bg-muted">C) To carry deoxygenated blood</button>
      <button className="w-full p-4 border rounded-lg text-left hover:bg-muted">D) To prevent backflow of blood</button>
    </div>
  </div>
);

// Placeholder for Session Controls
const SessionControls = () => (
  <div className="w-full bg-card p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-4">Session Controls</h3>
    <div className="space-y-4">
      <div>
        <p className="text-sm text-muted-foreground">Time Remaining</p>
        <p className="text-2xl font-bold">24:15</p>
      </div>
      <div>
        <p className="text-sm text-muted-foreground">Questions</p>
        <p className="text-2xl font-bold">12 / 50</p>
      </div>
      <button className="w-full p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
        Next Question
      </button>
      <button className="w-full p-2 border rounded-lg">End Session</button>
    </div>
  </div>
);

const StudySession = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 h-[calc(100vh-57px)]">
      {/* Main Content: Study Material */}
      <main className="flex-1 flex">
        <StudyMaterial />
      </main>

      {/* Sidebar: Session Controls */}
      <aside className="w-full md:w-72">
        <SessionControls />
      </aside>
    </div>
  );
};

export default StudySession;
