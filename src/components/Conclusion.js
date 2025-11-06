import React from 'react';
import './Content.css';

const Conclusion = () => {
  return (
    <section className="content-section">
      <div className="container container-narrow">
        <div className="section-header">
          <span className="section-label">Conclusão</span>
          <h2 className="section-title">Mais que um Clube, uma Identidade</h2>
        </div>
        
        <div className="content-text">
          <p className="lead-text">
            O <strong>Universidad de Chile</strong> não é apenas um clube de futebol: é uma parte vital 
            da cultura, da história e da identidade chilena.
          </p>
          
          <p>
            Com quase um século de existência, o clube construiu um legado de conquistas, paixão e excelência 
            que o torna o maior símbolo do futebol do Chile. Desde sua fundação em 1927 até os dias atuais, 
            o Universidad de Chile tem sido uma fonte de orgulho para milhões de chilenos.
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
                O clube continuará sendo uma referência no futebol sul-americano e uma fonte de inspiração 
                para gerações futuras.
              </p>
              <p style={{ fontSize: '1.125rem', margin: 0, opacity: 0.9 }}>
                O Universidad de Chile é, e sempre será, muito mais que um time: é uma paixão, uma identidade 
                e uma parte essencial da alma chilena.
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
                  Voltar ao Topo
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
