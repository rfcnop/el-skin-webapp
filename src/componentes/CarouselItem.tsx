import ICarouselItem from '../types/ICarouselItem';
import imgEnviar from '../assets/enviar.svg';
import styled from 'styled-components';

export default function CarouselItem(props: ICarouselItem) {
  return (
    <DivItemCarousel data-testid='div_item_carousel' className="div_item_carousel">
      <DivImagemCarousel
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
      >
        <DivInfoNaImagem>
          <DivSubtituloCarousel>{props.subtitle}</DivSubtituloCarousel>
          <DivTituloCarousel>{props.title}</DivTituloCarousel>
          <DivUseOCupom>{props.description}</DivUseOCupom>
          <BotaoComprarCarousel>comprar agora<ImagemGo src={imgEnviar} alt="Ir Comprar" /></BotaoComprarCarousel>
        </DivInfoNaImagem>
      </DivImagemCarousel>
    </DivItemCarousel>
  );
}

const DivItemCarousel = styled.div`
  width: 100%; /* necessário? */
  height: 100%; /* necessário? */
  flex: 1 0 100%;
`;

const DivImagemCarousel = styled.div`
  width: 80vw;
  aspect-ratio: 2.11;
  background-size: cover;
  display: flex;
`;

const DivInfoNaImagem = styled.div`
  position: relative;
  top: 43%;
  left: 12%;
  width: 330px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

const DivSubtituloCarousel = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.normal };
  font-size: ${ ({theme}) => theme.tamanhoFonte.muitoGrande };
  line-height: 36px;

  text-align: center;
  text-transform: lowercase;

  color: ${ ({theme}) => theme.cores.texto.carrossel };
`;

const DivTituloCarousel = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.bold };
  font-size: ${ ({theme}) => theme.tamanhoFonte.gigante };
  line-height: 62px;

  text-align: center;
  text-transform: lowercase;

  color: ${ ({theme}) => theme.cores.texto.carrossel };
`;

const DivUseOCupom = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.normal };
  font-size: ${ ({theme}) => theme.tamanhoFonte.normal };
  line-height: 24px;

  text-align: center;

  color: ${ ({theme}) => theme.cores.texto.carrossel };
`;

const BotaoComprarCarousel = styled.button`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.normal };
  background: #7045F5;
  border-radius: ${ ({theme}) => theme.borderRadius.medio };
  border: none;

  font-size: ${ ({theme}) => theme.tamanhoFonte.grande };
  line-height: 30px;
  margin-top: 23px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 3px;
  padding-bottom: 3px;
  

  text-align: center;
  text-transform: lowercase;

  color: ${ ({theme}) => theme.cores.texto.terciaria };
  transform: rotate(0.25deg);
  cursor: pointer;
  display:flex;
  align-items: center;
`;

const ImagemGo = styled.img`
  padding-left: 5px;
`;