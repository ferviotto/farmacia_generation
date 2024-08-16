import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CategoriaService from '../../../services/CategoriaServices';

const DeletarCategoria: React.FC = () => {
  const { id } = useParams(); // Pega o parâmetro 'id' da URL
  const navigate = useNavigate(); // Navegação para redirecionar após a exclusão

  const handleDelete = () => {
    CategoriaService.deleteCategoria(Number(id))
      .then(() => {
        alert('Categoria deletada com sucesso!');
        navigate('/categoria-listar'); // Redireciona para a lista de categorias após a exclusão
      })
      .catch(error => console.error('Erro ao deletar categoria:', error));
  };

  const handleCancel = () => {
    navigate('/categoria-listar'); // Redireciona para a lista de categorias ao cancelar
  };

  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>
      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria?</p>
      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-green-600 text-white font-bold text-2xl'>Categoria</header>
        <p className='p-8 text-3xl bg-slate-200 h-full'>Categoria {id}</p>
        <div className="flex">
          <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={handleCancel}>Não</button>
          <button className='w-full text-slate-100 bg-green-400 hover:bg-green-600 flex items-center justify-center' onClick={handleDelete}>
            Sim
          </button>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default DeletarCategoria;
