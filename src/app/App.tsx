import React from 'react';
import { ThemeProvider } from '@/app/contexts/ThemeContext';
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Stats from '@/app/components/Stats';
import Skills from '@/app/components/Skills';
import Experience from '@/app/components/Experience';
import Projects from '@/app/components/Projects';
import Education from '@/app/components/Education';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import ScrollToTop from '@/app/components/ScrollToTop';
import LoadingScreen from '@/app/components/LoadingScreen';
import SEOHead from '@/app/components/SEOHead';
import { AnimatePresence } from 'motion/react';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <SEOHead />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div key="content" className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <Header />
            <main>
              <Hero />
              <About />
              <Stats />
              <Skills />
              <Experience />
              <Projects />
              <Education />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;