import Rocket from './Canvas/Rocket'
import arrow from '../images/scroll.png';

function Education() {
  return (
    <section className="education">
      <div className="education__fade">
        <div className='education__container'>
          <div className='education__contents'>
            <div className='planet'>
              <Rocket />
            </div>
            <div className='education__content'>
              <h2>Formações</h2>
            </div>
          </div>
        </div>
      </div>
      <img className="scroll" src={arrow} alt='vá para baixo' />
    </section>
  );
};

export default Education;