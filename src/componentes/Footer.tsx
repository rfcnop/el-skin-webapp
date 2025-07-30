import './Footer.css';
import footerLinks from '../data/footerLinks.json';
import FooterLink from './FooterLink';
import { Link } from 'react-router-dom';

export default function Footer() {
  const redes_sociais = ['instagram', 'facebook', 'youtube', 'pintrest', 'twitter', 'linkedin', 'spotify'];
  return (
    <footer data-testid='footer_footer' className='margem_10 padding_1'>
      <div id='footer_top'>
        <br />
        <br />
        <br />
        <div className='div_centrado'>
          <div id="div_redes_sociais">
            {
              [
                redes_sociais.map(
                  (rede, index) => <Link className='link_share' to='/share' key={index}><img src={`/assets/share/${rede}.svg`} alt={`Compartilhar na Rede ${rede}`} /></Link>
                )
              ]
            }
          </div>
        </div>
        <br />
        <br />
        <div className='div_centrado'>
          <div id='div_links_footer'>
            {
              [
                footerLinks.map(
                  (footerLink, index) => <FooterLink key={index} {...footerLink} />
                )
              ]
            }
          </div>
        </div>
      </div>
      <div id='footer_bottom'>
        <br />
        <br />
        <div id='logo_bottom'>AL SKIN</div>
        <br />
        <div className='direito_e_endereco'>2023 AL SKIN. Todos os direitos reservados.</div>
        <br />
        <div className='direito_e_endereco'>Av. Sete de Setembro, 467 - São Paulo/SP - CEP: 05324-980.</div>
        <br />
        <br />
      </div>
    </footer>
  );
}