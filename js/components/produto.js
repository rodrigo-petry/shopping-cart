const ListElement = document.querySelector('#produto ul');

const produtos = [
  { 
    titulo: 'Título do Produto #1', 
    descricao: 'Descrição falando detalhadamente sobre o produto.',
    preco: 'R$ 38.00' 
  },

  {
    titulo: 'Título do Produto #2',
    descricao: 'Descrição falando detalhadamente sobre o produto.',
    preco: 'R$ 50.00'
  }
];

function renderProdutos() {
  ListElement.innerHTML = '';

  for (produto of produtos) {
    const novoProduto = document.createElement('li');
    novoProduto.classList.add('list-group-item')

    const produtoTitulo = document.createElement('h2');
    const tituloText = document.createTextNode(produto.titulo);

    const produtoDescricao = document.createElement('p');
    const descricaoText = document.createTextNode(produto.descricao);

    const produtoPreco = document.createElement('p');
    produtoPreco.classList.add('preco');
    const precoText = document.createTextNode(produto.preco);

    produtoTitulo.appendChild(tituloText);
    produtoDescricao.appendChild(descricaoText);
    produtoPreco.appendChild(precoText);

    novoProduto.appendChild(produtoTitulo);
    novoProduto.appendChild(produtoDescricao);
    novoProduto.appendChild(produtoPreco);

    ListElement.appendChild(novoProduto);
  }
}

renderProdutos();