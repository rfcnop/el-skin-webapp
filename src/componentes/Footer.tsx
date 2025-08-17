import Image from 'next/image';
import footerLinks from '../data/footerLinks.json';
import FooterLink from './FooterLink';
import Link from 'next/link';
import styled from 'styled-components';

export default function Footer() {
  const redes_sociais = ['instagram', 'facebook', 'youtube', 'pintrest', 'twitter', 'linkedin', 'spotify'];
  return (
    <FooterElement data-testid='footer_footer'>
      <DivFooterTop>
        <br />
        <br />
        <br />
        <DivCentrado>
          <DivRedesSociais>
            {
              [
                redes_sociais.map(
                  (rede, index) => <LinkShare href='/share' key={index}>
                    <Image width='40' height='40' src={`/assets/share/${rede}.svg`} alt={`Compartilhar na Rede ${rede}`} />
                  </LinkShare>
                )
              ]
            }
          </DivRedesSociais>
        </DivCentrado>
        <br />
        <br />
        <DivCentrado>
          <DivLinksFooter>
            {
              [
                footerLinks.map(
                  (footerLink, index) => <FooterLink key={index} {...footerLink} />
                )
              ]
            }
          </DivLinksFooter>
        </DivCentrado>
      </DivFooterTop>
      <DivFooterBottom>
        <br />
        <br />
        <DivLogo>AL SKIN</DivLogo>
        <br />
        <DivDireitoEEndereco>2023 AL SKIN. Todos os direitos reservados.</DivDireitoEEndereco>
        <br />
        <DivDireitoEEndereco>Av. Sete de Setembro, 467 - São Paulo/SP - CEP: 05324-980.</DivDireitoEEndereco>
        <br />
        <br />
      </DivFooterBottom>
    </FooterElement>
  );
}

const FooterElement = styled.footer`
  margin-left: 10%;
  margin-right: 10%;
`;

const DivFooterTop = styled.div`
  background-color: ${ ({theme}) => theme.cores.background.secundaria };
`;

const DivCentrado = styled.div`
  display: flex;
  justify-content: center;
`;

const DivRedesSociais = styled.div`
  width: 31%;
  justify-content: space-between;
  display: flex;
`;

const LinkShare = styled(Link)`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const DivLinksFooter = styled.div`
  width: 45%;
  justify-content: space-between;
  display: flex;
`;

const DivFooterBottom = styled.div`
  text-align: center;
  background-color: ${ ({theme}) => theme.cores.background.terciaria };
`;

const DivLogo = styled.div`
  font-family: 'Shippori Antique';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.normal };
  font-size: ${ ({theme}) => theme.tamanhoFonte.muitoGrande };
  line-height: 35px;

  color: ${ ({theme}) => theme.cores.texto.terciaria };
`;

const DivDireitoEEndereco = styled.div`
  font-family: 'Shippori Antique';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.normal };
  font-size: ${ ({theme}) => theme.tamanhoFonte.pequeno };
  line-height: 20px;

  color: ${ ({theme}) => theme.cores.texto.terciaria }; 
`;