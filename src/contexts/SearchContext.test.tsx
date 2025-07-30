import { SearchContextProvider, useSearchContext } from './SearchContext';
import { render } from '@testing-library/react';

test('Deve executar useSearchContext() sem exceções dentro de SearchContextProvider', () => {
  function ComponenteTesteExceçãoSearch() {
    useSearchContext();
    return (<></>);
  }

  const renderizacaoComContextProvider = () => render(
    <SearchContextProvider>
      <ComponenteTesteExceçãoSearch />
    </SearchContextProvider>);

  expect(renderizacaoComContextProvider).not.toThrowError(Error);
});

test('Deve lançar exceção quando o useSearchContext() for usado fora de SearchContextProvider', () => {
  
  function ComponenteTesteExceçãoSearch() {
    useSearchContext();
    return (<></>);
  }

  const renderizacaoSemContextProvider = () => render(
    //<SearchContextProvider>
    <ComponenteTesteExceçãoSearch /> 
    //</SearchContextProvider>
  );
 
  expect(renderizacaoSemContextProvider).toThrowError(Error);
});