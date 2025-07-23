import './ProductCard.css';
import Product from '../types/IProduct';
import sacola from '../assets/sacola.svg';

function corDaTag(tag: string) {
  switch (tag) {
  case 'protection':
  case 'proteção':
    return '#5ED4DC';
  case 'face':
  case 'rosto':
    return '#DC5EB1';
  case 'hydration':
  case 'hidratação':
    return '#90EE90';
  case 'sun':
  case 'sol':
    return '#FFD700';
  case 'cleansing':
  case 'limpeza':
    return '#b7b7dbff';
  case 'anti-aging':
  case 'rejuvenecedor':
    return '#6495ED';
  case 'lips':
  case 'lábios':
    return '#DC143C';
  case 'exfoliation':
  case 'esfoliante':
    return '#F08080';
  case 'toning':
  case 'tônico':
    return '#00008B';
  case 'body':
  case 'corpo':
    return '#8FBC8B';
  default:
    return '#808000';
  }
}

export default function ProductCard(product: Product) {
  return (
    <div className='div_card_externo'>
      <div className='div_card_interno'>
        <img className='img_produto' src={product.image} alt={`imagem de ${product.name}`} />
        <div className='div_altura_texto_card'>
          <div className='fonte_negrito div_nome'>{product.name}</div>
          <div className='fonte_normal div_descricao'>{product.description}</div>
        </div>
        <br />
        <div className='div_produto'>
          {
            [
              product.tags.map((tag, index) => {
                return <button style={{ backgroundColor: corDaTag(tag) }} className='fonte_negrito tag_produto' key={index}>{tag}</button>;
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
      </div>
    </div>);
}