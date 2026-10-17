import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { AwsShowcase } from './components/AwsShowcase';
import { Projects } from './components/Projects';
import { PipelineSimulator } from './components/PipelineSimulator';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-[#F9FAFB] font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
        />
        
        <About />

        <Skills />

        <AwsShowcase />

        <Projects />

        <PipelineSimulator />

        <Experience />

        <Certifications />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Official Printable Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
