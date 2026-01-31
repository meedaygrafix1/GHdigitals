import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Academy from './components/Academy';
import Agency from './components/Agency';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Academy />
        <Agency />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;
