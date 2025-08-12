import searchSlice, { setSearch, clearSearch } from './searchSlice';

test('Deve alterar o termo de busca', () => {
  const termo = 'sou um termo de busca';
  const novoEstado = searchSlice.reducer(undefined, setSearch(termo));
  expect(novoEstado).toBe(termo);
});

test('Deve limpar a busca', () => {
  const termo = 'sou um termo de busca';
  const estadoComTermo = searchSlice.reducer(undefined, setSearch(termo));
  expect(estadoComTermo).toBe(termo);
  
  const estadoLimpo = searchSlice.reducer(estadoComTermo, clearSearch());
  expect(estadoLimpo).toBe('');
});