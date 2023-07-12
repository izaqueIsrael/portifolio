import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/new-logo.png';
import linkedin from '../images/footer-icons/linkedin.svg';
import github from '../images/footer-icons/git.png';
import whatsapp from '../images/footer-icons/whatsapp.png';

function Navbar() {
  return (
    <nav className='navbar'>
      <Link className='navbar__text' to='/'>      <img className='logo' src={logo} alt='logo' /></Link>
      <ul className='navbar__container text'>
        <li className='navbar__text'><Link className='navbar__text' to='/'>Home</Link></li>
        {/* <div className='vertical-line' />
        <li className='navbar__text'><Link className='navbar__text' to='/about'>Sobre</Link></li> */}
        <div className='vertical-line' />
        <li className='navbar__text'><Link className='navbar__text' to='/projects'>Projetos</Link></li>
        <div className='vertical-line' />
        <li className='navbar__text'><Link className='navbar__text' to='/contact'>Contato</Link></li>
      </ul>
      <ul className='navbar__icons'>
        <a className='navbar__text' href='https://www.linkedin.com/in/izaque-israel/' target='_blank' rel='noreferrer'><img className='navbar__icon' src={linkedin} alt='linkedin' /></a>
        <a className='navbar__text' href='https://github.com/izaqueIsrael' target='_blank' rel='noreferrer'><img className='icon navbar__icon' src={github} alt='github' /></a>
      </ul>
    </nav>
  );
};

export default Navbar;