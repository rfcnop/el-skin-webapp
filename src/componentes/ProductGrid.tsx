import ProductCard from './ProductCard';
import styled from 'styled-components';
import useSearch from '../hooks/useSearch';
import { useGetProductsQuery } from '../store/api/apiSlice';
import { useEffect, useState } from 'react';
import IProduct from '../types/IProduct';

export default function ProductGrid() {
  const [produtosBusca, setProdutosBusca] = useState<IProduct[]>([]);
  const { data: products = [], isLoading, error } = useGetProductsQuery();
  const { search } = useSearch();

  useEffect(
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
      { isLoading && 'Carregando produtos...' }
      { error && (<DivErro>Erro ao carregar produtos: { JSON.stringify(error) } </DivErro>) }
      { !isLoading && !error && (produtosBusca.length ? 'nossos queridinhos estão aqui' : 'Nenhum produto atende aos critérios de busca') }
    </DivTituloShowcase>
    <br />
    <br />
    { !isLoading && !error && (<DivListaDeProdutos>
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