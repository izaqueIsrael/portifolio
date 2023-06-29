import ReactTypingEffect from 'react-typing-effect';
import Earth from './Canvas/Earth';

function Contact() {
  return (
    <section className='contact'>
      <div className="contact__fade">
        <ReactTypingEffect
          text={['Contato']}
          speed={100}
          eraseDelay={2000}
          typingDelay={500}
          cursor="_"
          className="typing-effect text title"
        />
        <div className='contact__container'>
          <div className='form'>

          </div>
          <div className='earth'>
            <Earth />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;