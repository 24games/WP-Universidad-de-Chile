import React from 'react';
import './Section.css';

const Players = () => {
  return (
    <section className="section players">
      <div className="section-container">
        <h2 className="section-title">Principais Jogadores da História</h2>
        <div className="section-content">
          <div className="players-grid">
            <div className="player-item">
              <h3 className="player-name">Marcelo Salas</h3>
              <p className="player-description">
                Conhecido como "El Matador", Marcelo Salas é um dos maiores ídolos da história do clube. Artilheiro histórico, Salas marcou 
                época no Universidad de Chile antes de se destacar na seleção chilena e em clubes europeus. Sua paixão e dedicação ao clube 
                o tornaram um símbolo eterno dos Azules.
              </p>
            </div>
            <div className="player-item">
              <h3 className="player-name">Jorge Valdivia</h3>
              <p className="player-description">
                "El Mago" Valdivia foi fundamental na conquista da Copa Libertadores de 2011. Com sua técnica refinada e visão de jogo 
                excepcional, Valdivia se tornou um dos jogadores mais queridos da torcida e um dos maiores talentos que já vestiram a camisa 
                do Universidad de Chile.
              </p>
            </div>
            <div className="player-item">
              <h3 className="player-name">Eduardo Vargas</h3>
              <p className="player-description">
                Artilheiro da Copa Libertadores de 2011, Eduardo Vargas foi peça-chave na conquista histórica do título continental. Sua 
                velocidade, habilidade e capacidade de marcar gols importantes o tornaram um dos jogadores mais decisivos da história recente 
                do clube.
              </p>
            </div>
            <div className="player-item">
              <h3 className="player-name">Eladio Vásquez</h3>
              <p className="player-description">
                Uma lenda dos primeiros anos do clube, Eladio Vásquez foi um dos pioneiros que ajudou a construir a identidade do Universidad 
                de Chile. Sua dedicação e talento marcaram uma geração e estabeleceram os padrões de excelência que o clube mantém até hoje.
              </p>
            </div>
            <div className="player-item">
              <h3 className="player-name">Charles Aránguiz</h3>
              <p className="player-description">
                Meio-campista de classe mundial, Aránguiz foi fundamental na conquista da Libertadores e se tornou um dos jogadores mais 
                importantes da seleção chilena. Sua qualidade técnica e liderança em campo o tornaram um ídolo dos torcedores.
              </p>
            </div>
            <div className="player-item">
              <h3 className="player-name">Johnny Herrera</h3>
              <p className="player-description">
                Goleiro histórico do clube, Herrera foi uma peça fundamental na conquista da Copa Libertadores. Com suas defesas decisivas 
                e liderança, se tornou um dos maiores goleiros da história do Universidad de Chile e um símbolo de confiança para a torcida.
              </p>
            </div>
          </div>
          <p className="section-text">
            O Universidad de Chile tem uma tradição de formar e revelar grandes talentos que não apenas brilham no clube, mas também 
            representam a seleção chilena em competições internacionais. A escola de futebol do clube é reconhecida por desenvolver jogadores 
            técnicos, inteligentes e apaixonados, que carregam os valores e a identidade do "La U" para onde quer que vão.
          </p>
          
          <div className="players-media">
            <div className="media-placeholder">
              <span className="media-icon">⚽</span>
              <p className="media-text">Imagens históricas dos grandes ídolos do Universidad de Chile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Players;

