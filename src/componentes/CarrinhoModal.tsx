import { useMemo, useState } from 'react';
import Link from 'next/link';
import CarrinhoModalItem from './CarrinhoModalItem';
import styled from 'styled-components';
import { useCart } from '../hooks/useCart';
import useProducts from '../hooks/useProducts';

export default function CarrinhoModal() {
  const { itensCarrinho } = useCart();
  const { products: produtos } = useProducts();
  const [valorTotal, setValorTotal] = useState(0);

  useMemo(() => setValorTotal(
    itensCarrinho.reduce(
      (valorAcumulado, itemAtual) => {
        const produto = produtos.find(produto => produto.id === itemAtual.productId);
        return valorAcumulado + itemAtual.quantidade * (produto ? produto.price : 0);
      } , 0)
  ), [itensCarrinho, produtos]);

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

  return (<DivCarrinhoModalOverlay data-testid='div_carrinho_modal_overlay' id='div_carrinho_modal_overlay' tabIndex={-1} onClick={fecharCarrinho} onKeyDown={onKeyDown}>
    <DivCarrinhoModal onClick={e => e.stopPropagation()}>
      <DivBarraTituloCarrinho>
        <span>Carrinho</span>
        <BotaoFecharCarrinho data-testid='botao_fechar_carrinho' onClick={onClickBotaoFecharCarrinho}>X</BotaoFecharCarrinho>
      </DivBarraTituloCarrinho>
      <DivItensCarrinhoModal>
        {
          itensCarrinho.length ?
            itensCarrinho.map(
              (itemCarrinho, index) => {
                const produto = produtos.find(produto => produto.id === itemCarrinho.productId);
                if (produto)
                  return <CarrinhoModalItem key={itemCarrinho.productId} produto={produto} itemCarrinho={itemCarrinho} />;
                else
                  return (
                    <DivCentralizado key={index}>
                      Produto não encontrado
                    </DivCentralizado>);
              }
            )
            :
            <DivCentralizado>
              Carrinho vazio
            </DivCentralizado>
        }
      </DivItensCarrinhoModal>
      <DivTotalFinalizar hidden={!itensCarrinho.length}>
        <span>Total: </span><SpanValorTotal>R$ {valorTotal.toFixed(2).replace('.', ',')}</SpanValorTotal>
        <Link href='/finalizarcompra'>
          <BotaoFinalizarCarrinhoModal onClick={fecharCarrinho}>Finalizar Compra</BotaoFinalizarCarrinhoModal>
        </Link>
      </DivTotalFinalizar>
    </DivCarrinhoModal>
  </DivCarrinhoModalOverlay>);
}

const DivCarrinhoModalOverlay = styled.div`
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${ ({theme}) => theme.cores.background.overlay };
  backdrop-filter: blur(3px);
  z-index: 128;
`;

const DivCarrinhoModal = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.normal };
  position: fixed;
  
  width: 310px;
  right: 0;
  top: 0;

  background-color: ${ ({theme}) => theme.cores.background.primaria };
  border-left: 1px solid;
  border-bottom: 1px solid;
`;

const DivBarraTituloCarrinho = styled.div`
  display: flex;
  border-bottom: 1px solid;
  justify-content: space-between;
  padding: 5px;
`;

const BotaoFecharCarrinho = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  margin-right: 10px;
`;

const DivItensCarrinhoModal = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - 109px);
`;

const DivCentralizado = styled.div`
  text-align: center;
`;

const DivTotalFinalizar = styled.div`
  border-top: 1px solid;
  text-align: center;
  margin-top: 10px;
`;

const SpanValorTotal = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.bold };
`;

const BotaoFinalizarCarrinhoModal = styled.button`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.normal };
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  padding: 5px;
  font-size: medium;
  border: 0;
  border-top: 1px solid;
`;