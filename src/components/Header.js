import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-badge">🏆 Clube Mais Vitorioso do Chile</div>
        <h1 className="header-title">Tudo sobre o Universidad de Chile</h1>
        <p className="header-subtitle">História, Conquistas e Cultura do Clube Azul</p>
        <div className="header-divider"></div>
        <p className="header-description">Descubra a trajetória do clube que conquistou o coração de milhões de chilenos</p>
      </div>
    </header>
  );
};

export default Header;

