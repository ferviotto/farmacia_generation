import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Adicionando a imagem entre o Navbar e o conteúdo principal */}
      <div className="banner-container">
        <img 
          src="https://cdn.shopify.com/s/files/1/0276/7332/9753/t/7/assets/deb46b197af4--KV-EAU-DHADRIEN-1280x486.jpg?v=1667876058"
          alt="Banner"
          className="home-banner"
        />
        <div className="text-overlay">
          <h1>Boas Vindas!</h1>
          <p>Os melhores produtos de saúde e bem-estar para você e toda a sua família!</p>
          <button className="product-button" onClick={() => document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver Produtos
          </button>
        </div>
      </div>
      <div id="products-section" className="products-container">
        <h2>Nossos Produtos</h2>
      </div>
    </div>
  );
}

export default Home;
