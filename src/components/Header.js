import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import HeaderParticles from "./HeaderParticles";
import astronautImg from '../images/cosmic_dance___astronaut_grooving_in_space_by_dominguez_go_dfxuauh-fullview.png'
import waving from '../images/gifs/wave.gif'
import ReactTypingEffect from 'react-typing-effect';
import arrow from '../images/scroll.png';

function Header() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="header">
      <div className="cloud">
        <div className='header__container'>
          <Navbar />
          <div className="header__content">
            <div className="header__texts">
              <h1>
                <ReactTypingEffect
                  text={["Olá, eu sou Izaque!"]}
                  speed={100}
                  eraseDelay={2000}
                  typingDelay={500}
                  cursor="_"
                  className="typing-effect text title"
                />
                <img className="wave" src={waving} alt='waving' />
              </h1>
              <div className={`text-transition ${isLoading ? 'loading' : 'loaded'}`}>
                <h2 className={`text subtitle ${isLoading ? '' : 'fade-in'}`}>
                  Desenvedor Full Stack
                </h2>
                <p className={`text header__subtitle ${isLoading ? '' : 'fade-in'}`}>
                  Sou um desenvolvedor web entusiasmado em transformar ideias em realidade!
                </p>
              </div>
            </div>
            <img className="header__image" src={astronautImg} alt='astronaut' />
          </div>
          <img className="header__scroll" src={arrow} alt='vá para baixo' />
          <HeaderParticles />
        </div>
      </div>
    </header>
  );
}

export default Header;
