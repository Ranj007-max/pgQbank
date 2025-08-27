import React from 'react';

// We would pass the MCQ data as a prop in a real implementation
const EditMCQModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-card p-6 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Edit MCQ</h2>
        {/* Placeholder form, pre-filled with MCQ data */}
        <div className="space-y-4">
            <label className="text-sm font-medium">Question</label>
            <textarea defaultValue="What is the most common cause of community-acquired pneumonia?" className="w-full p-2 border rounded-md bg-input"></textarea>
            <label className="text-sm font-medium">Options</label>
            <input type="text" defaultValue="Streptococcus pneumoniae" className="w-full p-2 border rounded-md bg-input" />
            <input type="text" defaultValue="Haemophilus influenzae" className="w-full p-2 border rounded-md bg-input" />
            <input type="text" defaultValue="Mycoplasma pneumoniae" className="w-full p-2 border rounded-md bg-input" />
            <input type="text" defaultValue="Legionella pneumophila" className="w-full p-2 border rounded-md bg-input" />
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button onClick={onClose} className="px-4 py-2 border rounded-md">Cancel</button>
          <button onClick={onClose} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default EditMCQModal;
