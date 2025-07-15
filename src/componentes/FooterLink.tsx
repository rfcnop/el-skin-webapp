import './FooterLink.css';
import PropsLinkFooter from '../types/PropsFooterLink';

export default function FooterLink(props: PropsLinkFooter) {
  return (<div>
    <button className='fonte_normal footer_link'>{props.link.texto}</button>
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