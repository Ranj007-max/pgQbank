import React from 'react';
import { useLocation } from 'react-router-dom';

// A helper function to get the page title from the path
const getTitleFromPath = (path: string) => {
  if (path === '/') return 'Dashboard';
  const title = path.replace('/', '').charAt(0).toUpperCase() + path.slice(2);
  // Handle 'qbank' specifically if needed, or other multi-word titles
  if (title === 'Qbank') return 'QBank';
  return title.replace(/([A-Z])/g, ' $1').trim(); // Add spaces for camelCase paths if any
};


const Header = () => {
  const location = useLocation();
  const title = getTitleFromPath(location.pathname);

  return (
    <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="ml-auto flex items-center gap-2">
        {/* Placeholder for Command Palette */}
        <button className="p-2 border rounded-md text-sm text-muted-foreground">
          ⌘K
        </button>
        {/* Placeholder for Theme Toggle */}
        <button className="p-2 border rounded-md text-sm text-muted-foreground">
          Toggle Theme
        </button>
      </div>
    </header>
  );
};

export default Header;
