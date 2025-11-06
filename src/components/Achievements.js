import React from 'react';
import './Content.css';

const Achievements = () => {
  return (
    <section className="content-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Logros</span>
          <h2 className="section-title">Títulos que Marcan la Historia</h2>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">18</div>
            <div className="stat-label">Campeonatos Nacionales</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">1</div>
            <div className="stat-label">Copa Libertadores</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">1</div>
            <div className="stat-label">Copa Sudamericana</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">30+</div>
            <div className="stat-label">Títulos Oficiales</div>
          </div>
        </div>
        
        <div className="magazine-grid achievements-grid-reorganized">
          <div className="magazine-item regular">
            <div className="magazine-content">
              <div className="card-subtitle">🥇 Dominio Nacional</div>
              <h3 className="magazine-title">18 Títulos Nacionales</h3>
              <p className="magazine-text">
                Con 18 conquistas del Campeonato Chileno, la Universidad de Chile es el club más exitoso 
                del país, demostrando su hegemonía histórica en el fútbol nacional.
              </p>
            </div>
          </div>
          
          <div className="magazine-item regular">
            <div className="magazine-content trophy-card">
              <div className="trophy-card-left">
                <div className="trophy-image-container">
                  <img 
                    src="https://i.pinimg.com/originals/d7/79/48/d779487eff34860adbff20c58b933559.png" 
                    alt="Copa Sudamericana" 
                    className="trophy-image"
                  />
                </div>
              </div>
              <div className="trophy-card-right">
                <div className="card-subtitle">🌎 Éxito Continental</div>
                <h3 className="magazine-title">Copa Sudamericana 2011</h3>
                <p className="magazine-text">
                  En el mismo año de la Libertadores, el club también conquistó la Copa Sudamericana, completando 
                  una temporada histórica e inolvidable.
                </p>
              </div>
            </div>
          </div>
          
          <div className="magazine-item featured">
            <div className="magazine-content trophy-card">
              <div className="trophy-card-left">
                <div className="trophy-image-container large">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/328-3287452_copa-libertadores-primer-trofeo-hd-png-download.png" 
                    alt="Copa Libertadores" 
                    className="trophy-image large"
                  />
                </div>
              </div>
              <div className="trophy-card-right">
                <div className="card-subtitle">🏆 Logro Histórico</div>
                <h3 className="magazine-title">Copa Libertadores 2011</h3>
                <p className="magazine-text">
                  La Universidad de Chile conquistó la Copa Libertadores en 2011, convirtiéndose en el primer 
                  y único club chileno en vencer el torneo más prestigioso de América del Sur. Este logro 
                  histórico consolidó al club como una potencia continental y marcó a una generación de hinchas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
