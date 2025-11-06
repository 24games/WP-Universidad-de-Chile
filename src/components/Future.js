import React from 'react';
import './Content.css';

const Future = () => {
  return (
    <section className="content-section">
      <div className="container container-narrow">
        <div className="section-header">
          <span className="section-label">Futuro</span>
          <h2 className="section-title">Olhando para o Amanhã</h2>
        </div>
        
        <div className="content-text">
          <p className="lead-text">
            O Universidad de Chile continua olhando para o futuro com <strong>ambição e determinação</strong>, 
            investindo constantemente em sua base de jovens talentos.
          </p>
          
          <p>
            A busca pela excelência continua sendo o objetivo principal. O clube trabalha incansavelmente 
            para retomar a Copa Libertadores e continuar conquistando títulos no Campeonato Chileno, mantendo 
            sua posição como o clube mais vitorioso do país.
          </p>
          
          <p>
            Novas contratações estratégicas, investimentos em infraestrutura e o desenvolvimento contínuo da 
            equipe técnica são parte do plano para garantir que o Universidad de Chile permaneça no topo do 
            futebol chileno e sul-americano.
          </p>
          
          <p>
            Além dos objetivos esportivos, o clube também está comprometido em manter e fortalecer sua conexão 
            com a torcida, desenvolvendo projetos sociais, culturais e educacionais que reforçam o papel do 
            Universidad de Chile como uma instituição que vai além do futebol.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Future;
