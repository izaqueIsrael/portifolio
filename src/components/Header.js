import React, { Suspense, lazy } from "react";
import Navbar from './Navbar';
import HeaderParticles from "./HeaderParticles";
import AstronautCanvas from "./Astronaut";
import AstronautModelCanvas from "./Header3DModel";
import HeaderParticlesStarFall from "./HeaderParticlesStarFall";
import astronautImg from '../images/cosmic_dance___astronaut_grooving_in_space_by_dominguez_go_dfxuauh-fullview.png'

function Header() {
  return (
    <header className="header">
      <div className="cloud">
        <Navbar />
        <div className="header__texts">

        </div>
        <div className="header__content">
          <AstronautCanvas />
          <img className="header__image" src={astronautImg} alt='astronaut' />
        </div>
        <HeaderParticles />
      </div>
    </header>
  );
}

export default Header;
