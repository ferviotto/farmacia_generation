import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Officina Profumo-Farmaceutica di Santa Maria Novella. Todos os direitos reservados.</p>
        <p><a href="/politica-de-privacidade">Política de Privacidade</a> | <a href="/termos-de-uso">Termos de Uso</a></p>
      </div>
    </footer>
  );
};

export default Footer;
