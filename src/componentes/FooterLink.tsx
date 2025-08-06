import PropsLinkFooter from '../types/PropsFooterLink';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function FooterLink(props: PropsLinkFooter) {
  return (<div>
    <LinkFooter to={props.link.endereco}>{props.link.texto}</LinkFooter>
    <UlTopicos>
      {
        [
          props.topicos.map(
            (topico, index) => <LiTopico key={index}>{`- ${topico}`}</LiTopico>
          )
        ]
      }
    </UlTopicos>
  </div>);
}

const LinkFooter = styled(Link)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;

      font-size: 16px;
  line-height: 24px;

  text-align: center;
  text-decoration-line: underline;
  background: transparent;
  border: none;
  cursor: pointer;

  color: #222222;
`;

const UlTopicos = styled.ul`
  padding: 0;
  margin-top: 0;
  list-style-type: none;
`;

const LiTopico = styled.li`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;

  font-size: 14px;
  line-height: 21px;

  color: #878787;

  padding-top: 1px;
  padding-bottom: 2px;
`;