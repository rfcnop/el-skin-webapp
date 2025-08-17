'use client';

import ProductCard from './ProductCard';
import styled from 'styled-components';
import useSearch from '../hooks/useSearch';
import { useEffect, useState } from 'react';
import IProduct from '../types/IProduct';
import useProducts from '../hooks/useProducts';

export default function ProductGrid({ products }: { products : IProduct[] }) {
  const [produtosBusca, setProdutosBusca] = useState<IProduct[]>([]);
  const { search } = useSearch();
  const { setProducts } = useProducts();

  useEffect (
    () => {
      setProducts(products);
    }, [products, setProducts]);
  
  useEffect(
    () => {
      const lowerCaseSearch = search.toLowerCase();
      setProdutosBusca(
        products.filter(
          produto => produto.name.toLowerCase().includes(lowerCaseSearch) ||
            produto.description.toLowerCase().includes(lowerCaseSearch) ||
            produto.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearch))
        )
      );
    }, [search] //eslint-disable-line react-hooks/exhaustive-deps
  );

  return (<DivShowcase>
    <br />
    <DivTituloShowcase id='resultado_da_busca'>
      { !products && (<DivErro>Erro ao carregar produtos.</DivErro>) }
      { products && (produtosBusca.length ? 'nossos queridinhos estão aqui' : 'Nenhum produto atende aos critérios de busca') }
    </DivTituloShowcase>
    <br />
    <br />
    { products && (<DivListaDeProdutos>
      {
        [
          produtosBusca.map(
            (product, index) => <ProductCard key={index} product={product} />
          )
        ]
      }
    </DivListaDeProdutos>)
    }
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

const DivErro = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.bold };

  font-size: ${ ({theme}) => theme.tamanhoFonte.grande };
  line-height: 30px;

  text-align: center;
  text-transform: lowercase;
  
  color: ${ ({theme}) => theme.cores.texto.erro };
`;

const DivListaDeProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;