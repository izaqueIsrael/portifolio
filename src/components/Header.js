import React, { useState, useEffect } from 'react';
import astronautImg from '../images/cosmic_dance___astronaut_grooving_in_space_by_dominguez_go_dfxuauh-fullview.png'
import waving from '../images/gifs/wave.gif'
import ReactTypingEffect from 'react-typing-effect';
import AnimatedText from './AnimatedText';
import Reveal from './Reveal';

function Header() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header id='header' className='header'>
      <div className='cloud'>
        <div className='header__container'>
          <div className='header__content'>
            <div className='header__texts'>
              <Reveal>
                <h1>
                  <ReactTypingEffect
                    text={['Olá!', 'Bem-Vindo!']}
                    speed={100}
                    eraseDelay={2000}
                    typingDelay={500}
                    cursor='_'
                    className='typing-effect typing-title'
                  />
                  <img className='wave' src={waving} alt='waving' />
                </h1>
              </Reveal>
              <Reveal>
                <div className={`text-transition ${isLoading ? 'loading' : 'loaded'}`}>
                  <h2 className={`text subtitle ${isLoading ? '' : 'fade-in'}`}>
                    Izaque, Desenvolvedor Full Stack
                  </h2>
                  <p className={`text header__subtitle ${isLoading ? '' : 'fade-in'}`}>
                    Sou um desenvolvedor web entusiasmado em transformar ideias em realidade!
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className='header__contents'>
                  <AnimatedText />
                </div>
              </Reveal>
            </div>
            <Reveal>
              <img className='header__image' src={astronautImg} alt='astronaut' />
            </Reveal>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
