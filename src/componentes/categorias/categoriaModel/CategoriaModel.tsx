import React from 'react';
import CategoriaForm from '../../categorias/categoriaForm/CategoriaForm';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import './ModalCategoria.css';

function ModalCategoria() {
  return (
    <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-green-800'>Nova Categoria</button>} 
      modal
    >
      <div className="popup-content">
        <CategoriaForm />
      </div>
    </Popup>
  );
}

export default ModalCategoria;
