import React from 'react';

interface LaunchpadCardProps {
  title: string;
  description: string;
  icon: string;
}

const LaunchpadCard: React.FC<LaunchpadCardProps> = ({ title, description, icon }) => {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-lg font-semibold">{icon} {title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default LaunchpadCard;
