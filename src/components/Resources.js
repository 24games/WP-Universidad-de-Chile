import React from 'react';
import './Content.css';

const Resources = () => {
  return (
    <section className="content-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Recursos</span>
          <h2 className="section-title">Explore Mais sobre o Clube</h2>
        </div>
        
        <div className="magazine-grid">
          <div className="magazine-item featured">
            <div className="magazine-content">
              <div className="card-subtitle">📚 Documentários</div>
              <h3 className="magazine-title">Conteúdo Visual e Histórico</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--space-4)' }}>
                <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    "La U: Una Historia de Pasión" - Documentário sobre a história do clube
                  </a>
                </li>
                <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    "Copa Libertadores 2011: El Sueño Azul" - A conquista histórica
                  </a>
                </li>
                <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    "Marcelo Salas: El Matador" - Trajetória do maior ídolo
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="magazine-item regular">
            <div className="magazine-content">
              <div className="card-subtitle">📖 Artigos</div>
              <h3 className="magazine-title">Leitura e Pesquisa</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--space-4)' }}>
                <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>
                  <a href="https://es.wikipedia.org/wiki/Club_Universidad_de_Chile" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    História completa (Wikipedia)
                  </a>
                </li>
                <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>
                  <a href="https://www.anfp.cl" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    Anuário do Futebol Chileno
                  </a>
                </li>
                <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>
                  <a href="https://www.conmebol.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    CONMEBOL - História da Libertadores
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="magazine-item regular">
            <div className="magazine-content">
              <div className="card-subtitle">🎥 Vídeos</div>
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
                    Superclásico - Melhores Momentos
                  </a>
                </li>
                <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    Torcida - Cânticos e Celebrações
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
