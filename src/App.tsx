import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
        <div className="max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar scrollY={scrollY} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Resume />
            <Hobbies />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;