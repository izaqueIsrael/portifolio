import React, { Suspense, lazy } from "react";
import Navbar from './Navbar';
import HeaderParticles from "./HeaderParticles";
import AstronautCanvas from "./Astronaut";
import AstronautModelCanvas from "./Header3DModel";

function Header() {
  return (
    <header className="header">
      <Navbar />
      {/* <AstronautCanvas /> */}
      <AstronautModelCanvas />
      <div className="header__container">
      </div>
      <HeaderParticles className="header-particles" />
    </header>
  );
}

export default Header;
