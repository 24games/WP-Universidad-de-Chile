import React from 'react';
import './Content.css';

const History = () => {
  return (
    <section className="content-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">História</span>
          <h2 className="section-title">Uma Jornada de Glórias e Tradição</h2>
        </div>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">1927</div>
            <div className="timeline-content">
              <strong>Fundação</strong> - Um grupo de estudantes e funcionários da Universidade do Chile 
              cria o clube, estabelecendo os valores de educação e excelência que marcaram sua identidade.
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">1940</div>
            <div className="timeline-content">
              <strong>Primeiro Título Nacional</strong> - O clube conquista seu primeiro campeonato chileno, 
              iniciando uma tradição de vitórias que se estenderia por décadas.
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">1960s</div>
            <div className="timeline-content">
              <strong>Era Dourada</strong> - Década marcada por grandes conquistas e o estabelecimento do 
              Universidad de Chile como uma força dominante no futebol chileno.
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2011</div>
            <div className="timeline-content">
              <strong>Conquista Histórica</strong> - O clube vence a Copa Libertadores da América, tornando-se 
              o primeiro e único clube chileno a conquistar o título mais prestigioso do continente.
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">Hoje</div>
            <div className="timeline-content">
              <strong>Legado Contínuo</strong> - Com 18 títulos nacionais e múltiplas conquistas internacionais, 
              o Universidad de Chile continua sendo o maior símbolo do futebol chileno.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
