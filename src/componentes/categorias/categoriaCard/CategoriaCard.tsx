import React from 'react';
import { Link } from 'react-router-dom';
import { Categoria } from '../../../models/Categoria';

interface Props {
  categoria: Categoria;
}

const CardCategoria: React.FC<Props> = ({ categoria }) => {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-green-800 text-white font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>
      <div className="flex">
        <Link to={`/categoria-form/${categoria.id}`} className='w-full text-slate-100 bg-green-400 hover:bg-green-800 flex items-center justify-center py-2'>
          Editar
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
