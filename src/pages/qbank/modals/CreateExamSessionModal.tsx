import React from 'react';

const CreateExamSessionModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-card p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Create Exam Session</h2>
        <p className="text-muted-foreground mb-4">Configure your practice exam session.</p>
        {/* Placeholder form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Number of Questions</label>
            <input type="number" defaultValue="50" className="w-full p-2 border rounded-md bg-input" />
          </div>
          <div>
            <label className="block text-sm font-medium">Timer (minutes)</label>
            <input type="number" defaultValue="60" className="w-full p-2 border rounded-md bg-input" />
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button onClick={onClose} className="px-4 py-2 border rounded-md">Cancel</button>
          <button onClick={onClose} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">Start Session</button>
        </div>
      </div>
    </div>
  );
};

export default CreateExamSessionModal;
