import React from 'react';
import './Content.css';

const Achievements = () => {
  return (
    <section className="content-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Conquistas</span>
          <h2 className="section-title">Títulos que Marcam a História</h2>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">18</div>
            <div className="stat-label">Campeonatos Nacionais</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">1</div>
            <div className="stat-label">Copa Libertadores</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">1</div>
            <div className="stat-label">Copa Sul-Americana</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">30+</div>
            <div className="stat-label">Títulos Oficiais</div>
          </div>
        </div>
        
        <div className="magazine-grid achievements-grid-reorganized">
          <div className="magazine-item regular">
            <div className="magazine-content">
              <div className="card-subtitle">🥇 Domínio Nacional</div>
              <h3 className="magazine-title">18 Títulos Nacionais</h3>
              <p className="magazine-text">
                Com 18 conquistas do Campeonato Chileno, o Universidad de Chile é o clube mais vitorioso 
                do país, demonstrando sua hegemonia histórica no futebol nacional.
              </p>
            </div>
          </div>
          
          <div className="magazine-item regular">
            <div className="magazine-content">
              <div className="card-subtitle">🌎 Sucesso Continental</div>
              <div className="trophy-image-container">
                <img 
                  src="https://i.pinimg.com/originals/d7/79/48/d779487eff34860adbff20c58b933559.png" 
                  alt="Copa Sul-Americana" 
                  className="trophy-image"
                />
              </div>
              <h3 className="magazine-title">Copa Sul-Americana 2011</h3>
              <p className="magazine-text">
                No mesmo ano da Libertadores, o clube também conquistou a Copa Sul-Americana, completando 
                uma temporada histórica e inesquecível.
              </p>
            </div>
          </div>
          
          <div className="magazine-item featured">
            <div className="magazine-content">
              <div className="card-subtitle">🏆 Conquista Histórica</div>
              <div className="trophy-image-container large">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7a/328-3287452_copa-libertadores-primer-trofeo-hd-png-download.png" 
                  alt="Copa Libertadores" 
                  className="trophy-image large"
                />
              </div>
              <h3 className="magazine-title">Copa Libertadores 2011</h3>
              <p className="magazine-text">
                O Universidad de Chile conquistou a Copa Libertadores em 2011, tornando-se o primeiro 
                e único clube chileno a vencer o torneio mais prestigioso da América do Sul. Esta conquista 
                histórica consolidou o clube como uma potência continental e marcou uma geração de torcedores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
