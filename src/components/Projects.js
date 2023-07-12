import ReactTypingEffect from 'react-typing-effect';
import arrow from '../images/scroll.png';
import card1 from '../images/cards/COSMIC.png'

function Projects() {
  return (
    <section id='projects' className='projects'>
      <div className='projects__fade'>
        <div className='projects__container'>
          <div className='cards'>
            <ReactTypingEffect
              text={['Projetos']}
              speed={100}
              eraseDelay={2000}
              typingDelay={500}
              cursor='_'
              className='typing-effect text title'
            />
            <div className='project__contents'>
              <div className='cards__container'>
                <div className='card'>
                  <div className='card__content'>
                    <img className='card__image' src={card1} alt='cosmic' />
                  </div>
                  <div className='card__texts'>
                    <h2 className='title card__title'>Cosmic</h2>
                    <div className='card__line' />
                    <h3 className='title card__subtitle'>Projeto de Portifólio</h3>
                    <p className='text card__text'>
                      Projeto explendido visando apresentação técnica
                    </p>
                    <button className='button card__button'>
                      Saiba Mais
                    </button>
                  </div>
                </div>
                <div className='card'>
                  <div className='card__content'>
                    <img className='card__image' src={card1} alt='cosmic' />
                  </div>
                  <div className='card__texts'>
                    <h2 className='title card__title'>Cosmic</h2>
                    <div className='card__line' />
                    <h3 className='title card__subtitle'>Projeto de Portifólio</h3>
                    <p className='text card__text'>
                      Projeto explendido visando apresentação técnica
                    </p>
                    <button className='button card__button'>
                      Saiba Mais
                    </button>
                  </div>
                </div>
                <div className='card'>
                  <div className='card__content'>
                    <img className='card__image' src={card1} alt='cosmic' />
                  </div>
                  <div className='card__texts'>
                    <h2 className='title card__title'>Cosmic</h2>
                    <div className='card__line' />
                    <h3 className='title card__subtitle'>Projeto de Portifólio</h3>
                    <p className='text card__text'>
                      Projeto explendido visando apresentação técnica
                    </p>
                    <button className='button card__button'>
                      Saiba Mais
                    </button>
                  </div>
                </div>
              </div>
              {/* <img className='project__image' src={image} alt='Astronaut' /> */}
            </div>
            {/* <div className='cards__container'>
              <div className='card card__cosmic'>
                <div className='card__texts'>
                  <h3 className='title card__title'>
                    Cosmic
                  </h3>
                </div>
              </div>
              <div className='card card__carnaval'>
                <div className='card__texts'>
                  <h3 className='title card__title'>
                    Carnaval Pudding
                  </h3>
                </div>
              </div>
              <div className='card card__social'>
                <div className='card__texts'>
                  <h3 className='title card__title'>
                    Around US
                  </h3>
                </div>
              </div>
              <div className='card card__web4'>
                <div className='card__texts'>
                  <h3 className='title card__title'>
                    Around US Vanilla
                  </h3>
                </div>
              </div>
              <div className='card card__express'>
                <div className='card__texts'>
                  <h3 className='title card__title'>
                    Around Express
                  </h3>
                </div>
              </div>
              <div className='card card__web3'>
                <div className='card__texts'>
                  <h3 className='title card__title'>
                    Lading Page
                  </h3>
                </div>
              </div>
            </div>
            <div className='education__image'>

            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;