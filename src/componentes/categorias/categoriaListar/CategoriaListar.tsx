import React, { useState, useEffect } from 'react';
import CategoriaService from '../../../services/CategoriaServices';
import { Link, useNavigate } from 'react-router-dom';
import { Categoria } from '../../../models/Categoria';
import { DNA } from 'react-loader-spinner';
import './CategoriaListar.css';

function CategoriaList() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCategorias() {
            try {
                const response = await CategoriaService.getAllCategorias();
                setCategorias(response.data);
                setLoading(false);
            } catch (error: any) {
                setLoading(false);
                setError('Erro ao buscar categorias. Por favor, tente novamente.');
                console.error('Erro ao buscar categorias:', error);
            }
        }

        fetchCategorias();
    }, []);

    const deleteCategoria = async (id: number) => {
        try {
            await CategoriaService.deleteCategoria(id);
            setCategorias(categorias.filter(categoria => categoria.id !== id));
            alert('Categoria excluída com sucesso!');
        } catch (error: any) {
            setError('Erro ao excluir categoria. Por favor, tente novamente.');
            console.error('Erro ao excluir categoria:', error);
        }
    };

    return (
        <div className="container">
            <h2>Lista de Categorias</h2><br/>
            <div className="link-wrapper">
                <Link to="/categoria-form" className="link">Criar Nova Categoria</Link>
            </div>
            {loading ? (
                <div className="dna-wrapper">
                    <DNA
                        visible={true}
                        height="200"
                        width="200"
                        ariaLabel="dna-loading"
                    />
                </div>
            ) : (
                <ul className="categoria-list">
                    {/* Exibe erro ou lista de categorias */}
                    {error ? (
                        <p className="error-message">{error}</p>
                    ) : (
                        <>
                            {categorias.length > 0 ? (
                                categorias.map(categoria => (
                                    <li key={categoria.id} className="categoria-item">
                                        <p>{categoria.nome}</p>
                                        <div className="button-group">
                                            <Link to={`/categoria-form/${categoria.id}`} className="link edit-button">Editar</Link>
                                            <button onClick={() => deleteCategoria(categoria.id)} className="delete-button">Deletar</button>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <p className="no-categories">Nenhuma categoria encontrada.</p>
                            )}
                        </>
                    )}
                </ul>
            )}
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        
    );
}

export default CategoriaList;
