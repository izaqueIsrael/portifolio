import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import HeaderParticles from "./HeaderParticles";
import Contact from './Contact';

function App() {
  return (
    <main className='main'>
      <Navbar />
      <Header />
      <About />
      <Education />
      <Projects />
      <Contact />
      <HeaderParticles />
    </main>
  );
}

export default App;
