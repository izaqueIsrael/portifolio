import React, { useState, useEffect } from 'react';
import AnimatedNumbers from './AnimetedNumbers';
import StarParticles from './StarParticles';
import astronautImg from '../images/cosmic_dance___astronaut_grooving_in_space_by_dominguez_go_dfxuauh-fullview.png'
import waving from '../images/gifs/wave.gif'
import ReactTypingEffect from 'react-typing-effect';
import AnimatedText from './AnimatedText';

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
              <h1>
                <ReactTypingEffect
                  text={['Olá!', 'Seja Bem-Vindo!']}
                  speed={100}
                  eraseDelay={2000}
                  typingDelay={500}
                  cursor='_'
                  className='typing-effect text title'
                />
                <img className='wave' src={waving} alt='waving' />
              </h1>
              <div className={`text-transition ${isLoading ? 'loading' : 'loaded'}`}>
                <h2 className={`text subtitle ${isLoading ? '' : 'fade-in'}`}>
                  Izaque, Desenvedor Full Stack
                </h2>
                <p className={`text header__subtitle ${isLoading ? '' : 'fade-in'}`}>
                  Sou um desenvolvedor web entusiasmado em transformar ideias em realidade!
                </p>
              </div>
              <div className='header__contents'>
                <div className='header__numbers'>
                  <p className='text number'>+ <span className='title' ><AnimatedNumbers value={17} /></span> Projetos</p>
                  <p className='text number'>nº<span className='title'><AnimatedNumbers value={1} /></span> Code Jam</p>
                  <p className='text number'>nº<span className='title'><AnimatedNumbers value={1} /></span> Triple 10</p>
                </div>
                <AnimatedText />
              </div>
            </div>
            <img className='header__image' src={astronautImg} alt='astronaut' />
          </div>
        </div>
      </div>
      {/* <StarParticles /> */}
    </header>
  );
}

export default Header;
