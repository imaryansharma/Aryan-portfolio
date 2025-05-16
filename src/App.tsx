import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LinkedInSection from './components/LinkedInSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import WorkHistoryModal from './components/modals/WorkHistoryModal';
import ResumeModal from './components/modals/ResumeModal';
import ContactModal from './components/modals/ContactModal';
import ParticlesBackground from './components/ParticlesBackground';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  const openModal = (modalId: string) => {
    setActiveModal(modalId);
  };
  
  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-x-hidden">
        <ParticlesBackground />
        
        <Navbar openModal={openModal} />
        
        <main>
          <Hero openModal={openModal} />
          <Services />
          <Skills />
          <Projects />
          <LinkedInSection />
          <Testimonials />
        </main>
        
        <Footer />
        <BackToTop />
        
        {/* Modals */}
        <WorkHistoryModal 
          isOpen={activeModal === 'workHistory'} 
          onClose={closeModal} 
        />
        
        <ResumeModal 
          isOpen={activeModal === 'resume'} 
          onClose={closeModal}
        />
        
        <ContactModal 
          isOpen={activeModal === 'contact'} 
          onClose={closeModal}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;