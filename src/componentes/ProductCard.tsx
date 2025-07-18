import './ProductCard.css';
import Product from '../types/Product';
import sacola from '../assets/sacola.svg';

export default function ProductCard(product: Product) {
  return (
    <div className='div_card'>
      <img className='img_produto' src={product.src} alt={`imagem de ${product.name}`} />
      <div className='fonte_negrito div_nome'>{product.name}</div>
      <div className='fonte_normal div_descricao'>{product.description}</div>
      <br />
      <div className='div_produto'>
        {
          [
            product.tags.map((tag, index) => {
              return <button style={{ backgroundColor: tag.color }} className='fonte_negrito tag_produto' key={index}>{tag.text}</button>;
            })
          ]
        }
      </div>
      <br />
      <div className='div_preco_comprar'>
        <div className='fonte_negrito preco_produto'>R$ {product.price.toFixed(2).replace('.', ',')}</div>
        <button className='fonte_negrito botao_comprar'>
          <div id='div_comprar'>
            Comprar
          </div>
          <div>
            <img id='sacola' src={sacola} alt={'Botão Comprar'} />
          </div>
        </button>
      </div>
    </div>);
}