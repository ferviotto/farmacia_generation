import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          Officina Profumo-Farmaceutica <br/>
          Santa Maria Novella
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/produto">Produtos</Link></li>
        <li><Link to="/categoria">Categorias</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
