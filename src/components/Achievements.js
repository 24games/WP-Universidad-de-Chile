import React from 'react';
import './Section.css';

const Achievements = () => {
  return (
    <section className="section achievements">
      <div className="section-container">
        <h2 className="section-title">Principais Conquistas</h2>
        <div className="section-content">
          <div className="achievements-grid">
            <div className="achievement-item">
              <h3 className="achievement-title">🏆 Copa Libertadores da América</h3>
              <p className="achievement-description">
                <strong>2011</strong> - O Universidad de Chile conquistou a Copa Libertadores, tornando-se o primeiro e único clube chileno 
                a vencer o torneio mais prestigioso da América do Sul. Esta conquista histórica consolidou o clube como uma potência continental.
              </p>
            </div>
            <div className="achievement-item">
              <h3 className="achievement-title">🥇 Campeonato Chileno (Primera División)</h3>
              <p className="achievement-description">
                <strong>18 títulos nacionais</strong> - O Universidad de Chile é o clube mais vitorioso do Campeonato Chileno, com 18 conquistas 
                da Primera División, demonstrando sua dominância histórica no futebol nacional.
              </p>
            </div>
            <div className="achievement-item">
              <h3 className="achievement-title">🌎 Copa Sul-Americana</h3>
              <p className="achievement-description">
                <strong>2011</strong> - No mesmo ano da Libertadores, o clube também conquistou a Copa Sul-Americana, completando uma temporada 
                histórica e inesquecível para os torcedores.
              </p>
            </div>
            <div className="achievement-item">
              <h3 className="achievement-title">🏅 Outros Títulos Nacionais</h3>
              <p className="achievement-description">
                Além dos campeonatos nacionais, o clube possui diversos títulos de copas nacionais e torneios regionais, consolidando sua 
                hegemonia no futebol chileno ao longo de quase um século de história.
              </p>
            </div>
          </div>
          <p className="section-text highlight">
            Com mais de <strong>30 títulos oficiais</strong> em sua história, o Universidad de Chile é, sem dúvida, o clube mais vitorioso 
            e bem-sucedido do futebol chileno, representando um legado de excelência e conquistas que inspira gerações de torcedores.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

