import './Sobre.css';
import imagemBottom from '../assets/sobre/imagem_sobre_bottom.png';
import imagemLeft from '../assets/sobre/imagem_sobre_left.png';
import imagemRight from '../assets/sobre/imagem_sobre_right.png';
import imagemFaleConosco from '../assets/sobre/fale_conosco.svg';
import { Link } from 'react-router-dom';

export default function Sobre() {
  return (
    <main>
      <div className='margem_10 div_sobre'>
        <div className='padding_1 div_top_sobre'>
          <div id='div_left'>
            <br />
            <div className='fonte_negrito div_titulo'>Sobre a AL SKIN</div>
            <br />
            <div className='fonte_normal div_textao'>
              QUEM SOMOS<br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.<br />
              <br />
              POR QUE EXISTIMOS?<br />
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<br />
              <br />
              O QUE A GENTE FAZ?<br />
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.<br />
            </div>
            <br />
            <img className='img_outras' src={imagemLeft} alt='Conta-gotas' />
          </div>
          <div id='div_right'>
            <img className='img_outras' src={imagemRight} alt='Bisnaga de plástico' />
            <div className='div_textao'>
              <br />
              <br />
              VAMOS CONVERSAR?<br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              <br />
              <br />
              <br />
            </div>
            <div id='div_link_fale_conosco'>
              <Link id='link_fale_conosco' to='/faleconosco'><img src={imagemFaleConosco} alt='Fale conosco' /><div className='fonte_negrito texto_fale_conosco'>Fale conosco</div></Link>
            </div>
          </div>
        </div>
        <img id='img_dente' src={imagemBottom} alt='Caiu meu dente' />
      </div>
    </main>
  );
}