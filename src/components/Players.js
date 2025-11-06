import React from 'react';
import './Content.css';

const Players = () => {
  const players = [
    {
      name: 'Marcelo Salas',
      nickname: 'El Matador',
      description: 'Um dos maiores ídolos da história do clube. Artilheiro histórico que marcou época no Universidad de Chile antes de se destacar na seleção chilena e em clubes europeus.'
    },
    {
      name: 'Jorge Valdivia',
      nickname: 'El Mago',
      description: 'Fundamental na conquista da Copa Libertadores de 2011. Com técnica refinada e visão de jogo excepcional, se tornou um dos jogadores mais queridos da torcida.'
    },
    {
      name: 'Eduardo Vargas',
      nickname: 'El Chupete',
      description: 'Artilheiro da Copa Libertadores de 2011. Sua velocidade, habilidade e capacidade de marcar gols importantes o tornaram um dos jogadores mais decisivos da história recente.'
    },
    {
      name: 'Charles Aránguiz',
      nickname: '',
      description: 'Meio-campista de classe mundial, foi fundamental na conquista da Libertadores e se tornou um dos jogadores mais importantes da seleção chilena.'
    },
    {
      name: 'Johnny Herrera',
      nickname: '',
      description: 'Goleiro histórico do clube, foi peça fundamental na conquista da Copa Libertadores. Se tornou um dos maiores goleiros da história do Universidad de Chile.'
    },
    {
      name: 'Eladio Vásquez',
      nickname: 'Lenda',
      description: 'Um dos pioneiros que ajudou a construir a identidade do Universidad de Chile. Sua dedicação e talento marcaram uma geração.'
    }
  ];

  return (
    <section className="content-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Ídolos</span>
          <h2 className="section-title">Lendas que Fizeram História</h2>
        </div>
        
        <div className="magazine-grid">
          {players.map((player, index) => (
            <div 
              key={index} 
              className={`magazine-item ${index === 0 ? 'featured' : 'regular'}`}
            >
              <div className="magazine-content">
                {player.nickname && (
                  <div className="card-subtitle">⭐ {player.nickname}</div>
                )}
                <h3 className="magazine-title">{player.name}</h3>
                <p className="magazine-text">{player.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="card" style={{ marginTop: 'var(--space-10)', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="card-body">
            <p>
              O Universidad de Chile tem uma tradição de formar e revelar grandes talentos que não apenas 
              brilham no clube, mas também representam a seleção chilena em competições internacionais. 
              A escola de futebol do clube é reconhecida por desenvolver jogadores técnicos, inteligentes 
              e apaixonados, que carregam os valores e a identidade do "La U" para onde quer que vão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Players;
