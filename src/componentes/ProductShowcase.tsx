import './ProductShowcase.css';
import ProductCard from './ProductCard';
import products from '../data/products.json';

export default function ProductShowcase() {
  return (
    <div className='margem_10 padding_1 div_showcase'>
      <br />
      <div className='fonte_negrito div_titulo_showcase'>
        nossos queridinhos estão aqui
      </div>
      <br />
      <br />
      <div className='div_lista_de_produtos'>
        {
          [
            products.map(
              (product, index) => <ProductCard key={index} {...product} />
            )
          ]
        }
      </div>
    </div>);
}