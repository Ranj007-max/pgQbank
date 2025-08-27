import React from 'react';

// Placeholder for a toggle switch component
const ToggleSwitch = ({ label, description, enabled }: { label: string; description: string; enabled: boolean; }) => (
  <div className="flex items-center justify-between">
    <div>
      <h4 className="font-medium">{label}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    <button className={`w-12 h-6 rounded-full p-1 transition-colors ${enabled ? 'bg-primary' : 'bg-muted'}`}>
      <span className={`block w-4 h-4 rounded-full bg-background transform transition-transform ${enabled ? 'translate-x-6' : ''}`}></span>
    </button>
  </div>
);

// Placeholder for a settings card
const SettingsCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-card p-6 rounded-lg shadow-md mb-6">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="space-y-4">
      {children}
    </div>
  </div>
);


const Settings = () => {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <SettingsCard title="Appearance">
        <ToggleSwitch label="Dark Mode" description="Enable or disable dark theme" enabled={true} />
      </SettingsCard>

      <SettingsCard title="Notifications">
        <ToggleSwitch label="Email Notifications" description="Receive summaries and alerts via email" enabled={true} />
        <ToggleSwitch label="Push Notifications" description="Get real-time alerts on your devices" enabled={false} />
      </SettingsCard>

      <SettingsCard title="Data Management">
        <button className="w-full p-2 border border-destructive text-destructive rounded-lg hover:bg-destructive/10">
          Clear All Study Data
        </button>
      </SettingsCard>
    </div>
  );
};

export default Settings;
