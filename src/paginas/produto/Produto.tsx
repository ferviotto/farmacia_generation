import React from 'react';
import './Produto.css';

const Produto: React.FC = () => {
  return (
    <div className="produto-container">
      <h1>Nossos Produtos</h1>
      <div className="produto-list">
        <div className="produto-item">
          <h2>Produto 1</h2>
          <p>Descrição do produto 1.</p>
        </div>
        <div className="produto-item">
          <h2>Produto 2</h2>
          <p>Descrição do produto 2.</p>
        </div>
      </div>
    </div>
  );
}

export default Produto;
