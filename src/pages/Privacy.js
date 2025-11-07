import React from 'react';
import { Link } from 'react-router-dom';
import ScrollProgress from '../components/ScrollProgress';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './LegalPages.css';

const Privacy = () => {
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
              <h1 className="legal-title">Política de Privacidad</h1>
              <p className="legal-intro">
                Última actualización: {new Date().toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="legal-content">
              <div className="legal-section-block">
                <h2>1. Introducción</h2>
                <p>
                  Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos su información 
                  personal cuando utiliza este sitio web. Nos comprometemos a proteger su privacidad y a ser 
                  transparentes sobre nuestras prácticas de datos.
                </p>
              </div>

              <div className="legal-section-block">
                <h2>2. Información que Recopilamos</h2>
                <p>
                  Este sitio web es principalmente informativo y no recopila activamente información personal 
                  de los visitantes. Sin embargo, podemos recopilar cierta información automáticamente:
                </p>
                <ul>
                  <li>
                    <strong>Información de navegación:</strong> Datos técnicos como dirección IP, tipo de 
                    navegador, sistema operativo, páginas visitadas y tiempo de permanencia en el sitio.
                  </li>
                  <li>
                    <strong>Cookies y tecnologías similares:</strong> Utilizamos cookies para mejorar la 
                    experiencia del usuario y analizar el tráfico del sitio.
                  </li>
                </ul>
              </div>

              <div className="legal-section-block">
                <h2>3. Uso de la Información</h2>
                <p>
                  La información recopilada se utiliza únicamente para:
                </p>
                <ul>
                  <li>Mejorar la funcionalidad y el rendimiento del sitio web</li>
                  <li>Analizar el uso del sitio para comprender mejor las preferencias de los visitantes</li>
                  <li>Garantizar la seguridad del sitio y prevenir actividades fraudulentas</li>
                </ul>
                <p>
                  No vendemos, alquilamos ni compartimos su información personal con terceros para fines 
                  comerciales.
                </p>
              </div>

              <div className="legal-section-block">
                <h2>4. Cookies</h2>
                <p>
                  Utilizamos cookies, que son pequeños archivos de texto almacenados en su dispositivo cuando 
                  visita nuestro sitio. Las cookies nos ayudan a:
                </p>
                <ul>
                  <li>Recordar sus preferencias de navegación</li>
                  <li>Analizar cómo los visitantes utilizan el sitio</li>
                  <li>Mejorar la experiencia general del usuario</li>
                </ul>
                <p>
                  Puede controlar y gestionar las cookies a través de la configuración de su navegador. 
                  Tenga en cuenta que deshabilitar las cookies puede afectar la funcionalidad del sitio.
                </p>
              </div>

              <div className="legal-section-block">
                <h2>5. Servicios de Terceros</h2>
                <p>
                  Este sitio puede utilizar servicios de terceros, como servicios de análisis web, que pueden 
                  recopilar información sobre su visita. Estos servicios tienen sus propias políticas de 
                  privacidad, y le recomendamos que las revise.
                </p>
                <p>
                  Los servicios de terceros que podemos utilizar incluyen:
                </p>
                <ul>
                  <li>Servicios de análisis web (como Google Analytics, si se utiliza)</li>
                  <li>Servicios de alojamiento web</li>
                  <li>CDN (Content Delivery Network) para mejorar el rendimiento</li>
                </ul>
              </div>

              <div className="legal-section-block">
                <h2>6. Seguridad de los Datos</h2>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas para proteger su información 
                  contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún 
                  método de transmisión por Internet o almacenamiento electrónico es completamente seguro, 
                  por lo que no podemos garantizar una seguridad absoluta.
                </p>
              </div>

              <div className="legal-section-block">
                <h2>7. Retención de Datos</h2>
                <p>
                  Conservamos la información recopilada solo durante el tiempo necesario para cumplir con los 
                  propósitos descritos en esta política, a menos que la ley requiera o permita un período de 
                  retención más largo.
                </p>
              </div>

              <div className="legal-section-block">
                <h2>8. Sus Derechos</h2>
                <p>
                  De acuerdo con la legislación chilena sobre protección de datos personales, usted tiene 
                  derecho a:
                </p>
                <ul>
                  <li>Solicitar acceso a sus datos personales</li>
                  <li>Solicitar la corrección de datos inexactos</li>
                  <li>Solicitar la eliminación de sus datos personales</li>
                  <li>Oponerse al procesamiento de sus datos personales</li>
                  <li>Solicitar la limitación del procesamiento de sus datos</li>
                </ul>
                <p>
                  Para ejercer estos derechos, puede contactarnos a través de los canales disponibles en este sitio.
                </p>
              </div>

              <div className="legal-section-block">
                <h2>9. Menores de Edad</h2>
                <p>
                  Este sitio no está dirigido a menores de 18 años. No recopilamos intencionalmente información 
                  personal de menores. Si descubrimos que hemos recopilado información de un menor sin el 
                  consentimiento de los padres, tomaremos medidas para eliminar esa información.
                </p>
              </div>

              <div className="legal-section-block">
                <h2>10. Cambios en esta Política</h2>
                <p>
                  Podemos actualizar esta Política de Privacidad ocasionalmente. Cualquier cambio será publicado 
                  en esta página con una fecha de "Última actualización" revisada. Le recomendamos que revise 
                  esta política periódicamente para estar informado sobre cómo protegemos su información.
                </p>
              </div>

              <div className="legal-section-block">
                <h2>11. Contacto</h2>
                <p>
                  Si tiene preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad 
                  o el manejo de sus datos personales, puede contactarnos a través de los canales disponibles 
                  en este sitio web.
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

export default Privacy;

