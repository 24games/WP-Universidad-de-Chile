import React from 'react';
import './Content.css';

const Introduction = () => {
  return (
    <section className="content-section intro-section">
      <div className="container container-narrow">
        <div className="section-header">
          <span className="section-label">Introdução</span>
          <h2 className="section-title">O Clube que Define o Futebol Chileno</h2>
        </div>
        
        <div className="content-grid">
          <div className="content-main">
            <div className="content-text">
              <p className="lead-text">
                Fundado em <strong>24 de maio de 1927</strong>, o Club Universidad de Chile 
                não é apenas um time de futebol. É uma instituição que transcende o esporte, 
                representando valores, tradição e paixão que unem milhões de chilenos.
              </p>
              
              <p>
                Conhecido carinhosamente como <strong>"La U"</strong> ou <strong>"Los Azules"</strong>, 
                o clube carrega consigo quase um século de história, conquistas memoráveis e uma 
                torcida que transforma cada jogo em uma celebração da identidade nacional chilena.
              </p>
              
              <p>
                Com <strong>18 títulos nacionais</strong> e a histórica <strong>Copa Libertadores de 2011</strong>, 
                o Universidad de Chile estabeleceu-se como o clube mais vitorioso do país, mas sua 
                grandeza vai além dos troféus: está na forma como representa o povo chileno, na 
                cultura que cria e na paixão que inspira.
              </p>
            </div>
          </div>
          
          <div className="content-sidebar">
            <div className="info-card">
              <h3 className="info-card-title">Em Números</h3>
              <ul className="info-list">
                <li>
                  <span className="info-label">Fundação</span>
                  <span className="info-value">1927</span>
                </li>
                <li>
                  <span className="info-label">Títulos Nacionais</span>
                  <span className="info-value">18</span>
                </li>
                <li>
                  <span className="info-label">Copa Libertadores</span>
                  <span className="info-value">1</span>
                </li>
                <li>
                  <span className="info-label">Torcedores</span>
                  <span className="info-value">Milhões</span>
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
