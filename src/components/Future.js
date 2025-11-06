import React from 'react';
import './Content.css';

const Future = () => {
  return (
    <section className="content-section">
      <div className="container container-narrow">
        <div className="section-header">
          <span className="section-label">Futuro</span>
          <h2 className="section-title">Mirando hacia el Mañana</h2>
        </div>
        
        <div className="content-text">
          <p className="lead-text">
            La Universidad de Chile continúa mirando hacia el futuro con <strong>ambición y determinación</strong>, 
            invirtiendo constantemente en su cantera de jóvenes talentos.
          </p>
          
          <p>
            La búsqueda de la excelencia continúa siendo el objetivo principal. El club trabaja incansablemente 
            para retomar la Copa Libertadores y continuar conquistando títulos en el Campeonato Chileno, manteniendo 
            su posición como el club más exitoso del país.
          </p>
          
          <p>
            Nuevas contrataciones estratégicas, inversiones en infraestructura y el desarrollo continuo del 
            cuerpo técnico son parte del plan para garantizar que la Universidad de Chile permanezca en la cima del 
            fútbol chileno y sudamericano.
          </p>
          
          <p>
            Además de los objetivos deportivos, el club también está comprometido a mantener y fortalecer su conexión 
            con la hinchada, desarrollando proyectos sociales, culturales y educacionales que refuerzan el papel de la 
            Universidad de Chile como una institución que va más allá del fútbol.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Future;
