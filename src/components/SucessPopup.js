import React from 'react';
import close from '../images/close-removebg-preview.png'
import sucess from '../images/sucess.png'

const SucessPopup = ({ isOpen, togglePopup }) => {
  return (
    <div onClick={togglePopup} className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup__content">
        <div className='popup__container'>
          <button onClick={togglePopup} className='popup__button' ><img className='popup__menu' src={close} alt='close' /></button>
        </div>
        <div className='popup__links'>
          <img className='popup__image' src={sucess} alt='sucesso' />
          <p className=' text popup__text'>Mensagem enviada com sucesso</p>
        </div>
      </div>
    </div>
  );
};

export default SucessPopup;
