import React from "react";

function Navbar() {
  return (
    <nav className='navbar'>
      <h2 className='logo text'>LOGO</h2>
      <ul className='navbar__container text'>
        <li>Primeiro</li>
        <li>Segundo</li>
        <li>Terceiro</li>
      </ul>
    </nav>
  );
};

export default Navbar;