import React from 'react';
import './Content.css';

const Rivalries = () => {
  return (
    <section className="content-section">
      <div className="container container-narrow">
        <div className="section-header">
          <span className="section-label">Rivalidades</span>
          <h2 className="section-title">O Superclásico Chileno</h2>
        </div>
        
        <div className="card card-with-image">
          <div className="rivalry-image-container">
            <img 
              src="https://e1.pxfuel.com/desktop-wallpaper/85/475/desktop-wallpaper-colo-colo-vs-universidad-de-chile-colo-colo.jpg" 
              alt="Superclásico Chileno - Universidad de Chile vs Colo-Colo" 
              className="rivalry-image"
            />
          </div>
          <div className="card-header">
            <div className="card-subtitle">⚔️ O Confronto Mais Aguardado</div>
            <h3 className="card-title">Universidad de Chile vs Colo-Colo</h3>
          </div>
          <div className="card-body">
            <p>
              A rivalidade entre o <strong>Universidad de Chile</strong> e o <strong>Colo-Colo</strong> 
              é considerada uma das mais intensas e apaixonadas do futebol sul-americano. Conhecido como 
              o "Superclásico Chileno", este confronto transcende o esporte, representando uma divisão 
              cultural e social que remonta a décadas de história.
            </p>
            <p>
              O Colo-Colo, fundado em 1925, e o Universidad de Chile, fundado em 1927, são os dois maiores 
              clubes do país. Cada partida entre os dois times é mais do que um simples jogo de futebol: 
              é um evento que paralisa o país, unindo e dividindo famílias, amigos e comunidades em torno 
              de suas cores e identidades.
            </p>
            <p>
              A rivalidade é marcada por momentos históricos memoráveis, jogos épicos e uma competição constante 
              pela supremacia no futebol chileno. Para os torcedores, vencer o rival não é apenas uma vitória 
              esportiva, mas uma afirmação de identidade e orgulho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rivalries;
