let botaoOrdenarPorPeco = document.getElementById('btnOrdenarPorPreco')

botaoOrdenarPorPeco.addEventListener('click', ordenarPorPreco)

function ordenarPorPreco() {
      let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
      exibirOsLivrosNaTela(livrosOrdenados);       
}

