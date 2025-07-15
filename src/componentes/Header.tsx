import './Header.css';
import lupa from '../assets/lupa.svg';
import sacola from '../assets/sacola.svg';
import { useState } from 'react';

export default function Header() {
  const [textoBusca, setTextoBusca] = useState('');

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTextoBusca(event.target.value);
    console.log(textoBusca);
  }

  function onClickSearch(event: React.MouseEvent<HTMLFormElement, MouseEvent>) {
    event.preventDefault();
    if (textoBusca.trim()) {
      window.alert(`Você pesquisou ${textoBusca}`);
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
      <div className="margem_10 padding_1 div_header">
        <div className="div_barra_superior">
          <div className="div_logo">
            AL SKIN
          </div>
          <form onSubmit={onClickSearch} className="div_barra_de_pesquisa">
            <div className="div_input">
              <input
                className="fonte_normal caixa_de_pesquisa"
                placeholder="O que você está procurando?"
                value={textoBusca}
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
              <button className="botao_sacola">
                <img src={sacola} alt="Sacola" />
              </button>
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
