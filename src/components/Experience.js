import Reveal from './Reveal';
import AnimatedNumbers from './AnimetedNumbers';
import experienceImage from '../images/xp.jpg';

const Experience = () => {
  return (
    <section className='experience'>
      <div className='experience__container'>
        <div className='experience__contents'>
          <div className='experience__texts'>
            <Reveal>
              <h2 className='title'>
                Experiência
              </h2>
            </Reveal>
            <Reveal>
              <cite className='cite experience__cite'>
                "A experiência é a forja que molda a sabedoria."
              </cite>
            </Reveal>
            <div className='education__texts'>
              <div className='education__text'>
                <ul className='text education__lists'>
                  <div className='education__line' />
                  <Reveal>
                    <ul className='about__lists'>
                      <li className='education__list'>Bolsista, Compass UOL - 08/2023 - 12/2023;</li>
                      <li className='education__list'>Técnico Mecatrônico, Autônomo - 01/2021 - 08/2023;</li>
                      <li className='education__list'>Militar - Exército Brasileiro - 02/2020 - 09/2020;</li>
                      <li className='education__list'>Gerente de Operações - Nova Meriti Ótica - 01/2016 - 12/2019;</li>
                    </ul>
                  </Reveal>
                </ul>
              </div>
              <Reveal>
                <div className='header__numbers'>
                  <p className='text number'>+ <span className='title' ><AnimatedNumbers value={15} /></span> Projetos</p>
                  <p className='text number'>nº<span className='title'><AnimatedNumbers value={1} /></span> Code Jam</p>
                  <p className='text number'>nº<span className='title'><AnimatedNumbers value={1} /></span> Triple 10</p>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal>
            <img src={experienceImage} alt='astronaut' className='about__image experience__image' />
          </Reveal>
        </div>
      </div>
    </section>
  );

};

export default Experience;