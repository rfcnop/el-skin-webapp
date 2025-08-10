import cartSliceReducer, { addProduto, removeProduto, updateQuantidade } from './cartSlice';

test('Não deve alterar a quantidade de produtos no carrinho quando tentarem remover um produto que não está lá', () => {
  const idDoprodutoQueEstáNoCarrinho = 1;
  const estadoInicial = cartSliceReducer(undefined, addProduto({productId: idDoprodutoQueEstáNoCarrinho, quantidade: 1}));
  expect(estadoInicial).toHaveLength(1);

  const idDoprodutoQueNãoEstáNoCarrinho = 2;
  const novoEstado = cartSliceReducer(estadoInicial, removeProduto(idDoprodutoQueNãoEstáNoCarrinho));
  expect(novoEstado).toHaveLength(estadoInicial.length);
});

test('Não deve alterar a quantidade de produtos no carrinho quando tentarem atualizar a quantidade um produto que não está lá', () => {
  const idDoprodutoQueEstáNoCarrinho = 1;
  const estadoInicial = cartSliceReducer(undefined, addProduto({productId: idDoprodutoQueEstáNoCarrinho, quantidade: 1}));
  expect(estadoInicial).toHaveLength(1);

  const idDoprodutoQueNãoEstáNoCarrinho = 2;
  const novoEstado = cartSliceReducer(estadoInicial, updateQuantidade({produtoId: idDoprodutoQueNãoEstáNoCarrinho, quantidade: 5 }));
  expect(novoEstado).toHaveLength(estadoInicial.length);
  expect(novoEstado[0].quantidade).toBe(estadoInicial[0].quantidade);
});
