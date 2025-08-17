import '../types/IProduct';
import IProduct from '../types/IProduct';
import IItemCarrinho from '../types/IItemCarrinho';
import styled from 'styled-components';
import { useCart } from '../hooks/useCart';
import Image from 'next/image';

export default function CarrinhoModalItem({produto, itemCarrinho} : {produto: IProduct, itemCarrinho: IItemCarrinho}) {
  const { removeProduct, updateQuantidade } = useCart();

  return (
    <DivItemCarrinhoModal>
      <DivImagemItemCarrinhoModal>
        <ImagemItemCarrinho width='0' height='0' sizes='100vw' src={produto?.image} alt={produto?.name} />
      </DivImagemItemCarrinhoModal>
      <DivInfoItemCarrinhoModal>
        <SpanNegrito>{produto?.name}</SpanNegrito><br />
        Quantidade: <span data-testid='quantidade_item_carrinho_modal'>{ itemCarrinho.quantidade }</span>
        <DivBotoesQuantidadeItemCarrinhoModal>
          <BotaoQuantidadeItemCarrinhoModal data-testid='botao_quantidade_item_carrinho_modal_menos' onClick={e => {e.stopPropagation(); document.getElementById('div_carrinho_modal_overlay')?.focus(); updateQuantidade(produto ? produto.id : -1, itemCarrinho.quantidade - 1); }}>-</BotaoQuantidadeItemCarrinhoModal>
          <BotaoQuantidadeItemCarrinhoModal data-testid='botao_quantidade_item_carrinho_modal_mais' onClick={e => {e.stopPropagation(); updateQuantidade(produto ? produto.id : -1, itemCarrinho.quantidade + 1); }}>+</BotaoQuantidadeItemCarrinhoModal>
        </DivBotoesQuantidadeItemCarrinhoModal><br />
        <SpanNegrito>R$ {produto?.price.toFixed(2).replace('.', ',')}</SpanNegrito>
      </DivInfoItemCarrinhoModal>
      <DivRemoveItemCarrinhoModal>
        <BotaoRemoverItemCarrinhoModal data-testid='botao_item_remover_carrinho_modal' onClick={e => {e.stopPropagation(); document.getElementById('div_carrinho_modal_overlay')?.focus(); removeProduct(produto ? produto.id : -1); }}>🗑️</BotaoRemoverItemCarrinhoModal>
      </DivRemoveItemCarrinhoModal>
    </DivItemCarrinhoModal>);
}

const DivItemCarrinhoModal = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  margin-right: 15px;
`;

const DivImagemItemCarrinhoModal = styled.div`
  width: 30%;
  align-content: center;
`;

const ImagemItemCarrinho = styled(Image)`
  width: 100%;
  height: auto;
`;

const DivInfoItemCarrinhoModal = styled.div`
  width: 80%;
  padding-left: 5%;
`;

const SpanNegrito = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.bold };
`;

const DivBotoesQuantidadeItemCarrinhoModal = styled.div`
  float: right;
  margin-right: 12px;
`;

const BotaoQuantidadeItemCarrinhoModal = styled.button`
  margin-left: 4px;
  border: 1px solid;
  border-radius: ${ ({theme}) => theme.borderRadius.pequeno };
  cursor: pointer;
`;

const DivRemoveItemCarrinhoModal = styled.div`
  width: auto;
  align-content: center;
`;

const BotaoRemoverItemCarrinhoModal = styled.div`
  border: 1px solid;
  border-radius: ${ ({theme}) => theme.borderRadius.pequeno };
  cursor: pointer;
`;