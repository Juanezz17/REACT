import React, { useState } from 'react';
import './barranav.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">Mi App</div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="/inicio">Inicio</a> 
        <a href="/servicios">Servicios</a>
        <a href="/contacto">Contacto</a>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'}
      </div>
    </header>
  );
};

export default Navbar;

