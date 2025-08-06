import lupa from '../assets/lupa.svg';
import sacola from '../assets/sacola.svg';
import { Link } from 'react-router-dom';
import CarrinhoModal from './CarrinhoModal';
import { useSearchContext } from '../contexts/SearchContext';
import { useCarrinhoContext } from '../contexts/CartContext';
import styled from 'styled-components';

export default function Header() {
  const { search, setSearch } = useSearchContext();
  const { itensCarrinho } = useCarrinhoContext();

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function onClickSearch(event: React.MouseEvent<HTMLFormElement, MouseEvent>) {
    event.preventDefault();
    if (search.trim())
      window.location.replace('#resultado_da_busca');
  }

  function onClickBotaoCarrinho(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation();
    const divCarrinhoModalOverlay = document.getElementById('div_carrinho_modal_overlay');
    if (divCarrinhoModalOverlay) {
      const estaEscondido = divCarrinhoModalOverlay.style.display === '' || divCarrinhoModalOverlay.style.display === 'none';
      if (estaEscondido) {
        divCarrinhoModalOverlay.style.display = 'unset';
        divCarrinhoModalOverlay.focus();
      }
      else
        divCarrinhoModalOverlay.style.display = 'none';
    }
  }

  const opcoesMenu = [
    'Categorias',
    'Tipo de pele',
    'Necessidade',
    'Ingredientes',
  ];

  return (
    <header>
      <CarrinhoModal />
      <DivHeader>
        <DivBarraSuperior>
          <LinkLogo to=''>
            AL SKIN
          </LinkLogo>
          <FormBarraDePesquisa onSubmit={onClickSearch}>
            <DivInput>
              <CaixaDePesquisa
                data-testid='input_pesquisa'
                placeholder="O que você está procurando?"
                value={search}
                onChange={handleOnChange}
              />
            </DivInput>
            <DivLupa>
              <BotaoLupa data-testid='botao_lupa' type='submit'>
                <img src={lupa} alt="Sacola" />
              </BotaoLupa>
            </DivLupa>
          </FormBarraDePesquisa>
          <DivSacola>
            <div>
              <BotaoSacola data-testid='botao_sacola' onClick={onClickBotaoCarrinho}>
                <img src={sacola} alt="Sacola" />
              </BotaoSacola>
              <SpanSacola data-testid='span_texto_quantidade_carrinho'>{
                itensCarrinho.length ?
                  itensCarrinho.reduce(
                    (acumulador, item) => acumulador + item.quantidade
                    , 0)
                  :
                  ''}
              </SpanSacola>
            </div>
          </DivSacola>
        </DivBarraSuperior>
      </DivHeader>
      <DivHeader>
        <DivMenu>
          {opcoesMenu.map((opcao, index) => (
            <DivOpcao key={index}>
              {opcao}
            </DivOpcao>
          ))}
          <DivPromocao>Kits até 50% OFF</DivPromocao>
        </DivMenu>
      </DivHeader>
      <DivHR>
        <HRHeader />
      </DivHR>
    </header>
  );
}

const DivHeader = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  padding-left: 1%;
  padding-right: 1%;
  display:flex;
  justify-content: center;
  background-color: ${ ({theme}) => theme.cores.background.primaria };
`;

const DivBarraSuperior = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const LinkLogo = styled(Link)`
  flex-grow: 1;
  text-align: left;

  font-family: 'Shippori Antique';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.normal };
  font-size: ${ ({theme}) => theme.tamanhoFonte.muitoGrande };
  line-height: 35px;
  cursor: pointer;

  color: ${ ({theme}) => theme.cores.texto.secundaria };
  text-decoration: none;
`;

const FormBarraDePesquisa = styled.form`
  flex-grow: 3;
  background: #F5F5F5;
  border-radius: ${ ({theme}) => theme.borderRadius.medio };
  align-items: center;
  display: flex;
`;

const DivInput = styled.div`
  width: 100%;
  padding-left: 10px;
`;

const CaixaDePesquisa = styled.input`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.normal };

  background: transparent;
  border: none;
  width: 100%;

  font-size: ${ ({theme}) => theme.tamanhoFonte.normal };
  line-height: 24px;

  color: ${ ({theme}) => theme.cores.texto.quaternaria };

  &:focus {
    outline: none;
  }
`;

const DivLupa = styled.div`
  padding-right: 10px;
`;

const BotaoLupa = styled.button`
  background: transparent;
  border: none;
  float: right;
  cursor: pointer;
`;

const DivSacola = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: right;
  margin-top: 5px;
`;

const BotaoSacola = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const SpanSacola = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.bold };
  vertical-align: text-bottom;
`;

const DivMenu = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: left;
  width: 100%;
`;

const DivOpcao = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.normal };
  margin-right:7%;

  font-size: ${ ({theme}) => theme.tamanhoFonte.pequeno };
  line-height: 21px;
  cursor: pointer;

  color: ${ ({theme}) => theme.cores.texto.secundaria };
`;

const DivPromocao = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.bold };

  color: ${ ({theme}) => theme.cores.texto.promocao };
  text-align: right;
  flex: 1;

  font-size: ${ ({theme}) => theme.tamanhoFonte.pequeno };
  line-height: 21px;

  cursor: pointer;
`;

const DivHR = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  background-color: ${ ({theme}) => theme.cores.background.primaria };
  width: 80%;
  padding-top: 7px;
  padding-bottom: 4px;
`;

const HRHeader = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  border: 1px solid;
  border-color: #CCCCCC;
`;