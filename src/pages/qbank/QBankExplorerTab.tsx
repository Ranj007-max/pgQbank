import React, { useState } from 'react';
import FilterSection from '../../components/forms/FilterSection';
import Checkbox from '../../components/forms/Checkbox';

// --- Reusable Components ---

const CollapsibleSection = ({ title, count, children }: { title: string; count: number; children?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b last:border-b-0">
      <button
        className="w-full flex justify-between items-center p-3 hover:bg-muted"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{title}</span>
        <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{count} questions</span>
            <span className={`transform transition-transform text-muted-foreground ${isOpen ? 'rotate-90' : ''}`}>▶</span>
        </div>
      </button>
      {isOpen && <div className="pl-6 py-2 bg-muted/50">{children}</div>}
    </div>
  );
};


// --- Main Tab Component ---

const QBankExplorerTab = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Left Column: Filters */}
      <aside className="w-full md:w-1/3 lg:w-1/4">
        <div className="p-4 border rounded-lg bg-card sticky top-24">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
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
           <FilterSection title="Content Type">
            <Checkbox label="Text Only" />
            <Checkbox label="With Image" />
          </FilterSection>
          <button className="w-full mt-4 p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
            Create Exam Session
          </button>
        </div>
      </aside>

      {/* Right Column: Hierarchical Summary */}
      <main className="flex-1">
         <div className="border rounded-lg bg-card overflow-hidden">
            <CollapsibleSection title="Cardiology" count={1250}>
                <CollapsibleSection title="Arrhythmias" count={300}>
                     <div className="p-3 text-sm text-muted-foreground">Final level: Browse 300 questions.</div>
                </CollapsibleSection>
                <CollapsibleSection title="Ischemic Heart Disease" count={450}>
                    <div className="p-3 text-sm text-muted-foreground">Final level: Browse 450 questions.</div>
                </CollapsibleSection>
                 <CollapsibleSection title="Valvular Disorders" count={500} />
            </CollapsibleSection>
             <CollapsibleSection title="Pulmonology" count={870} />
             <CollapsibleSection title="Neurology" count={920} />
        </div>
      </main>
    </div>
  );
};

export default QBankExplorerTab;
