import axios from 'axios';

const API_URL = 'http://localhost:8080/categoria';

class CategoriaService {
  // GET - Pegar todas as categorias
  getAllCategorias() {
    return axios.get(API_URL);
  }

  // GET - Pegar uma categoria pelo ID
  getCategoriaById(id: number) {
    return axios.get(`${API_URL}/${id}`);
  }

  // POST - Criar uma nova categoria
  createCategoria(categoria: { nome: string }) {
    return axios.post(API_URL, categoria);
  }

  // PUT - Atualizar uma categoria existente
  updateCategoria(categoria: { id: number; nome: string }) {
    return axios.put(API_URL, categoria);
  }

  // DELETE - Deletar uma categoria pelo ID
  deleteCategoria(id: number) {
    return axios.delete(`${API_URL}/${id}`);
  }

  // GET - Buscar categoria pelo nome
  getCategoriaByNome(nome: string) {
    return axios.get(`${API_URL}/nome/${nome}`);
  }
}

export default new CategoriaService();
