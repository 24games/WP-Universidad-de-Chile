import React from 'react';
import './Content.css';

const Culture = () => {
  return (
    <section className="content-section">
      <div className="container container-narrow">
        <div className="section-header">
          <span className="section-label">Cultura</span>
          <h2 className="section-title">La Pasión que Une un País</h2>
        </div>
        
        <div className="content-text">
          <p className="lead-text">
            La hinchada de la Universidad de Chile, conocida como <strong>"Los de Abajo"</strong> y 
            <strong> "La Garra Blanca"</strong>, es una de las más apasionadas y organizadas del continente 
            sudamericano.
          </p>
          
          <p>
            Con millones de hinchas repartidos por todo Chile y más allá, la hinchada de "La U" es conocida 
            por su apoyo incondicional, su creatividad en los cánticos y su lealtad absoluta al club. 
            Los partidos de la Universidad de Chile son verdaderos espectáculos, con la hinchada creando una atmósfera 
            única y envolvente.
          </p>
          
          <p>
            La cultura del club va mucho más allá del fútbol. La Universidad de Chile representa una identidad 
            colectiva que une a personas de todas las clases sociales, orígenes y edades. El club es un punto de 
            encuentro, una fuente de orgullo y un símbolo de unión nacional.
          </p>
          
          <div className="card" style={{ marginTop: 'var(--space-8)', background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', color: 'var(--white)', border: 'none' }}>
            <div className="card-body" style={{ color: 'var(--white)' }}>
              <p style={{ fontSize: '1.25rem', fontStyle: 'italic', margin: 0 }}>
                "Para los chilenos, la Universidad de Chile no es solo un club de fútbol: es una forma de 
                vida, una identidad y una fuente de orgullo que trasciende el deporte."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
