import React, { useState, useEffect } from 'react';
import astronaut from '../images/colorful-astronaut-vintage-poster-galaxy-voyager-shining-astronaut-on-space-free-png.png';
import ReactTypingEffect from 'react-typing-effect';
import html from '../images/languages/HTML.svg'
import css from '../images/languages/CSS.svg'
import js from '../images/languages/JavaScript.svg';
import ts from '../images/languages/TypeScript.svg';
import reactImg from '../images/languages/React-Dark.svg';
import nodeImg from '../images/languages/NodeJS-Dark.svg';
import noSQL from '../images/languages/nosql-PhotoRoom.png-PhotoRoom.png';
import sql from '../images/languages/sql-removebg-preview.png';
import docker from '../images/languages/Docker.svg';
import aws from '../images/languages/aws.png';
import cloud from '../images/languages/google-cloud.png';

function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id='about' className='about'>
      <div className='cloud-about'>
        <div className={`about__container ${isLoading ? 'loading' : ''}`}>
          <img className='about__image' src={astronaut} alt='astronaut' />
          <div className='about__texts'>
            <h2 className='text title'>
              <ReactTypingEffect
                text={['Sobre Mim...']}
                speed={100}
                eraseDelay={2000}
                typingDelay={500}
                cursor='_'
                className='typing-effect text title'
              />
            </h2>
            <cite className='text cite about__cite'>
              'Não são as flechas, mas os arqueiros. Não são as espadas, mas os guerreiros por trás delas.' - J.R.R. Tolkien
            </cite>
            <p className='text about__text'>
              Sou um desenvolvedor web full stack que traz uma combinação única de criatividade e experiência para o mundo digital. Se você está em busca de soluções inovadoras e funcionais, você veio ao lugar certo!
            </p>
            <ul className='about__list'>
              <li><img className='about__icon' alt='html' src={html} /></li>
              <li><img className='about__icon' alt='css' src={css} /></li>
              <li><img className='about__icon' alt='javascript' src={js} /></li>
              <li><img className='about__icon' alt='typescript' src={ts} /></li>
              <li><img className='about__icon' alt='react' src={reactImg} /></li>
              <li><img className='about__icon' alt='node' src={nodeImg} /></li>
              <li><img className='about__icon' alt='docker' src={docker} /></li>
              <li><img className='about__icon' alt='noSQL' src={noSQL} /></li>
              <li><img className='about__icon' alt='SQL' src={sql} /></li>
              <li><img className='about__icon' alt='google cloud' src={cloud} /></li>
              <li><img className='about__icon' alt='aws' src={aws} /></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
