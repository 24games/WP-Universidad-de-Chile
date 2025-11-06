import React from 'react';
import './Section.css';

const Introduction = () => {
  return (
    <section className="section introduction">
      <div className="section-container">
        <h2 className="section-title">Introdução ao Universidad de Chile</h2>
        <div className="section-content">
          <p className="section-text">
            O <strong>Club Universidad de Chile</strong>, fundado em 24 de maio de 1927, é o clube de futebol mais vitorioso e popular do Chile. 
            Conhecido carinhosamente como "La U" ou "Los Azules", o clube representa não apenas uma instituição esportiva, mas um verdadeiro 
            símbolo da identidade cultural chilena.
          </p>
          <p className="section-text">
            Com uma base de fãs que ultrapassa milhões de torcedores em todo o país, o Universidad de Chile é reconhecido por sua tradição, 
            sua paixão e sua busca constante pela excelência. O clube não é apenas o mais vitorioso do Chile em termos de títulos, mas também 
            o que possui a maior torcida organizada e o maior impacto social e cultural no cenário esportivo nacional.
          </p>
          <p className="section-text">
            Além do campo, o Universidad de Chile transcende o esporte, influenciando a cultura popular, a música, a arte e até mesmo a política 
            chilena. O clube representa valores de união, perseverança e orgulho nacional, sendo uma parte fundamental da história e da identidade 
            do povo chileno.
          </p>
          
          <div className="intro-media">
            <div className="media-placeholder">
              <span className="media-icon">🏆</span>
              <p className="media-text">O escudo e as cores do Universidad de Chile - símbolos de tradição e paixão</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

