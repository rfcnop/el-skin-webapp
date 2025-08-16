import PropsLinkFooter from '../types/PropsFooterLink';
import Link from 'next/link';
import styled from 'styled-components';

export default function FooterLink(props: PropsLinkFooter) {
  return (<div>
    <LinkFooter href={props.link.endereco}>{props.link.texto}</LinkFooter>
    <UlTopicos>
      {
        [
          props.topicos.map(
            (topico, index) => <LinkTopico href={props.link.endereco} key={index}>{`- ${topico}`}</LinkTopico>
          )
        ]
      }
    </UlTopicos>
  </div>);
}

const LinkFooter = styled(Link)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.normal };

      font-size: ${ ({theme}) => theme.tamanhoFonte.normal };
  line-height: 24px;

  text-align: center;
  text-decoration-line: underline;
  background: transparent;
  border: none;
  cursor: pointer;

  color: ${ ({theme}) => theme.cores.texto.secundaria };
`;

const UlTopicos = styled.ul`
  padding: 0;
  margin-top: 0;
  list-style-type: none;
`;

const LinkTopico = styled(Link)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.normal };

  font-size: ${ ({theme}) => theme.tamanhoFonte.pequeno };
  line-height: 21px;

  color: ${ ({theme}) => theme.cores.texto.quaternaria };

  display: block;
  padding-top: 1px;
  padding-bottom: 2px;
  text-decoration: none;
`;