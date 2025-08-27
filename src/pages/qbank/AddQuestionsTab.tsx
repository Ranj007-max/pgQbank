import React, { useState } from 'react';

const subTabs = ['AI PDF Assistant', 'Paste Text', 'Import JSON', 'Manual Entry'];

// --- Placeholder Components for Sub-Tabs ---

const AiPdfAssistant = () => (
    <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">AI PDF Assistant (AI Feature)</h3>
        <p className="text-muted-foreground mb-4">Upload a PDF, and our AI will extract questions automatically.</p>
        <div className="border-2 border-dashed rounded-lg p-12 hover:border-primary cursor-pointer">
            <p>Drag & Drop PDF here or Click to Upload</p>
        </div>
    </div>
);

const PasteText = () => (
    <div>
        <h3 className="text-lg font-semibold mb-2">Paste Text</h3>
        <p className="text-muted-foreground mb-4">Paste MCQs as plain text. Our smart parser will attempt to structure them.</p>
        <textarea
            placeholder="Paste your questions here..."
            className="w-full h-64 p-2 border rounded-md bg-input"
        ></textarea>
    </div>
);

const ImportJson = () => (
    <div>
        <h3 className="text-lg font-semibold mb-2">Import JSON</h3>
        <p className="text-muted-foreground mb-4">Bulk import questions from a structured JSON file.</p>
        <input type="file" accept=".json" className="w-full p-2 border rounded-md" />
    </div>
);

const ManualEntry = () => (
    <div>
        <h3 className="text-lg font-semibold mb-2">Manual Entry</h3>
        <p className="text-muted-foreground mb-4">Add a single question using the form below.</p>
        <div className="space-y-4">
            <input type="text" placeholder="Question Text" className="w-full p-2 border rounded-md bg-input" />
            <input type="text" placeholder="Option 1" className="w-full p-2 border rounded-md bg-input" />
            <input type="text" placeholder="Option 2" className="w-full p-2 border rounded-md bg-input" />
            <input type="text" placeholder="Option 3 (Correct)" className="w-full p-2 border rounded-md bg-input" />
            <input type="text" placeholder="Option 4" className="w-full p-2 border rounded-md bg-input" />
            <textarea placeholder="Explanation..." className="w-full p-2 border rounded-md bg-input"></textarea>
            <button className="w-full p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">Add Question</button>
        </div>
    </div>
);


// --- Main Tab Component ---

const AddQuestionsTab = () => {
    const [activeSubTab, setActiveSubTab] = useState(subTabs[0]);

    const renderSubTabContent = () => {
        switch (activeSubTab) {
            case 'AI PDF Assistant': return <AiPdfAssistant />;
            case 'Paste Text': return <PasteText />;
            case 'Import JSON': return <ImportJson />;
            case 'Manual Entry': return <ManualEntry />;
            default: return null;
        }
    };

    return (
        <div className="bg-card p-6 rounded-lg shadow-inner max-w-4xl mx-auto">
             <div className="flex justify-center border-b mb-6">
                {subTabs.map(tab => (
                <button
                    key={tab}
                    className={`py-2 px-4 text-sm font-medium ${
                    activeSubTab === tab
                        ? 'border-b-2 border-primary text-primary'
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                    onClick={() => setActiveSubTab(tab)}
                >
                    {tab}
                </button>
                ))}
            </div>
            <div>
                {renderSubTabContent()}
            </div>
        </div>
    );
};

export default AddQuestionsTab;
