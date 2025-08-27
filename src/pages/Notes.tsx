import React, { useState } from 'react';

// Placeholder data for notes
const notes = [
  {
    id: 1,
    title: 'Myocardial Infarction',
    excerpt: 'Key signs and symptoms...',
    content: '<h2>Key Signs and Symptoms of Myocardial Infarction</h2><p>Chest pain (angina), shortness of breath, sweating, and nausea...</p>',
    tags: ['Cardiology', 'Emergency'],
  },
  {
    id: 2,
    title: 'Asthma Treatment',
    excerpt: 'Overview of bronchodilators...',
    content: '<h2>Overview of Bronchodilators in Asthma Treatment</h2><p>Short-acting beta-agonists (SABAs) like albuterol are used for acute symptoms...</p>',
    tags: ['Pulmonology'],
  },
  {
    id: 3,
    title: 'Peptic Ulcer Disease',
    excerpt: 'Causes and risk factors...',
    content: '<h2>Causes and Risk Factors for Peptic Ulcer Disease</h2><p>H. pylori infection and NSAID use are the most common causes...</p>',
    tags: ['Gastroenterology'],
  },
];

const Notes = () => {
  const [selectedNote, setSelectedNote] = useState(notes[0]);

  return (
    <div className="flex h-[calc(100vh-57px)]">
      {/* Left Column: Notes List */}
      <div className="w-1/3 border-r h-full overflow-y-auto">
        <div className="p-4 border-b sticky top-0 bg-background z-10">
          <input
            type="search"
            placeholder="Search notes..."
            className="w-full p-2 border rounded-md bg-muted"
          />
        </div>
        <ul>
          {notes.map(note => (
            <li
              key={note.id}
              className={`p-4 cursor-pointer hover:bg-muted ${
                selectedNote.id === note.id ? 'bg-muted' : ''
              }`}
              onClick={() => setSelectedNote(note)}
            >
              <h3 className="font-semibold">{note.title}</h3>
              <p className="text-sm text-muted-foreground">{note.excerpt}</p>
              <div className="flex gap-2 mt-2">
                {note.tags.map(tag => (
                  <span key={tag} className="text-xs bg-secondary text-secondary-foreground rounded-full px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column: Note Content */}
      <div className="w-2/3 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4">{selectedNote.title}</h1>
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: selectedNote.content }}
        />
      </div>
    </div>
  );
};

export default Notes;
