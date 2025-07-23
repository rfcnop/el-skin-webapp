import './Header.css';
import lupa from '../assets/lupa.svg';
import sacola from '../assets/sacola.svg';
import { Link } from 'react-router-dom';
import CarrinhoModal from './CarrinhoModal';
import { useSearchContext } from '../contexts/SearchContext';
import { useCarrinhoContext } from '../contexts/CarrinhoContext';

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
    event.preventDefault();
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
      <div className="margem_10 padding_1 div_header">
        <div className="div_barra_superior">
          <Link className="link_logo" to=''>
            AL SKIN
          </Link>
          <form onSubmit={onClickSearch} className="div_barra_de_pesquisa">
            <div className="div_input">
              <input
                className="fonte_normal caixa_de_pesquisa"
                placeholder="O que você está procurando?"
                value={search}
                onChange={handleOnChange}
              />
            </div>
            <div className="div_lupa">
              <button className="botao_lupa" type='submit'>
                <img src={lupa} alt="Sacola" />
              </button>
            </div>
          </form>
          <div className="div_sacola">
            <div>
              <button className="botao_sacola" onClick={onClickBotaoCarrinho}>
                <img src={sacola} alt="Sacola" />
              </button>
              <span id='span_texto_quantidade_carrinho' className='fonte_negrito'>{
                itensCarrinho.length ?
                  itensCarrinho.reduce(
                    (acumulador, item) => acumulador + item.quantidade
                    , 0)
                  :
                  ''}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="margem_10 padding_1 div_header">
        <div className="div_menu">
          {opcoesMenu.map((opcao, index) => (
            <div className="fonte_normal div_opcao" key={index}>
              {opcao}
            </div>
          ))}
          <div className="fonte_negrito div_promocao">Kits até 50% OFF</div>
        </div>
      </div>
      <div className="margem_10 div_hr">
        <hr id="hr" />
      </div>
    </header>
  );
}
