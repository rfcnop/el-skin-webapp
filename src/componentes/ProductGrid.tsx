import './ProductGrid.css';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import productService from '../services/productService';
import IProduct from '../types/IProduct';
import { useProductsContext } from '../contexts/ProdutosContext';
import { useSearchContext } from '../contexts/SearchContext';

export default function ProductGrid() {
  const { products, setProducts } = useProductsContext();
  const { search } = useSearchContext();
  const [produtosBusca, setProdutosBusca] = useState<IProduct[]>([]);

  useEffect(
    () => {
      (async function() {
        const produtos = await productService.getProdutos();
        setProducts(produtos);
      })();
    }, [setProducts]
  );

  useEffect (
    () => {
      const lowerCaseSearch = search.toLowerCase();
      setProdutosBusca(
        produtosBusca => products.filter(
          produto => produto.name.toLowerCase().includes(lowerCaseSearch) ||
            produto.description.toLowerCase().includes(lowerCaseSearch) ||
            produto.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearch))
        )
      );
    }, [search, products]
  );

  return (<div className='margem_10 padding_1 div_showcase'>
    <br />
    <div id='resultado_da_busca' className='fonte_negrito div_titulo_showcase'>
      { produtosBusca.length ? 'nossos queridinhos estão aqui' : 'Nenhum produto atende aos critérios de busca'}
    </div>
    <br />
    <br />
    <div className='div_lista_de_produtos'>
      {
        [
          produtosBusca.map(
            (product, index) => <ProductCard key={index} product={product} />
          )
        ]
      }
    </div>
  </div>);
}