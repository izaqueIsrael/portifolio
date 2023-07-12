import ReactTypingEffect from 'react-typing-effect';
import experienceImage from '../images/xp.jpg';

const Experience = () => {
  return (
    <section className='experience'>
      <div className='experience__container'>
        <div className='experience__contents'>
          <div className='experience__texts'>
            <ReactTypingEffect
              text={['Experiência']}
              speed={100}
              eraseDelay={2000}
              typingDelay={500}
              cursor='_'
              className='typing-effect text title'
            />
            <cite className='cite experience__cite'>
              "A experiência é a forja que molda a sabedoria."
            </cite>
            <div className='education__texts'>
              <div className='education__text'>
                <ul className='text education__lists'>
                  <div className='education__line' />
                  <div>
                    <li className='education__list'>Engenharia de Software - Unicesumar - 01.2025;</li>
                    <li className='education__list'>Full Stack Developer - Triple 10 - Concluído;</li>
                    <li className='education__list'>Técnico em Mecatrônica - ETRR - Concluído;</li>
                    <li className='education__list'>Web Designer - FreeCodeCamp - Concluído;</li>
                    <li className='education__list'>Git e Github - Alura - Concluído;</li>
                    <li className='education__list'>Inglês - CNA - Intermediário;</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <img src={experienceImage} alt='astronaut' className='about__image' />
        </div>
      </div>
    </section>
  );

};

export default Experience;