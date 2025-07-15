import './FooterLink.css';
import PropsLinkFooter from '../types/PropsFooterLink';
import { Link } from 'react-router-dom';

export default function FooterLink(props: PropsLinkFooter) {
  return (<div>
    <Link to={props.link.endereco} className='fonte_normal footer_link'>{props.link.texto}</Link>
    <ul className='lista_topicos'>
      {
        [
          props.topicos.map(
            (topico, index) => <li className='fonte_normal topico' key={index}>{`- ${topico}`}</li>
          )
        ]
      }
    </ul>
  </div>);
}