import React from 'react';
import { Link } from 'react-router-dom';
import close from '../images/close-removebg-preview.png'
import linkedin from '../images/footer-icons/linkedin.png';
import github from '../images/footer-icons/git.png';

const Popup = ({ isOpen, togglePopup }) => {
  return (
    <div onClick={togglePopup} className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup__content">
        <div className='popup__container'>
          <button onClick={togglePopup} className='popup__button' ><img className='popup__menu' src={close} alt='close' /></button>
        </div>
        <ul className='popup__links text'>
          <li className='text popup__text'><Link className='popup__text' to='/'>Home</Link></li>
          <li className='text popup__text'><Link className='popup__text' to='/projects'>Projetos</Link></li>
          <li className='text popup__text'><Link className='popup__text' to='/contact'>Contato</Link></li>
        </ul>
        <ul className='popup__icons'>
          <a className='popup__text' href='https://www.linkedin.com/in/izaque-israel/' target='_blank' rel='noreferrer'><img className='navbar__icon' src={linkedin} alt='linkedin' /></a>
          <a className='popup__text' href='https://github.com/izaqueIsrael' target='_blank' rel='noreferrer'><img className='icon navbar__icon' src={github} alt='github' /></a>
        </ul>
      </div>
    </div>
  );
};

export default Popup;
