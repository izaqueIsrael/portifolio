import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Experience from './Experience';
import StarParticles from './StarParticles';
import Popup from './Popup';
import TransitionEffect from './TransitionEffect';
import ErrorPage from './ErrorPage';
import ParticlesStarFall from './ParticlesStarFall';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <>
          <TransitionEffect />
          <Popup isOpen={isOpen} togglePopup={togglePopup} />
          <Navbar togglePopup={togglePopup} />
          <Header />
          <About />
          <Experience />
          <Education />
          <Footer />
          <StarParticles />
        </>,
      errorElement:
        <>
          <TransitionEffect />
          <Popup isOpen={isOpen} togglePopup={togglePopup} />
          <Navbar togglePopup={togglePopup} />
          <ErrorPage />
          <Footer />
          <StarParticles />
        </>
    },
    {
      path: '/projects',
      element:
        <>
          <TransitionEffect />
          <Popup isOpen={isOpen} togglePopup={togglePopup} />
          <Navbar togglePopup={togglePopup} />
          <Projects />
          <Footer />
          <StarParticles />
        </>
    },
    {
      path: '/contact',
      element:
        <>
          <TransitionEffect />
          <Popup isOpen={isOpen} togglePopup={togglePopup} />
          <Navbar togglePopup={togglePopup} />
          <Contact />
          <Footer />
          <ParticlesStarFall />
        </>
    }

  ]);

  return (
    <React.StrictMode>
      <AnimatePresence mode='wait'>
        <RouterProvider router={router} />
      </AnimatePresence>
    </React.StrictMode>
  );
}

export default App;
