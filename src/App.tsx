import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Subjects from './pages/Subjects';
import Notes from './pages/Notes';
import QBank from './pages/QBank';
import StudySession from './pages/StudySession';
import ExamSimulator from './pages/ExamSimulator';
import StrategyCentre from './pages/StrategyCentre';
import Reports from './pages/Reports';
import Profile from './pages/Profile';
import Settings from './pages/Settings';


function App() {
  // A simple way to toggle dark mode for now
  // In a real app, this would be in a state management store
  React.useEffect(() => {
    // document.documentElement.classList.add('dark');
  }, []);

  return (
    <HashRouter>
      <div className="relative flex min-h-screen w-full">
        <Sidebar />
        <div className="flex flex-col w-full sm:pl-56">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/qbank" element={<QBank />} />
              <Route path="/study" element={<StudySession />} />
              <Route path="/exam" element={<ExamSimulator />} />
              <Route path="/strategy" element={<StrategyCentre />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
