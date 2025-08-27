import React from 'react';

const Checkbox = ({ label, count }: { label: string; count?: number }) => (
  <label className="flex items-center space-x-2 cursor-pointer">
    <input type="checkbox" className="rounded" />
    <span className="text-sm">{label}</span>
    {count !== undefined && <span className="text-xs text-muted-foreground">({count})</span>}
  </label>
);

export default Checkbox;
