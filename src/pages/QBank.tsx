import React, { useState } from 'react';
import QBankExplorerTab from './qbank/QBankExplorerTab';
import QBankLibraryTab from './qbank/QBankLibraryTab';
import AddQuestionsTab from './qbank/AddQuestionsTab';
import ImageMatchingWorkspace from './qbank/ImageMatchingWorkspace';

const tabs = ['Explorer', 'Library', 'Add Questions', 'Match Images'];

const QBank = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Explorer':
        return <QBankExplorerTab />;
      case 'Library':
        return <QBankLibraryTab />;
      case 'Add Questions':
        return <AddQuestionsTab />;
      case 'Match Images':
        return <ImageMatchingWorkspace />;
      default:
        return null;
    }
  };

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
        {renderTabContent()}
      </div>
    </div>
  );
};

export default QBank;
