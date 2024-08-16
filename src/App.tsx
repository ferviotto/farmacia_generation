import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/navBar/NavBar';
import Footer from './componentes/footer/Footer';
import Home from './paginas/home/Home';
import CategoriaList from './componentes/categorias/categoriaListar/CategoriaListar';
import CategoriaForm from './componentes/categorias/categoriaForm/CategoriaForm';
import CategoriaDeletar from './componentes/categorias/categoriaDeletar/CategoriaDeletar';
import Categoria from './paginas/categoria/Categoria';
import Produto from './paginas/produto/Produto';
import Contato from './paginas/contato/Contato';
import TermosDeUso from './paginas/termosDeUso/TermosDeUso';
import PoliticaDePrivacidade from './paginas/politicaPrivacidade/PoliticaPrivacidade';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria-listar" element={<CategoriaList />} />
            <Route path="/categoria-form" element={<CategoriaForm />} />
            <Route path="/categoria-form/:id" element={<CategoriaForm />} />
            <Route path="/categoria-deletar/:id" element={<CategoriaDeletar />} />
            <Route path="/produto" element={<Produto />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/categoria" element={<Categoria />} />
            <Route path="/termos-de-uso" element={<TermosDeUso />} />
            <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
