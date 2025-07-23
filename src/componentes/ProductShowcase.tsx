import './ProductShowcase.css';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import backEnd from '../services/BackEnd';
import IProduct from '../types/IProduct';

export default function ProductShowcase() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(
    () => {
      (async function() {
        const resposta = await backEnd.get<IProduct[]>('products');
        setProducts(resposta.data);
      })();
    }, []
  );

  return (<div className='margem_10 padding_1 div_showcase'>
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