import { useMemo, useState } from 'react';
import './CarrinhoModal.css';
import { useCarrinhoContext } from '../contexts/CarrinhoContext';
import { useProductsContext } from '../contexts/ProdutosContext';
import { Link } from 'react-router-dom';
import CarrinhoModalItem from './CarrinhoModalItem';

export default function CarrinhoModal() {

  const { itensCarrinho } = useCarrinhoContext();
  const { products } = useProductsContext();

  const [valorTotal, setValorTotal] = useState(0);

  useMemo(() => setValorTotal(
    itensCarrinho.reduce(
      (valorAcumulado, itemAtual) => {
        const produto = products.find(produto => produto.id === itemAtual.id);
        return valorAcumulado + itemAtual.quantidade * (produto ? produto.price : 0);
      } , 0)
  ), [itensCarrinho, products]);

  function onClickBotaoFecharCarrinho(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation();
    fecharCarrinho();
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape')
      fecharCarrinho();
  }

  function fecharCarrinho() {
    const divCarrinhoModal = document.getElementById('div_carrinho_modal_overlay');
    if (divCarrinhoModal)
      divCarrinhoModal.style.display = 'none';
  }

  return (<div data-testid='div_carrinho_modal_overlay' id='div_carrinho_modal_overlay' tabIndex={-1} onClick={fecharCarrinho} onKeyDown={onKeyDown}>
    <div id='div_carrinho_modal' className='fonte_normal' onClick={e => e.stopPropagation()}>
      <div id='div_barra_titulo_carrinho'>
        <span>Carrinho</span>
        <button id='botao_fechar_carrinho' onClick={onClickBotaoFecharCarrinho}>X</button>
      </div>
      <div id='div_itens_carrinho_modal'>
        {
          itensCarrinho.length ?
            itensCarrinho.map(
              itemCarrinho => {
                const produto = products.find(produto => produto.id === itemCarrinho.id);
                if (produto)
                  return <CarrinhoModalItem key={itemCarrinho.id} produto={produto} itemCarrinho={itemCarrinho} />;
                else
                  return (
                    <div key={itemCarrinho.id} style={{ textAlign: 'center' }}>
                      Produto não encontrado
                    </div>);
              }
            )
            :
            <div style={{ textAlign: 'center' }}>
              Carrinho vazio
            </div>
        }
      </div>
      <div id='div_total_finalizar' hidden={!itensCarrinho.length}>
        <span>Total: </span><span className='fonte_negrito'>R$ {valorTotal.toFixed(2).replace('.', ',')}</span>
        <Link to='/finalizarcompra'>
          <button id='botao_finalizar_carrinho_modal' className='fonte_normal' onClick={fecharCarrinho}>Finalizar Compra</button>
        </Link>
      </div>
    </div>
  </div>);
}