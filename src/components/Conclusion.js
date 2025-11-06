import React from 'react';
import './Section.css';

const Conclusion = () => {
  return (
    <section className="section conclusion">
      <div className="section-container">
        <h2 className="section-title">Conclusão</h2>
        <div className="section-content">
          <p className="section-text">
            O <strong>Universidad de Chile</strong> não é apenas um clube de futebol: é uma parte vital da cultura, da história e da identidade 
            chilena. Com quase um século de existência, o clube construiu um legado de conquistas, paixão e excelência que o torna o maior 
            símbolo do futebol do Chile.
          </p>
          <p className="section-text">
            Desde sua fundação em 1927 até os dias atuais, o Universidad de Chile tem sido uma fonte de orgulho para milhões de chilenos, 
            representando valores de união, perseverança e busca pela excelência. Suas conquistas, seus ídolos e sua torcida apaixonada 
            fazem parte do tecido social e cultural do país.
          </p>
          <p className="section-text highlight">
            O clube continuará sendo uma referência no futebol sul-americano e uma fonte de inspiração para gerações futuras. O Universidad 
            de Chile é, e sempre será, muito mais que um time: é uma paixão, uma identidade e uma parte essencial da alma chilena.
          </p>
          <div className="cta-box">
            <p className="cta-text">
              <strong>Viva a história do Universidad de Chile e continue acompanhando as futuras conquistas!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;

