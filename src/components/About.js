import React from 'react';
import astronaut from '../images/colorful-astronaut-vintage-poster-galaxy-voyager-shining-astronaut-on-space-free-png.png';
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
import Reveal from './Reveal';
import git from '../images/languages/Git-2.svg';
import figma from '../images/languages/Figma-Dark.svg';
import azure from '../images/languages/azure-original.svg';

function About() {
  return (
    <section id='about' className='about'>
      <div className='about__cloud'>
        <div className='about__container'>
          <Reveal>
            <img className='about__image' src={astronaut} alt='astronaut' />
          </Reveal>
          <div className='about__texts'>
            <Reveal>
              <h2 className='title'>
                Sobre Mim...
              </h2>
              <cite className='text cite about__cite'>
                'Não são as flechas, mas os arqueiros. Não são as espadas, mas os guerreiros por trás delas.' - J.R.R. Tolkien
              </cite>
              <p className='text about__text'>
                Sou um desenvolvedor web full stack que traz uma combinação única de criatividade e experiência para o mundo digital. Se você está em busca de soluções inovadoras e funcionais, você veio ao lugar certo!
              </p>
            </Reveal>
            <Reveal>
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
                <li><img className='about__icon' alt='git' src={git} /></li>
                <li><img className='about__icon' alt='figma' src={figma} /></li>
                <li><img className='about__icon' alt='google cloud' src={cloud} /></li>
                <li><img className='about__icon' alt='aws' src={aws} /></li>
                <li><img className='about__icon' alt='azure' src={azure} /></li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
