import IProduct from '../types/IProduct';
import sacola from '../assets/sacola.svg';
import { useCarrinhoContext } from '../contexts/CartContext';
import styled from 'styled-components';

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
    return '#000000';
  }
}

export default function ProductCard({ product } : { product: IProduct }) {
  const { addProduct } = useCarrinhoContext();

  return (
    <DivCardExterno>
      <DivCardInterno>
        <ImgProduto src={product.image} alt={`imagem de ${product.name}`} />
        <DivAlturaTextoCard>
          <DivNome>{product.name}</DivNome>
          <DivDescricao>{product.description}</DivDescricao>
        </DivAlturaTextoCard>
        <br />
        <div>
          {
            [
              product.tags.map((tag, index) => {
                return <ButtonTagProduto style={{ backgroundColor: corDaTag(tag) }} key={index}>{tag}</ButtonTagProduto>;
              })
            ]
          }
        </div>
        <br />
        <DivPrecoComprar>
          <DivPrecoProduto>R$ {product.price.toFixed(2).replace('.', ',')}</DivPrecoProduto>
          <ButtonComprar data-testid='botao_comprar' onClick={e => {e.stopPropagation(); addProduct(product.id);}}>
            <DivComprar>
              Comprar
            </DivComprar>
            <div>
              <ImgSacola src={sacola} alt={'Botão Comprar'} />
            </div>
          </ButtonComprar>
        </DivPrecoComprar>
      </DivCardInterno>
    </DivCardExterno>);
}

const DivCardExterno = styled.div`
  min-width: 25%;
  margin-bottom: 50px;
`;

const DivCardInterno = styled.div`
  width: 230px;
`;

const DivAlturaTextoCard = styled.div`
  height: 140px;
`;

const ImgProduto = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const DivNome = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;

  color: #222222;
  cursor: pointer;
`;

const DivDescricao = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #878787;
`;

const ButtonTagProduto = styled.button`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;

  width: 91px;
  border: none;
  margin-right: 5px;

  font-size: 13px;
  line-height: 20px;
  text-align: center;
  text-transform: lowercase;

  border-radius: 8px;

  color: #FFFFFF;

  transform: rotate(0.25deg);
  cursor: pointer;
`;

const DivPrecoComprar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 215px;
`;

const DivPrecoProduto = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;

  font-size: 20px;
  line-height: 30px;

  color: #222222;
`;

const ButtonComprar = styled.button`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;

  display: flex;
  font-size: 20px;
  line-height: 30px;
  border: none;
  text-transform: lowercase;

  color: #FFFFFF;
  background-color: #7045F5;
  border-radius: 8px;
  transform: rotate(0.25deg);
  cursor: pointer;
`;

const DivComprar = styled.div`
  padding-left: 5px;
  padding-right: 5px;
`;

const ImgSacola = styled.img`
  margin-top: 3px;
  float: right;
`;