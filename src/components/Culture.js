import React from 'react';
import './Content.css';

const Culture = () => {
  return (
    <section className="content-section">
      <div className="container container-narrow">
        <div className="section-header">
          <span className="section-label">Cultura</span>
          <h2 className="section-title">A Paixão que Une um País</h2>
        </div>
        
        <div className="content-text">
          <p className="lead-text">
            A torcida do Universidad de Chile, conhecida como <strong>"Los de Abajo"</strong> e 
            <strong> "La Garra Blanca"</strong>, é uma das mais apaixonadas e organizadas do continente 
            sul-americano.
          </p>
          
          <p>
            Com milhões de torcedores espalhados por todo o Chile e além, a torcida do "La U" é conhecida 
            por seu apoio incondicional, sua criatividade nos cânticos e sua lealdade absoluta ao clube. 
            Os jogos do Universidad de Chile são verdadeiros espetáculos, com a torcida criando uma atmosfera 
            única e envolvente.
          </p>
          
          <p>
            A cultura do clube vai muito além do futebol. O Universidad de Chile representa uma identidade 
            coletiva que une pessoas de todas as classes sociais, origens e idades. O clube é um ponto de 
            encontro, uma fonte de orgulho e um símbolo de união nacional.
          </p>
          
          <div className="card" style={{ marginTop: 'var(--space-8)', background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', color: 'var(--white)', border: 'none' }}>
            <div className="card-body" style={{ color: 'var(--white)' }}>
              <p style={{ fontSize: '1.25rem', fontStyle: 'italic', margin: 0 }}>
                "Para os chilenos, o Universidad de Chile não é apenas um clube de futebol: é uma forma de 
                vida, uma identidade e uma fonte de orgulho que transcende o esporte."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
