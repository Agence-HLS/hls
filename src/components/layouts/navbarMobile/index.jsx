"use client"


import {bubble as Menu} from "react-burger-menu"


const NavbarMobile = () => {
  return (
    <header className="flex lg:hidden">
      <nav>
      <Menu>

        <a id="Accueil" className="menu-item" href="/">Home</a>
        <a id="NotreEntrepise" className="menu-item" href="/">Home</a>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>

      </Menu>
      </nav>
    </header>
  );
};

export default NavbarMobile;
