import ProductCard from './ProductCard';
import { useEffect } from 'react';
import styled from 'styled-components';
import useSearch from '../hooks/useSearch';
import useProducts from '../hooks/useProducts';

export default function ProductGrid() {
  const { produtos, loadProducts, filteredProducts } = useProducts();
  const { search } = useSearch();
  const produtosBusca = filteredProducts(search);
  
  useEffect(
    () => {
      if (!produtos.length)
        loadProducts();
    }, [produtos.length, loadProducts]
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