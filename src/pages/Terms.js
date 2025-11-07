import React from 'react';
import { Link } from 'react-router-dom';
import ScrollProgress from '../components/ScrollProgress';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './LegalPages.css';

const Terms = () => {
  return (
    <div className="App">
      <ScrollProgress />
      <Header />
      <main>
        <section className="legal-section">
          <div className="container container-narrow">
            <div className="legal-header">
              <Link to="/" className="back-link">
                ← Volver al inicio
              </Link>
              <span className="section-label">Legal</span>
              <h1 className="legal-title">Términos y Condiciones</h1>
              <p className="legal-intro">
                Última actualización: {new Date().toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="legal-content">
              <div className="legal-section-block">
                <h2>1. Aceptación de los Términos</h2>
                <p>
                  Al acceder y utilizar este sitio web, usted acepta cumplir con estos términos y condiciones. 
                  Si no está de acuerdo con alguna parte de estos términos, no debe utilizar este sitio.
                </p>
              </div>

              <div className="legal-section-block">
                <h2>2. Propósito del Sitio</h2>
                <p>
                  Este sitio web es exclusivamente informativo y educativo. Su propósito es proporcionar 
                  contenido histórico y cultural sobre el Club Universidad de Chile. Este sitio no tiene 
                  fines comerciales ni de lucro y no está afiliado oficialmente con el Club Universidad de Chile.
                </p>
              </div>

              <div className="legal-section-block">
                <h2>3. Contenido del Sitio</h2>
                <p>
                  Todo el contenido presentado en este sitio, incluyendo textos, imágenes, videos y otros 
                  materiales, es proporcionado únicamente con fines informativos y educativos. Nos esforzamos 
                  por mantener la información actualizada y precisa, pero no garantizamos la exactitud 
                  completa de todo el contenido.
                </p>
                <p>
                  Las imágenes y materiales visuales utilizados son de fuentes públicas y se utilizan bajo 
                  el principio de uso justo para fines educativos e informativos.
                </p>
              </div>

              <div className="legal-section-block">
                <h2>4. Propiedad Intelectual</h2>
                <p>
                  El contenido original de este sitio, incluyendo textos, diseño y estructura, es propiedad 
                  de los creadores de este sitio. Sin embargo, reconocemos que las imágenes, logotipos y 
                  marcas relacionadas con el Club Universidad de Chile son propiedad de sus respectivos 
                  dueños.
                </p>
                <p>
                  No reclamamos derechos de propiedad sobre las marcas, logotipos o imágenes oficiales del 
                  Club Universidad de Chile. El uso de estos materiales es puramente informativo y educativo.
                </p>
              </div>

              <div className="legal-section-block">
                <h2>5. Uso Permitido</h2>
                <p>
                  Se le permite acceder y utilizar este sitio web para fines personales, educativos e 
                  informativos. No se permite:
                </p>
                <ul>
                  <li>Reproducir, distribuir o modificar el contenido sin autorización</li>
                  <li>Utilizar el contenido con fines comerciales</li>
                  <li>Realizar actividades que puedan dañar o interferir con el funcionamiento del sitio</li>
                  <li>Intentar acceder a áreas restringidas del sitio</li>
                </ul>
              </div>

              <div className="legal-section-block">
                <h2>6. Enlaces Externos</h2>
                <p>
                  Este sitio puede contener enlaces a sitios web externos que no están bajo nuestro control. 
                  No somos responsables del contenido, políticas de privacidad o prácticas de estos sitios 
                  externos. La inclusión de cualquier enlace no implica nuestra aprobación del sitio vinculado.
                </p>
              </div>

              <div className="legal-section-block">
                <h2>7. Limitación de Responsabilidad</h2>
                <p>
                  Este sitio se proporciona "tal cual" sin garantías de ningún tipo, expresas o implícitas. 
                  No garantizamos que el sitio esté libre de errores, virus u otros componentes dañinos. 
                  No seremos responsables por ningún daño directo, indirecto, incidental o consecuente que 
                  resulte del uso o la imposibilidad de usar este sitio.
                </p>
              </div>

              <div className="legal-section-block">
                <h2>8. Modificaciones</h2>
                <p>
                  Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. 
                  Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio. 
                  Es su responsabilidad revisar periódicamente estos términos para estar al tanto de cualquier cambio.
                </p>
              </div>

              <div className="legal-section-block">
                <h2>9. Ley Aplicable</h2>
                <p>
                  Estos términos y condiciones se rigen por las leyes de Chile. Cualquier disputa relacionada 
                  con estos términos será resuelta en los tribunales competentes de Chile.
                </p>
              </div>

              <div className="legal-section-block">
                <h2>10. Contacto</h2>
                <p>
                  Si tiene preguntas sobre estos términos y condiciones, puede contactarnos a través de los 
                  canales disponibles en este sitio web.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;

