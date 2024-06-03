'use client';

import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import LoadingScreen from './components/LoadingScreen';
import { TechSection } from './components/TechSection';
import { EmailSection } from './components/EmailSection';
import { Footer } from './components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Check if the document is already loaded
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      // Add event listener for page load
      window.addEventListener('load', handleLoad);

      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <TechSection />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
