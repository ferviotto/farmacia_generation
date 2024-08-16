import React from 'react';
import './Categoria.css';

const Categoria: React.FC = () => {
  return (
    <div className="categoria-container">
      <h1>Categorias de Produtos</h1>
      <div className="categoria-list">
        <div className="categoria-item">
          <h2>Categoria 1</h2>
        </div>
        <div className="categoria-item">
          <h2>Categoria 2</h2>
        </div>
        <div className="categoria-item">
          <h2>Categoria 3</h2>
        </div>
      </div>
    </div>
  );
}

export default Categoria;
