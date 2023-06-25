import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Education from './Education';
import HeaderParticles from "./HeaderParticles";

function App() {
  return (
    <main className='main'>
      <Navbar />
      <Header />
      <About />
      <Education />
      <HeaderParticles />
    </main>
  );
}

export default App;
