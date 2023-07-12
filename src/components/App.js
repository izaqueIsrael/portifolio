import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Experience from './Experience';
import StarParticles from './StarParticles';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <>
          <Navbar />
          <Header />
          <About />
          <Experience />
          <Education />
          <Footer />
          <StarParticles />
        </>
    },
    {
      path: '/projects',
      element:
        <>
          <Navbar />
          <Projects />
          <Footer />
        </>
    },
    {
      path: '/contact',
      element:
        <>
          <Navbar />
          <Contact />
        </>
    },
    {
      path: '/articles',
      element:
        <>
          <Navbar />
        </>
    }

  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
