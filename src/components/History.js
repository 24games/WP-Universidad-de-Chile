import React from 'react';
import './Content.css';

const History = () => {
  return (
    <section className="content-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Historia</span>
          <h2 className="section-title">Un Viaje de Glorias y Tradición</h2>
        </div>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">1927</div>
            <div className="timeline-content">
              <strong>Fundación</strong> - Un grupo de estudiantes y funcionarios de la Universidad de Chile 
              crea el club, estableciendo los valores de educación y excelencia que marcaron su identidad.
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">1940</div>
            <div className="timeline-content">
              <strong>Primer Título Nacional</strong> - El club conquista su primer campeonato chileno, 
              iniciando una tradición de victorias que se extendería por décadas.
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">1960s</div>
            <div className="timeline-content">
              <strong>Época Dorada</strong> - Década marcada por grandes logros y el establecimiento de la 
              Universidad de Chile como una fuerza dominante en el fútbol chileno.
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2011</div>
            <div className="timeline-content">
              <strong>Logro Histórico</strong> - El club vence la Copa Libertadores de América, convirtiéndose 
              en el primer y único club chileno en conquistar el título más prestigioso del continente.
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">Hoy</div>
            <div className="timeline-content">
              <strong>Legado Continuo</strong> - Con 18 títulos nacionales y múltiples logros internacionales, 
              la Universidad de Chile continúa siendo el mayor símbolo del fútbol chileno.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
