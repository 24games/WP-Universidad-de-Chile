import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-wrapper">
        <div className="header-content">
            <div className="header-text-content">
            <div className="header-badge">Fútbol Chileno</div>
            <div className="header-title-container">
              <h1 className="header-title">
                <span className="title-main">Universidad de Chile</span>
                <span className="title-sub">El Legado Azul</span>
              </h1>
              <div className="header-logo-container">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Emblema_del_Club_Universidad_de_Chile.png" 
                  alt="Escudo Universidad de Chile" 
                  className="header-logo"
                />
              </div>
            </div>
            <p className="header-lead">
              La historia completa del club más exitoso y querido de Chile, 
              desde su fundación hasta la actualidad.
            </p>
          </div>
        </div>
        <div className="header-stats">
          <div className="stat-item">
            <div className="stat-number">18</div>
            <div className="stat-label">Títulos Nacionales</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1</div>
            <div className="stat-label">Copa Libertadores</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1927</div>
            <div className="stat-label">Fundación</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
