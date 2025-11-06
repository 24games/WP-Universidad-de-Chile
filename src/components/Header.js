import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-wrapper">
        <div className="header-content">
          <div className="header-logo-container">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPbtHd--s0EGdBYziY3nxrGJ1u8w6r4r4xA&s" 
              alt="Escudo Universidad de Chile" 
              className="header-logo"
            />
          </div>
          <div className="header-badge">Futebol Chileno</div>
          <h1 className="header-title">
            <span className="title-main">Universidad de Chile</span>
            <span className="title-sub">O Legado Azul</span>
          </h1>
          <p className="header-lead">
            A história completa do clube mais vitorioso e amado do Chile, 
            desde sua fundação até os dias atuais.
          </p>
        </div>
        <div className="header-stats">
          <div className="stat-item">
            <div className="stat-number">18</div>
            <div className="stat-label">Títulos Nacionais</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1</div>
            <div className="stat-label">Copa Libertadores</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1927</div>
            <div className="stat-label">Fundação</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
