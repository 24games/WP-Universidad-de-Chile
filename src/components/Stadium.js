import React from 'react';
import './Content.css';

const Stadium = () => {
  return (
    <section className="content-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Estadio</span>
          <h2 className="section-title">El Templo del Fútbol Chileno</h2>
        </div>
        
        <div className="content-grid">
          <div className="content-main">
            <div className="content-text">
              <p className="lead-text">
                El <strong>Estadio Nacional de Chile</strong>, ubicado en Santiago, es la casa de la Universidad 
                de Chile y uno de los estadios más emblemáticos e históricos de América del Sur.
              </p>
              
              <p>
                Inaugurado en <strong>1938</strong>, el estadio tiene una capacidad de aproximadamente 
                <strong> 48.000 espectadores</strong> y es escenario de momentos inolvidables de la historia del 
                fútbol chileno. Fue en este estadio donde la Universidad de Chile conquistó algunos de sus 
                títulos más importantes, incluyendo la histórica Copa Libertadores de 2011.
              </p>
              
              <p>
                La atmósfera durante los partidos de "La U" es electrizante, con la hinchada creando un ambiente 
                único y apasionado que inspira a los jugadores e impresiona a los visitantes. Además de albergar 
                partidos de la Universidad de Chile, el Estadio Nacional también fue escenario de eventos históricos, 
                incluyendo la Copa del Mundo de 1962.
              </p>
              
              <p>
                Para los hinchas de la Universidad de Chile, el Estadio Nacional es más que un estadio: 
                es un lugar sagrado donde se crean recuerdos, se realizan sueños y la pasión por el club 
                se manifiesta en su forma más pura e intensa.
              </p>
            </div>
          </div>
          
          <div className="content-sidebar">
            <div className="info-card">
              <h3 className="info-card-title">Estadio Nacional</h3>
              <ul className="info-list">
                <li>
                  <span className="info-label">Inauguración</span>
                  <span className="info-value">1938</span>
                </li>
                <li>
                  <span className="info-label">Capacidad</span>
                  <span className="info-value">48.000</span>
                </li>
                <li>
                  <span className="info-label">Ubicación</span>
                  <span className="info-value">Santiago</span>
                </li>
                <li>
                  <span className="info-label">Eventos</span>
                  <span className="info-value">Mundial 1962</span>
                </li>
              </ul>
            </div>
            
            <div className="card" style={{ marginTop: 'var(--space-6)' }}>
              <div className="card-body">
                <p style={{ fontSize: '15px', color: 'var(--gray-600)', fontStyle: 'italic' }}>
                  "El Estadio Nacional no es solo un lugar de partidos, sino un verdadero templo del fútbol chileno."
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
