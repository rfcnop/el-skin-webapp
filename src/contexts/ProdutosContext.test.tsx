import { ProdutosContextProvider, useProductsContext } from './ProdutosContext';
import { render } from '@testing-library/react';

test('Deve executar useProductsContext() sem exceções dentro de ProdutosContextProvider', () => {
  function ComponenteTesteExceçãoProdutos() {
    useProductsContext();
    return (<></>);
  }

  const renderizacaoComContextProvider = () => render(
    <ProdutosContextProvider>
      <ComponenteTesteExceçãoProdutos />
    </ProdutosContextProvider>);

  expect(renderizacaoComContextProvider).not.toThrowError(Error);
});

test('Deve lançar exceção quando o useProductsContext() for usado fora de ProdutosContextProvider', () => {
  
  function ComponenteTesteExceçãoProdutos() {
    useProductsContext();
    return (<></>);
  }

  const renderizacaoSemContextProvider = () => render(
    //<ProdutosContextProvider>
    <ComponenteTesteExceçãoProdutos /> 
    //</ProdutosContextProvider>
  );
 
  expect(renderizacaoSemContextProvider).toThrowError(Error);
});