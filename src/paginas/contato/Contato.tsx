import React from 'react';
import './Contato.css';

const Contato: React.FC = () => {
  return (
    <div className="contato-container">
      <h1>Contato</h1>
      <p>Entre em contato conosco para mais informações ou dúvidas.</p>
      <form className="contato-form">
        <label>
          Nome:
          <input type="text" placeholder="Seu nome" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Seu email" />
        </label>
        <label>
          Mensagem:
          <textarea placeholder="Sua mensagem"></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
