import React from 'react';
import './Section.css';

const Resources = () => {
  return (
    <section className="section resources">
      <div className="section-container">
        <h2 className="section-title">Recursos e Fontes</h2>
        <div className="section-content">
          <p className="section-text">
            Para aprofundar seu conhecimento sobre o Universidad de Chile, recomendamos os seguintes recursos históricos, 
            documentários e artigos que enriquecem ainda mais a compreensão sobre este clube lendário.
          </p>
          
          <div className="resources-grid">
            <div className="resource-item">
              <h3 className="resource-title">📚 Documentários</h3>
              <ul className="resource-list">
                <li>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="resource-link">
                    "La U: Una Historia de Pasión" - Documentário sobre a história do clube
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="resource-link">
                    "Copa Libertadores 2011: El Sueño Azul" - A conquista histórica
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="resource-link">
                    "Marcelo Salas: El Matador" - Trajetória do maior ídolo
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="resource-item">
              <h3 className="resource-title">📖 Artigos Históricos</h3>
              <ul className="resource-list">
                <li>
                  <a href="https://es.wikipedia.org/wiki/Club_Universidad_de_Chile" target="_blank" rel="noopener noreferrer" className="resource-link">
                    História completa do Universidad de Chile (Wikipedia)
                  </a>
                </li>
                <li>
                  <a href="https://www.anfp.cl" target="_blank" rel="noopener noreferrer" className="resource-link">
                    Anuário do Futebol Chileno - Estatísticas e recordes
                  </a>
                </li>
                <li>
                  <a href="https://www.conmebol.com" target="_blank" rel="noopener noreferrer" className="resource-link">
                    CONMEBOL - História da Copa Libertadores
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="resource-item">
              <h3 className="resource-title">🎥 Momentos Épicos</h3>
              <ul className="resource-list">
                <li>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="resource-link">
                    Final da Copa Libertadores 2011 - Gols e comemorações
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="resource-link">
                    Superclásico Chileno - Melhores momentos históricos
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="resource-link">
                    Torcida do Universidad de Chile - Cânticos e celebrações
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="section-text highlight">
            <strong>Nota:</strong> Os links acima são exemplos de recursos educativos. Recomendamos buscar conteúdo oficial do clube 
            e fontes confiáveis para informações atualizadas e precisas sobre o Universidad de Chile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resources;

