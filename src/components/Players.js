import React from 'react';
import './Content.css';

const Players = () => {
  const players = [
    {
      name: 'Marcelo Salas',
      nickname: 'El Matador',
      description: 'Uno de los mayores ídolos de la historia del club. Goleador histórico que marcó época en la Universidad de Chile antes de destacarse en la selección chilena y en clubes europeos.'
    },
    {
      name: 'Jorge Valdivia',
      nickname: 'El Mago',
      description: 'Fundamental en la conquista de la Copa Libertadores de 2011. Con técnica refinada y visión de juego excepcional, se convirtió en uno de los jugadores más queridos de la hinchada.'
    },
    {
      name: 'Eduardo Vargas',
      nickname: 'El Chupete',
      description: 'Goleador de la Copa Libertadores de 2011. Su velocidad, habilidad y capacidad para marcar goles importantes lo convirtieron en uno de los jugadores más decisivos de la historia reciente.'
    },
    {
      name: 'Charles Aránguiz',
      nickname: '',
      description: 'Mediocampista de clase mundial, fue fundamental en la conquista de la Libertadores y se convirtió en uno de los jugadores más importantes de la selección chilena.'
    },
    {
      name: 'Johnny Herrera',
      nickname: '',
      description: 'Arquero histórico del club, fue pieza fundamental en la conquista de la Copa Libertadores. Se convirtió en uno de los mayores arqueros de la historia de la Universidad de Chile.'
    },
    {
      name: 'Eladio Vásquez',
      nickname: 'Leyenda',
      description: 'Uno de los pioneros que ayudó a construir la identidad de la Universidad de Chile. Su dedicación y talento marcaron a una generación.'
    }
  ];

  return (
    <section className="content-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Ídolos</span>
          <h2 className="section-title">Leyendas que Hicieron Historia</h2>
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
              La Universidad de Chile tiene una tradición de formar y revelar grandes talentos que no solo 
              brillan en el club, sino que también representan a la selección chilena en competencias internacionales. 
              La escuela de fútbol del club es reconocida por desarrollar jugadores técnicos, inteligentes 
              y apasionados, que llevan los valores y la identidad de "La U" a donde quiera que vayan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Players;
