import React from 'react';
import './Section.css';

const Rivalries = () => {
  return (
    <section className="section rivalries">
      <div className="section-container">
        <h2 className="section-title">Rivalidades</h2>
        <div className="section-content">
          <div className="rivalry-main">
            <h3 className="rivalry-title">⚔️ O Superclásico Chileno</h3>
            <p className="section-text">
              A rivalidade entre o <strong>Universidad de Chile</strong> e o <strong>Colo-Colo</strong> é considerada uma das mais intensas 
              e apaixonadas do futebol sul-americano. Conhecido como o "Superclásico Chileno", este confronto transcende o esporte, 
              representando uma divisão cultural e social que remonta a décadas de história.
            </p>
            <p className="section-text">
              O Colo-Colo, fundado em 1925, e o Universidad de Chile, fundado em 1927, são os dois maiores clubes do país, e seus confrontos 
              sempre geram expectativa nacional. Cada partida entre os dois times é mais do que um simples jogo de futebol: é um evento que 
              paralisa o país, unindo e dividindo famílias, amigos e comunidades em torno de suas cores e identidades.
            </p>
            <p className="section-text">
              A rivalidade é marcada por momentos históricos memoráveis, jogos épicos e uma competição constante pela supremacia no futebol 
              chileno. Para os torcedores, vencer o rival não é apenas uma vitória esportiva, mas uma afirmação de identidade e orgulho.
            </p>
          </div>
          <div className="rivalry-others">
            <h3 className="rivalry-title">Outras Rivalidades</h3>
            <p className="section-text">
              Além do confronto com o Colo-Colo, o Universidad de Chile mantém rivalidades regionais importantes, especialmente com clubes 
              de Santiago e outras cidades chilenas. Essas rivalidades, embora não tenham a mesma intensidade do Superclásico, são parte 
              fundamental da cultura do futebol chileno e contribuem para a rica história de competições e confrontos que caracterizam 
              o campeonato nacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rivalries;

