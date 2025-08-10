import searchSliceReducer, { setSearch, clearSearch } from './searchSlice';

test('Deve alterar o termo de busca', () => {
  const termo = 'sou um termo de busca';
  const novoEstado = searchSliceReducer(undefined, setSearch(termo));
  expect(novoEstado).toBe(termo);
});

test('Deve limpar a busca', () => {
  const termo = 'sou um termo de busca';
  const estadoComTermo = searchSliceReducer(undefined, setSearch(termo));
  expect(estadoComTermo).toBe(termo);
  
  const estadoLimpo = searchSliceReducer(estadoComTermo, clearSearch());
  expect(estadoLimpo).toBe('');
});