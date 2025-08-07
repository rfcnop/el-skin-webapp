import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import productService from '../services/productService';
import IProduct from '../types/IProduct';
import { useProductsContext } from '../contexts/ProdutosContext';
import styled from 'styled-components';
import useSearch from '../hooks/useSearch';

export default function ProductGrid() {
  const { products, setProducts } = useProductsContext();
  const { search } = useSearch();
  
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

  return (<DivShowcase>
    <br />
    <DivTituloShowcase id='resultado_da_busca'>
      { produtosBusca.length ? 'nossos queridinhos estão aqui' : 'Nenhum produto atende aos critérios de busca'}
    </DivTituloShowcase>
    <br />
    <br />
    <DivListaDeProdutos>
      {
        [
          produtosBusca.map(
            (product, index) => <ProductCard key={index} product={product} />
          )
        ]
      }
    </DivListaDeProdutos>
  </DivShowcase>);
}

const DivShowcase = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  padding-left: 1%;
  padding-right: 1%;
  background-color: ${ ({theme}) => theme.cores.background.primaria };
`;

const DivTituloShowcase = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.bold };

  font-size: ${ ({theme}) => theme.tamanhoFonte.grande };
  line-height: 30px;

  text-align: center;
  text-transform: lowercase;
  
  color: ${ ({theme}) => theme.cores.texto.primaria };
`;

const DivListaDeProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;