import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Dashboard', icon: '🏠' },
  { path: '/subjects', label: 'Subjects', icon: '📚' },
  { path: '/notes', label: 'Notes', icon: '📝' },
  { path: '/qbank', label: 'QBank', icon: '❓' },
  { path: '/study', label: 'Study Session', icon: '🎯' },
  { path: '/exam', label: 'Exam Simulator', icon: '⏱️' },
  { path: '/strategy', label: 'Strategy Centre', icon: '🧭' },
  { path: '/reports', label: 'Reports', icon: '📊' },
  { path: '/profile', label: 'Profile', icon: '👤' },
  { path: '/settings', label: 'Settings', icon: '⚙️' },
];

const Sidebar = () => {
  const baseLinkClass = "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary";
  const activeLinkClass = "text-primary bg-muted";
  const inactiveLinkClass = "text-muted-foreground";

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-56 flex-col border-r bg-background sm:flex">
      <div className="flex h-[60px] items-center border-b px-6">
        <a href="/" className="flex items-center gap-2 font-semibold">
          <span role="img" aria-label="brain">🧠</span>
          <span>PgQbank</span>
        </a>
      </div>
      <nav className="flex-1 overflow-auto p-4">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end // Use 'end' for the Dashboard route to avoid matching all routes
                className={({ isActive }) =>
                  `${baseLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`
                }
              >
                <span className="w-6">{item.icon}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
