import './CarrinhoModalItem.css';
import '../types/IProduct';
import { useCarrinhoContext } from '../contexts/CartContext';
import IProduct from '../types/IProduct';
import IItemCarrinho from '../types/IItemCarrinho';

export default function CarrinhoModalItem({produto, itemCarrinho} : {produto: IProduct, itemCarrinho: IItemCarrinho}) {
  const { removeProduct, updateQuantidade } = useCarrinhoContext();

  return (
    <div className='div_item_carrinho_modal'>
      <div className='div_imagem_item_carrinho_modal'>
        <img className='imagem_item_carrinho' src={produto?.image} alt={produto?.name} />
      </div>
      <div className='div_info_item_carrinho_modal'>
        <span className='fonte_negrito'>{produto?.name}</span><br />
        Quantidade: { itemCarrinho.quantidade }
        <div className='div_botoes_quantidade_item_carrinho_modal'>
          <button className='botao_quantidade_item_carrinho_modal' onClick={e => {e.preventDefault(); document.getElementById('div_carrinho_modal_overlay')?.focus(); updateQuantidade(produto ? produto.id : -1, itemCarrinho.quantidade - 1); }}>-</button>
          <button className='botao_quantidade_item_carrinho_modal' onClick={e => {e.preventDefault(); updateQuantidade(produto ? produto.id : -1, itemCarrinho.quantidade + 1); }}>+</button>
        </div><br />
        <span className='fonte_negrito'>R$ {produto?.price.toFixed(2).replace('.', ',')}</span>
      </div>
      <div className='div_remove_item_carrinho_modal'>
        <button className='botao_item_remover_carrinho_modal' onClick={e => {e.preventDefault(); document.getElementById('div_carrinho_modal_overlay')?.focus(); removeProduct(produto ? produto.id : -1); }}>🗑️</button>
      </div>
    </div>);
}