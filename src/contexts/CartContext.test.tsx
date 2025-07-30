import { CarrinhoContextProvider, useCarrinhoContext } from './CartContext';
import { render } from '@testing-library/react';

test('Deve executar useCarrinhoContext() sem exceções dentro de CarrinhoContextProvider', () => {
  function ComponenteTesteExceçãoCarrinho() {
    useCarrinhoContext();
    return (<></>);
  }

  const renderizacaoComContextProvider = () => render(
    <CarrinhoContextProvider>
      <ComponenteTesteExceçãoCarrinho />
    </CarrinhoContextProvider>);

  expect(renderizacaoComContextProvider).not.toThrowError(Error);
});


test('Deve lançar exceção quando o useCarrinhoContext() for usado fora de CarrinhoContextProvider', () => {
  
  function ComponenteTesteExceçãoCarrinho() {
    useCarrinhoContext();
    return (<></>);
  }

  const renderizacaoSemContextProvider = () => render(
    //<CarrinhoContextProvider>
    <ComponenteTesteExceçãoCarrinho /> 
    //</CarrinhoContextProvider>
  ); // obs: <CarrinhoModal /> também serviria no lugar do <ComponenteTesteExceçãoCarrinho />
 
  expect(renderizacaoSemContextProvider).toThrowError(Error);
});