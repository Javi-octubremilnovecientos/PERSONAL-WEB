import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { store, RootState } from './store';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Workflow from './components/Workflow';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import { Bio } from './components/Bio';

const ThemeManager = ({ children }: { children: React.ReactNode }) => {
  const mode = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  return <>{children}</>;
};

export default function App() {
  return (
    <Provider store={store}>
      <ThemeManager>
        <div className="pt-20 pb-20 md:pb-0 min-h-screen">
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 md:px-12 py-20 space-y-20">
            <Hero />
            <div id="bio"><Bio/></div>
            <div id="projects"><Projects/></div>
            <div id="career"><Experience/></div>
            <div id="workflow"><Workflow/></div>
            <div id="contact"><Contact /></div>
          </main>
          <MobileNav />
          <Footer />
        </div>
      </ThemeManager>
    </Provider>
  );
}
