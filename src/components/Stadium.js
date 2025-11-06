import React from 'react';
import './Content.css';

const Stadium = () => {
  return (
    <section className="content-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Estádio</span>
          <h2 className="section-title">O Templo do Futebol Chileno</h2>
        </div>
        
        <div className="content-grid">
          <div className="content-main">
            <div className="content-text">
              <p className="lead-text">
                O <strong>Estádio Nacional de Chile</strong>, localizado em Santiago, é a casa do Universidad 
                de Chile e um dos estádios mais emblemáticos e históricos da América do Sul.
              </p>
              
              <p>
                Inaugurado em <strong>1938</strong>, o estádio tem uma capacidade de aproximadamente 
                <strong> 48.000 espectadores</strong> e é palco de momentos inesquecíveis da história do 
                futebol chileno. Foi neste estádio que o Universidad de Chile conquistou alguns de seus 
                títulos mais importantes, incluindo a histórica Copa Libertadores de 2011.
              </p>
              
              <p>
                A atmosfera durante os jogos do "La U" é eletrizante, com a torcida criando um ambiente 
                único e apaixonado que inspira os jogadores e impressiona os visitantes. Além de sediar 
                jogos do Universidad de Chile, o Estádio Nacional também foi palco de eventos históricos, 
                incluindo a Copa do Mundo de 1962.
              </p>
              
              <p>
                Para os torcedores do Universidad de Chile, o Estádio Nacional é mais do que um estádio: 
                é um lugar sagrado onde memórias são criadas, sonhos são realizados e a paixão pelo clube 
                se manifesta em sua forma mais pura e intensa.
              </p>
            </div>
          </div>
          
          <div className="content-sidebar">
            <div className="info-card">
              <h3 className="info-card-title">Estádio Nacional</h3>
              <ul className="info-list">
                <li>
                  <span className="info-label">Inauguração</span>
                  <span className="info-value">1938</span>
                </li>
                <li>
                  <span className="info-label">Capacidade</span>
                  <span className="info-value">48.000</span>
                </li>
                <li>
                  <span className="info-label">Localização</span>
                  <span className="info-value">Santiago</span>
                </li>
                <li>
                  <span className="info-label">Eventos</span>
                  <span className="info-value">Copa 1962</span>
                </li>
              </ul>
            </div>
            
            <div className="card" style={{ marginTop: 'var(--space-6)' }}>
              <div className="card-body">
                <p style={{ fontSize: '15px', color: 'var(--gray-600)', fontStyle: 'italic' }}>
                  "O Estádio Nacional não é apenas um local de jogos, mas um verdadeiro templo do futebol chileno."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stadium;
