import React from 'react';
import './Content.css';

const Rivalries = () => {
  return (
    <section className="content-section">
      <div className="container container-narrow">
        <div className="section-header">
          <span className="section-label">Rivalidades</span>
          <h2 className="section-title">El Superclásico Chileno</h2>
        </div>
        
        <div className="card card-with-image">
          <div className="rivalry-image-container">
            <img 
              src="https://i.ytimg.com/vi/mnN_ubv6-Zw/maxresdefault.jpg" 
              alt="Superclásico Chileno - Universidad de Chile vs Colo-Colo" 
              className="rivalry-image"
            />
          </div>
          <div className="card-header">
            <div className="card-subtitle">⚔️ El Encuentro Más Esperado</div>
            <h3 className="card-title">Universidad de Chile vs Colo-Colo</h3>
          </div>
          <div className="card-body">
            <p>
              La rivalidad entre la <strong>Universidad de Chile</strong> y <strong>Colo-Colo</strong> 
              es considerada una de las más intensas y apasionadas del fútbol sudamericano. Conocido como 
              el "Superclásico Chileno", este encuentro trasciende el deporte, representando una división 
              cultural y social que se remonta a décadas de historia.
            </p>
            <p>
              Colo-Colo, fundado en 1925, y la Universidad de Chile, fundada en 1927, son los dos mayores 
              clubes del país. Cada partido entre ambos equipos es más que un simple juego de fútbol: 
              es un evento que paraliza el país, uniendo y dividiendo familias, amigos y comunidades en torno 
              a sus colores e identidades.
            </p>
            <p>
              La rivalidad está marcada por momentos históricos memorables, partidos épicos y una competencia constante 
              por la supremacía en el fútbol chileno. Para los hinchas, vencer al rival no es solo una victoria 
              deportiva, sino una afirmación de identidad y orgullo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rivalries;
