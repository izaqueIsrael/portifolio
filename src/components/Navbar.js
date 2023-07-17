import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/new-logo.png';
import linkedin from '../images/footer-icons/linkedin.svg';
import github from '../images/footer-icons/git.png';
import menu from '../images/menu-removebg-preview.png';

function Navbar({ togglePopup }) {
  const [navbarClass, setNavbarClass] = useState('navbar transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setNavbarClass('navbar black');
      } else {
        setNavbarClass('navbar transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={navbarClass}>
      <Link className='navbar__text' to='/'><img className='logo' src={logo} alt='logo' /></Link>
      <ul className='navbar__container text'>
        <li className='navbar__text'><Link className='navbar__text' to='/'>Home</Link></li>
        <div className='vertical-line' />
        <li className='navbar__text'><Link className='navbar__text' to='/projects'>Projetos</Link></li>
        <div className='vertical-line' />
        <li className='navbar__text'><Link className='navbar__text' to='/contact'>Contato</Link></li>
      </ul>
      <ul className='navbar__icons'>
        <a className='navbar__text' href='https://www.linkedin.com/in/izaque-israel/' target='_blank' rel='noreferrer'><img className='navbar__icon' src={linkedin} alt='linkedin' /></a>
        <a className='navbar__text' href='https://github.com/izaqueIsrael' target='_blank' rel='noreferrer'><img className='icon navbar__icon' src={github} alt='github' /></a>
      </ul>
      <button onClick={togglePopup} className='navbar__button'><img className='navbar__menu' src={menu} alt='menu' /></button>
    </nav>
  );
};

export default Navbar;