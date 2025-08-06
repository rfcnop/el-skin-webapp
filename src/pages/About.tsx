import imagemBottom from '../assets/sobre/imagem_sobre_bottom.png';
import imagemLeft from '../assets/sobre/imagem_sobre_left.png';
import imagemRight from '../assets/sobre/imagem_sobre_right.png';
import imagemFaleConosco from '../assets/sobre/fale_conosco.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function About() {
  return (
    <MainAbout>
      <DivTopAbout>
        <DivLeftAbout>
          <br />
          <DivTituloAbout>Sobre a AL SKIN</DivTituloAbout>
          <br />
          <DivTextaoAbout>
            QUEM SOMOS<br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.<br />
            <br />
            POR QUE EXISTIMOS?<br />
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<br />
            <br />
            O QUE A GENTE FAZ?<br />
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.<br />
          </DivTextaoAbout>
          <br />
          <ImgContaGotas src={imagemLeft} alt='Conta-gotas' />
        </DivLeftAbout>
        <DivRightAbout>
          <ImgBisnaga src={imagemRight} alt='Bisnaga de plástico' />
          <DivTextaoAbout>
            <br />
            <br />
            VAMOS CONVERSAR?<br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            <br />
            <br />
            <br />
          </DivTextaoAbout>
          <DivLinkFaleConoscoAbout>
            <LinkFaleConoscoAbout to='/faleconosco'>
              <img src={imagemFaleConosco} alt='Fale conosco' />
              <DivTextoFaleConoscoAbout >Fale conosco</DivTextoFaleConoscoAbout>
            </LinkFaleConoscoAbout>
          </DivLinkFaleConoscoAbout>
        </DivRightAbout>
      </DivTopAbout>
      <ImgDente src={imagemBottom} alt='Caiu meu dente' />
    </MainAbout>
  );
}

const MainAbout = styled.main`
  background-color: #FFF;
  margin-left: 10%;
  margin-right: 10%;
`;

const DivTopAbout = styled.div`
  display: flex;
  padding-left: 1%;
  padding-right: 1%;
`;

const DivLeftAbout = styled.div`
  width: 40%;
`;

const DivRightAbout = styled.div`
  width: 60%;
`;

const DivTituloAbout = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;

  font-size: 20px;
  line-height: 30px;
  text-align: left;
  color: #000000;
`;

const DivTextaoAbout = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;

  font-size: 16px;
  line-height: 24px;
  text-align: left;
  color: #000000;
`;

const ImgContaGotas = styled.img`
  width: 100%;
  max-width: 500px;
  padding-right: 1%;
`;

const ImgBisnaga = styled.img`
  width: 100%;
  padding-left: 1%;
  max-width: 572px;
`;

const DivLinkFaleConoscoAbout = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkFaleConoscoAbout = styled(Link)`
  background: #94426E;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 50px;
  padding-right: 50px;
  text-decoration: none;

  cursor: pointer;
`;

const DivTextoFaleConoscoAbout = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: #FFFFFF;
`;

const ImgDente = styled.img`
  width: 100%;
`;