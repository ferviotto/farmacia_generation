import React, { ChangeEvent, useEffect, useState } from 'react';
import CategoriaService from '../../../services/CategoriaServices';
import { useNavigate, useParams } from 'react-router-dom';
import { Categoria } from '../../../models/Categoria';

const CategoriaForm: React.FC = () => {
  const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: '' });
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      CategoriaService.getCategoriaById(Number(id))
        .then(response => setCategoria(response.data))
        .catch(error => console.error('Erro ao buscar categoria:', error));
    }
  }, [id]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategoria({ ...categoria, [name]: value });
  };

  const saveCategoria = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (categoria.id === 0) {
      CategoriaService.createCategoria(categoria)
        .then(() => {
          alert('Categoria criada com sucesso!');
          navigate('/categoria-listar');
        })
        .catch(error => console.error('Erro ao criar categoria:', error));
    } else {
      CategoriaService.updateCategoria(categoria)
        .then(() => {
          alert('Categoria atualizada com sucesso!');
          navigate('/categoria-listar');
        })
        .catch(error => console.error('Erro ao atualizar categoria:', error));
    }
  };

  return (
    <div className='container flex flex-col items-center justify-center mx-auto'>
      <h2 className='text-4xl text-center my-8'>
        {id ? 'Editar Categoria' : 'Criar Nova Categoria'}
      </h2>
      <form className='w-1/2 flex flex-col gap-4' onSubmit={saveCategoria}>
        <div className='flex flex-col gap-2'>
          <label htmlFor='nome'>Nome da Categoria</label>
          <input
            type='text'
            name='nome'
            placeholder='Nome da Categoria'
            className='border-2 border-green-700 rounded p-2'
            value={categoria.nome}
            onChange={handleInputChange}
          />
        </div>
        <button
          className='rounded text-slate-100 bg-green-700 hover:bg-green-800 w-1/2 py-2 mx-auto block' 
          type='submit'
        >
          {id ? 'Atualizar' : 'Criar'}
        </button>
        <br/><br/><br/><br/><br/><br/><br/><br/>
      </form>
    </div>
  );
}

export default CategoriaForm;
