import Rocket from './Canvas/Rocket'
import Reveal from './Reveal';
import unicesumar from '../images/unicesumar-removebg-preview.png';
import alura from '../images/alura-removebg-preview.png';
import triple10 from '../images/triple10-removebg-preview.png';
import etrr from '../images/ETRR-removebg-preview.png';
import freeCode from '../images/FREECODE.svg'

function Education() {
  return (
    <section className='education'>
      <div className='education__container'>
        <div className='education__content'>
          <Reveal>
            <h2 className='title education__title'>
              Formações
            </h2>
          </Reveal>
          <Reveal>
            <cite className='cite'>
              'Knowledge is power', Francis Bacon
            </cite>
          </Reveal>
          <div className='education__texts'>
            <div className='education__text'>
              <ul className='text education__lists'>
                <div className='education__line' />
                <Reveal>
                  <ul className='about__lists'>
                    <li className='education__list'>Engenharia de Software - Unicesumar - 01.2025;</li>
                    <li className='education__list'>Full Stack Developer - Triple 10 - Concluído;</li>
                    <li className='education__list'>Técnico em Mecatrônica - ETRR - Concluído;</li>
                    <li className='education__list'>Web Designer - FreeCodeCamp - Concluído;</li>
                    <li className='education__list'>Git e Github - Alura - Concluído;</li>
                    <li className='education__list'>Inglês - CNA - Intermediário;</li>
                  </ul>
                </Reveal>
              </ul>
            </div>
            <Reveal>
              <ul className='education__icons'>
                <li><img className='education__icon' src={unicesumar} alt='Unicesumar' /></li>
                <li><img className='education__icon' src={triple10} alt='Triple10' /></li>
                <li><img className='education__icon' src={alura} alt='Alura' /></li>
                <li><img className='education__icon icon' src={freeCode} alt='FreeCodeCamp' /></li>
                <li><img className='education__icon' src={etrr} alt='Etrr' /></li>
              </ul>
            </Reveal>
          </div>
        </div>
        <Reveal>
          <div className='planet'>
            <Rocket />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Education;