# Projeto Farmácia - Bootcamp Generation

Resumo: criação de um projeto CRUD de uma Farmácia utilizando Spring no Back-end com o intuito de finalizar o bloco 02 do Bootcamp da Generation patrocinado pela Microsoft - T75.

Descrição: 
1. Criação do projeto no Spring Initializr. Dependências utilizadas: Spring WEB, Spring dev tools, Spring data JPA, MySQL driver e validation.
2. Criação do DER do banco de dados db_crudfarmacia.
3. Criação de 2 tabelas: tb_categorias e tb_produtos.
4. Configuração do arquivo application.properties para conectar com o Banco de dados.
6. Criação das Classes Model Categoria e Produto.
7. Criação dos atributos estabelecidos na DER.
8. Criação dos métodos get and set.
9. Criação das Interfaces Repository CategoriaRepository e ProdutoRepository.
10. Criação dos métodos específicos: findAllByNomeProdutoContainingIgnoreCase() e findAllByNomeContainingIgnoreCase().
11. Criação das Classes Controller CategoriaController e ProdutoController.
12. Criação dos métodos básicos do CRUD: findAll(), findById(), post(), pull() e delete().
13. Criação da Relação OneToMany na Classe Model Categoria com a Classe Model Produto.
14. Criação da Relação ManyToOne na Classe Model Produto com a Classe Model Categoria.
15. Testes das API's no Insomnia.
