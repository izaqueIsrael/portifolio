import { useRef, useState } from 'react';
import Footer from './Footer';
import emailjs from '@emailjs/browser'
import Earth from './Canvas/Earth';
import loadingIcon from '../images/gifs/loading.gif'
import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';

function Contact() {
  const { register, formState: { errors }, handleSubmit, setError } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [sendStatus, setSendStatus] = useState(false);
  const [invisible, setinVisible] = useState(false);
  const form = useRef();

  const validateEmail = (value) => {
    if (value && !isEmail(value)) {
      setError('email', {
        type: 'manual',
        message: 'Digite um endereço de e-mail válido',
      });
    }
  };

  const formSubmit = (e) => {
    setinVisible(true);
    setIsLoading(true);
    emailjs.sendForm('service_mjhypug', 'template_8h1oesq', form.current, '-YCPaee9CQQGSb2SV')
      .then(() => {
        setSendStatus(false);
        setIsLoading(false);
        form.current.reset();
      })
      .catch(() => {
        setIsLoading(false);
        setSendStatus(false);
      });
  }
  return (
    <section id='contact' className='contact'>
      <div className='contact__fade'>
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
            <p className={`text form__messager ${!sendStatus ? 'form__messeger_good' : 'form__messeger_bad'} ${!invisible && 'form__messeger_invisible'}`}>
              {!sendStatus ? 'Email enviado com sucesso :)' : 'Houve um problema no envio :('}
            </p>
          </form>
          <div className='earth'>
            <Earth />
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default Contact;