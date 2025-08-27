import React from 'react';

// Placeholder for a form input component
const InputField = ({ label, type, value, placeholder }: { label: string; type: string; value: string; placeholder?: string }) => (
  <div>
    <label className="block text-sm font-medium text-muted-foreground mb-1">{label}</label>
    <input
      type={type}
      defaultValue={value}
      placeholder={placeholder}
      className="w-full p-2 border rounded-md bg-input"
    />
  </div>
);

const Profile = () => {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-6 mb-8">
        <img
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            alt="User Avatar"
            className="w-24 h-24 rounded-full"
        />
        <div>
            <h1 className="text-3xl font-bold">Alex Doe</h1>
            <p className="text-muted-foreground">alex.doe@example.com</p>
        </div>
      </div>

      <div className="bg-card p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
        <div className="space-y-4">
          <InputField label="Full Name" type="text" value="Alex Doe" />
          <InputField label="Email Address" type="email" value="alex.doe@example.com" />
          <InputField label="Medical School" type="text" value="University of Knowledge" />
          <InputField label="Year of Graduation" type="text" value="2025" />
          <button className="w-full p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
