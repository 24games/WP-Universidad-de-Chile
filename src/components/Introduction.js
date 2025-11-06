import React from 'react';
import './Content.css';

const Introduction = () => {
  return (
    <section className="content-section intro-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Introducción</span>
          <h2 className="section-title">El Club que Define el Fútbol Chileno</h2>
        </div>
        
        <div className="content-grid">
          <div className="content-main">
            <div className="content-text">
              <p className="lead-text">
                Fundado el <strong>24 de mayo de 1927</strong>, el Club Universidad de Chile 
                no es solo un equipo de fútbol. Es una institución que trasciende el deporte, 
                representando valores, tradición y pasión que unen a millones de chilenos.
              </p>
              
              <p>
                Conocido cariñosamente como <strong>"La U"</strong> o <strong>"Los Azules"</strong>, 
                el club lleva consigo casi un siglo de historia, logros memorables y una 
                hinchada que transforma cada partido en una celebración de la identidad nacional chilena.
              </p>
              
              <p>
                Con <strong>18 títulos nacionales</strong> y la histórica <strong>Copa Libertadores de 2011</strong>, 
                la Universidad de Chile se ha establecido como el club más exitoso del país, pero su 
                grandeza va más allá de los trofeos: está en la forma en que representa al pueblo chileno, en la 
                cultura que crea y en la pasión que inspira.
              </p>
            </div>
          </div>
          
          <div className="content-sidebar">
            <div className="info-card">
              <h3 className="info-card-title">En Cifras</h3>
              <ul className="info-list">
                <li>
                  <span className="info-label">Fundación</span>
                  <span className="info-value">1927</span>
                </li>
                <li>
                  <span className="info-label">Títulos Nacionales</span>
                  <span className="info-value">18</span>
                </li>
                <li>
                  <span className="info-label">Copa Libertadores</span>
                  <span className="info-value">1</span>
                </li>
                <li>
                  <span className="info-label">Hinchas</span>
                  <span className="info-value">Millones</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
