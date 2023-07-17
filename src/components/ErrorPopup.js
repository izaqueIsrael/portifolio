import React from 'react';
import close from '../images/close-removebg-preview.png'
import error from '../images/error.png';

const ErrorPopup = ({ isOpen, togglePopup }) => {
  return (
    <div onClick={togglePopup} className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup__content">
        <div className='popup__container'>
          <button onClick={togglePopup} className='navbar__icon' ><img className='popup__menu' src={close} alt='close' /></button>
        </div>
        <ul className='popup__links'>
          <img className='popup__image' src={error} alt='error' />
          <p className='text popup__text'>Houve um problema com o envio de sua mensagem, tente novamente mais tarde</p>
        </ul>
      </div>
    </div>
  );
};

export default ErrorPopup;
