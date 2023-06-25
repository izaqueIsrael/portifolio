import React from "react";
import logo from '../images/new-logo.png';

function Navbar() {
  return (
    <nav className='navbar'>
      <img className='logo' src={logo} alt='logo' />
      <ul className='navbar__container text'>
        <li className='navbar__text'>Home</li>
        <div className="vertical-line" />
        <li className='navbar__text'>Sobre</li>
        <div className="vertical-line" />
        <li className='navbar__text'>Educação</li>
        <div className="vertical-line" />
        <li className='navbar__text'>Projetos</li>
        <div className="vertical-line" />
        <li className='navbar__text'>Contato</li>
      </ul>
    </nav>
  );
};

export default Navbar;