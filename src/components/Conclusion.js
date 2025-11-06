import React from 'react';
import './Content.css';

const Conclusion = () => {
  return (
    <section className="content-section">
      <div className="container container-narrow">
        <div className="section-header">
          <span className="section-label">Conclusión</span>
          <h2 className="section-title">Más que un Club, una Identidad</h2>
        </div>
        
        <div className="content-text">
          <p className="lead-text">
            La <strong>Universidad de Chile</strong> no es solo un club de fútbol: es una parte vital 
            de la cultura, la historia y la identidad chilena.
          </p>
          
          <p>
            Con casi un siglo de existencia, el club ha construido un legado de logros, pasión y excelencia 
            que lo convierte en el mayor símbolo del fútbol de Chile. Desde su fundación en 1927 hasta la actualidad, 
            la Universidad de Chile ha sido una fuente de orgullo para millones de chilenos.
          </p>
          
          <div className="card" style={{ 
            marginTop: 'var(--space-10)', 
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
            color: 'var(--white)',
            border: 'none',
            textAlign: 'center'
          }}>
            <div className="card-body" style={{ color: 'var(--white)' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 'var(--space-6)' }}>
                El club continuará siendo una referencia en el fútbol sudamericano y una fuente de inspiración 
                para las generaciones futuras.
              </p>
              <p style={{ fontSize: '1.125rem', margin: 0, opacity: 0.9 }}>
                La Universidad de Chile es, y siempre será, mucho más que un equipo: es una pasión, una identidad 
                y una parte esencial del alma chilena.
              </p>
              <div style={{ marginTop: 'var(--space-8)', display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  style={{
                    padding: 'var(--space-4) var(--space-8)',
                    background: 'var(--white)',
                    color: 'var(--primary)',
                    border: 'none',
                    borderRadius: 'var(--radius)',
                    fontSize: '16px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'var(--transition)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = 'var(--shadow-lg)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Volver al Inicio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
