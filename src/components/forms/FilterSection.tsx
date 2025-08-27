import React from 'react';

const FilterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-6">
    <h3 className="font-semibold mb-2">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
);

export default FilterSection;
