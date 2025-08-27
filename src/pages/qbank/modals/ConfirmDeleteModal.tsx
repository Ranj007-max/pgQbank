import React from 'react';

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm }: { isOpen: boolean; onClose: () => void; onConfirm: () => void; }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-card p-6 rounded-lg shadow-xl w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
        <p className="text-muted-foreground mb-6">
          This action cannot be undone. This will permanently delete the question from the question bank.
        </p>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 border rounded-md">Cancel</button>
          <button onClick={onConfirm} className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
