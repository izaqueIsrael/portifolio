import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/new-logo.png';
import linkedin from '../images/footer-icons/linkedin.png';
import github from '../images/footer-icons/git.png';
import menu from '../images/menu-removebg-preview.png';

function Navbar({ togglePopup }) {
  const [navbarClass, setNavbarClass] = useState('text navbar__container transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setNavbarClass('text navbar__container black');
      } else {
        setNavbarClass('text navbar__container transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className='navbar'>
      <Link className='navbar__text' to='/'><img className='logo' src={logo} alt='logo' /></Link>
      <ul className={navbarClass}>
        <li className='navbar__content'><Link className='navbar__text' to='/'>Home</Link></li>
        <div className='vertical-line' />
        <li className='navbar__content'><Link className='navbar__text' to='/projects'>Projetos</Link></li>
        <div className='vertical-line' />
        <li className='navbar__content'><Link className='navbar__text' to='/contact'>Contato</Link></li>
      </ul>
      <ul className='navbar__icons'>
        <a className='navbar__text' href='https://www.linkedin.com/in/izaque-israel/' target='_blank' rel='noreferrer'><img className='icon navbar__icon' src={linkedin} alt='linkedin' /></a>
        <a className='navbar__text' href='https://github.com/izaqueIsrael' target='_blank' rel='noreferrer'><img className='icon navbar__icon' src={github} alt='github' /></a>
      </ul>
      <button onClick={togglePopup} className='navbar__button'><img className='navbar__menu' src={menu} alt='menu' /></button>
    </nav>
  );
};

export default Navbar;