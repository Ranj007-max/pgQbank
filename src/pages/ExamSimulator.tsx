import React from 'react';

// Placeholder for an Exam Question
const ExamQuestion = () => (
  <div className="bg-card p-8 rounded-lg shadow-md flex-1">
    <p className="text-sm text-muted-foreground mb-2">Question 12 of 120</p>
    <h2 className="text-xl font-semibold mb-4">A 55-year-old male presents with crushing chest pain...</h2>
    <div className="space-y-3">
      <label className="flex items-center p-3 border rounded-lg hover:bg-muted cursor-pointer">
        <input type="radio" name="option" className="mr-3" />
        <span>A) Acute pericarditis</span>
      </label>
      <label className="flex items-center p-3 border rounded-lg hover:bg-muted cursor-pointer">
        <input type="radio" name="option" className="mr-3" />
        <span>B) Myocardial infarction</span>
      </label>
      <label className="flex items-center p-3 border rounded-lg hover:bg-muted cursor-pointer">
        <input type="radio" name="option" className="mr-3" />
        <span>C) Aortic dissection</span>
      </label>
      <label className="flex items-center p-3 border rounded-lg hover:bg-muted cursor-pointer">
        <input type="radio" name="option" className="mr-3" />
        <span>D) Pulmonary embolism</span>
      </label>
    </div>
    <div className="mt-6 flex justify-between">
      <button className="px-4 py-2 border rounded-lg">Previous</button>
      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">Next</button>
    </div>
  </div>
);

// Placeholder for Exam Sidebar
const ExamSidebar = () => (
  <div className="w-full bg-card p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-4">Exam Details</h3>
    <div className="space-y-4">
      <div>
        <p className="text-sm text-muted-foreground">Time Remaining</p>
        <p className="text-3xl font-bold text-red-500">01:34:22</p>
      </div>
       <div>
        <p className="text-sm text-muted-foreground mb-2">Question Grid</p>
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 24 }).map((_, i) => (
            <button
              key={i}
              className={`h-8 w-8 rounded-md text-xs ${
                i < 11 ? 'bg-primary/20' : 'border'
              } ${ i === 11 ? 'bg-primary text-primary-foreground' : ''}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <button className="w-full p-2 mt-4 bg-red-600 text-white rounded-lg hover:bg-red-700">
        End Exam
      </button>
    </div>
  </div>
);

const ExamSimulator = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 h-[calc(100vh-57px)]">
      {/* Main Content: Exam Question */}
      <main className="flex-1 flex">
        <ExamQuestion />
      </main>

      {/* Sidebar: Exam Navigation & Timer */}
      <aside className="w-full md:w-80">
        <ExamSidebar />
      </aside>
    </div>
  );
};

export default ExamSimulator;
