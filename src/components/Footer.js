import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          Esta página es exclusivamente informativa, sin fines de lucro ni comerciales. No posee ningún propósito de generar retorno financiero 
          y busca únicamente proporcionar contenido histórico y educativo sobre el club Universidad de Chile.
        </p>
        <div className="footer-links">
          <Link to="/terminos-y-condiciones" className="footer-link">
            Términos y Condiciones
          </Link>
          <span className="footer-separator">|</span>
          <Link to="/politica-de-privacidad" className="footer-link">
            Política de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

