import React from 'react';
import './Content.css';

const Resources = () => {
  return (
    <section className="content-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Recursos</span>
          <h2 className="section-title">Explora Más sobre el Club</h2>
        </div>
        
        <div className="magazine-grid">
          <div className="magazine-item featured">
            <div className="magazine-content">
              <div className="card-subtitle">📚 Documentales</div>
              <h3 className="magazine-title">Contenido Visual e Histórico</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--space-4)' }}>
                <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    "La U: Una Historia de Pasión" - Documental sobre la historia del club
                  </a>
                </li>
                <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    "Copa Libertadores 2011: El Sueño Azul" - El logro histórico
                  </a>
                </li>
                <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    "Marcelo Salas: El Matador" - Trayectoria del mayor ídolo
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="magazine-item regular">
            <div className="magazine-content">
              <div className="card-subtitle">📖 Artículos</div>
              <h3 className="magazine-title">Lectura e Investigación</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--space-4)' }}>
                <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>
                  <a href="https://es.wikipedia.org/wiki/Club_Universidad_de_Chile" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    Historia completa (Wikipedia)
                  </a>
                </li>
                <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>
                  <a href="https://www.anfp.cl" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    Anuario del Fútbol Chileno
                  </a>
                </li>
                <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>
                  <a href="https://www.conmebol.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    CONMEBOL - Historia de la Libertadores
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="magazine-item regular">
            <div className="magazine-content">
              <div className="card-subtitle">🎥 Videos</div>
              <h3 className="magazine-title">Momentos Épicos</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--space-4)' }}>
                <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    Final Libertadores 2011
                  </a>
                </li>
                <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    Superclásico - Mejores Momentos
                  </a>
                </li>
                <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    Hinchada - Cánticos y Celebraciones
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
