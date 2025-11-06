import React from 'react';
import './Section.css';

const Stadium = () => {
  return (
    <section className="section stadium">
      <div className="section-container">
        <h2 className="section-title">O Estádio Nacional</h2>
        <div className="section-content">
          <p className="section-text">
            O <strong>Estádio Nacional de Chile</strong>, localizado em Santiago, é a casa do Universidad de Chile e um dos estádios mais 
            emblemáticos e históricos da América do Sul. Inaugurado em 1938, o estádio tem uma capacidade de aproximadamente <strong>48.000 espectadores</strong> 
            e é palco de momentos inesquecíveis da história do futebol chileno.
          </p>
          <p className="section-text">
            O Estádio Nacional não é apenas um local de jogos, mas um verdadeiro templo do futebol chileno. Foi neste estádio que o Universidad 
            de Chile conquistou alguns de seus títulos mais importantes, incluindo a histórica Copa Libertadores de 2011. A atmosfera durante os 
            jogos do "La U" é eletrizante, com a torcida criando um ambiente único e apaixonado que inspira os jogadores e impressiona os visitantes.
          </p>
          <p className="section-text">
            Além de sediar jogos do Universidad de Chile, o Estádio Nacional também foi palco de eventos históricos, incluindo a Copa do Mundo 
            de 1962, quando o Chile foi sede do torneio. Este legado histórico torna o estádio um símbolo não apenas do clube, mas de toda a 
            nação chilena e de sua paixão pelo futebol.
          </p>
          <p className="section-text">
            Para os torcedores do Universidad de Chile, o Estádio Nacional é mais do que um estádio: é um lugar sagrado onde memórias são 
            criadas, sonhos são realizados e a paixão pelo clube se manifesta em sua forma mais pura e intensa.
          </p>
          
          <div className="media-container">
            <div className="media-item">
              <div className="media-placeholder">
                <span className="media-icon">📸</span>
                <p className="media-text">Imagem do Estádio Nacional durante um jogo do Universidad de Chile</p>
              </div>
            </div>
            <div className="media-item">
              <div className="media-placeholder video">
                <span className="media-icon">▶️</span>
                <p className="media-text">Vídeo: Momentos históricos do Universidad de Chile no Estádio Nacional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stadium;

