import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import Earth from './Canvas/Earth';
import loadingIcon from '../images/gifs/loading.gif'
import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';
import ErrorPopup from './ErrorPopup';
import SucessPopup from './SucessPopup';

function Contact() {
  const { register, formState: { errors }, handleSubmit, setError } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [invisible, setinVisible] = useState(false);
  const [errorPopupIsOpen, setErrorPopupIsOpen] = useState(false);
  const [sucessPopupIsOpen, setSucessPopupIsOpen] = useState(false);
  const form = useRef();

  const validateEmail = (value) => {
    if (value && !isEmail(value)) {
      setError('email', {
        type: 'manual',
        message: 'Digite um endereço de e-mail válido',
      });
    }
  };

  const handleErrorPopup = () => setErrorPopupIsOpen(!errorPopupIsOpen);
  const handleSucessPopup = () => setSucessPopupIsOpen(!sucessPopupIsOpen);

  const formSubmit = (e) => {
    setinVisible(true);
    setIsLoading(true);
    emailjs.sendForm('service_mjhypug', 'template_8h1oesq', form.current, '-YCPaee9CQQGSb2SV')
      .then(() => {
        setIsLoading(false);
        form.current.reset();
        handleSucessPopup();
      })
      .catch(() => {
        setIsLoading(false);
        handleErrorPopup();
      });
  }
  return (
    <section className='projects'>
      <div className='project'>
        <div className='cards'>
          <div className='contact__container'>
            <form ref={form} className='form' onSubmit={handleSubmit(formSubmit)}>
              <h2 className='title form__title'>
                Contato
              </h2>
              <div className='form__content'>
                <label htmlFor='email' className='text'>Email</label>
                <input
                  {...register('email', {
                    required: 'O email é obrigatório',
                    validate: () => validateEmail,
                  })}
                  type='email'
                  name='email'
                  id='email'
                  className='text input'
                  placeholder='Insira seu email aqui'
                  title='Email Inválido'
                  required
                />
              </div>
              <div className='form__content'>
                <label htmlFor='nome' className='text'>Assunto</label>
                <input
                  {...register('nome', { required: true })}
                  name='nome'
                  id='nome'
                  className='text input'
                  placeholder='Insira seu assunto aqui'
                  required
                />
              </div>

              <div className='form__content'>
                <label htmlFor='mensagem' className='text'>Mensagem</label>
                <textarea
                  {...register('mensagem', { required: true })}
                  name='mensagem'
                  id='mensagem'
                  className='text input'
                  placeholder='Insira sua mensagem aqui'
                  required
                />
              </div>

              <button className='button form__button'>
                {isLoading ? <img className='button__loading' alt='loading' src={loadingIcon} /> : 'Enviar'}
              </button>
            </form>
            <div className='earth'>
              <Earth />
            </div>
          </div>
        </div>
      </div>
      <ErrorPopup
        isOpen={errorPopupIsOpen}
        togglePopup={handleErrorPopup}
      />
      <SucessPopup
        isOpen={sucessPopupIsOpen}
        togglePopup={handleSucessPopup}
      />
    </section>
  );
}

export default Contact;