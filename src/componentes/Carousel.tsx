import imgAnterior from '../assets/carousel/anterior.svg';
import imgProximo from '../assets/carousel/proximo.svg';
import { useCallback, useEffect, useState } from 'react';
import CarouselItem from './CarouselItem';
import ICarouselItem from '../types/ICarouselItem';
import backEnd from '../services/backEnd';
import styled from 'styled-components';

export default function Carousel() {
  const [momentoUltimaMudancaCarrossel, setMomentoUltimaMudancaCarrossel] = useState(Date.now());
  const [scrollTarget, setScrollTarget] = useState(0);

  const [ carouselItems, setCarouselItems ] = useState<ICarouselItem[]>([]);

  useEffect(
    () => {
      (async function() {
        const resposta = await backEnd.get<ICarouselItem[]>('carousel');
        setCarouselItems(resposta.data);
      })();
    }, []
  );

  const carouselMove = useCallback(
    function (forward = true) {
      const carousel = document.getElementById('div_wrapper_carousel');
      if (carousel) {
        const itemListaCarousel = document.querySelector('.div_item_carousel');
        if (itemListaCarousel) {
          const nImagens = carousel.children.length;
          let newScrollTarget = scrollTarget;
          if (forward)
            newScrollTarget = (newScrollTarget + itemListaCarousel.clientWidth) % (nImagens * itemListaCarousel.clientWidth);
          else {
            newScrollTarget -= itemListaCarousel.clientWidth;
            if (newScrollTarget < 0)
              newScrollTarget += nImagens * itemListaCarousel.clientWidth;
          }

          if (carousel.scrollLeft !== newScrollTarget) {
            carousel.scrollLeft = newScrollTarget;
            setScrollTarget(newScrollTarget);
            setMomentoUltimaMudancaCarrossel(Date.now());
          }
        }
      }
    }, [scrollTarget]);

  useEffect(() => {
    const id = window.setTimeout(() =>
      carouselMove()
    , 2500);
    return () => clearTimeout(id);
  }, [momentoUltimaMudancaCarrossel, carouselMove]);

  return (<>
    <DivPromocional>
      <SpanPrimeiraCompra>primeira compra?</SpanPrimeiraCompra><SpanReaisOff><b>R$25 OFF</b> A PARTIR DE <b>R$ 200</b></SpanReaisOff><BotaoPrimeira25 >PRIMEIRA25</BotaoPrimeira25>
    </DivPromocional>
    <DivCarousel>
      <BotaoAnterior onClick={e => {e.stopPropagation(); carouselMove(false);}}><img src={imgAnterior} alt='Ir para imagem anterior' /></BotaoAnterior>
      <BotaoProximo data-testid='botao_carousel_proximo' onClick={e => {e.stopPropagation(); carouselMove(true);}}><img src={imgProximo} alt='Ir para imagem posterior' /></BotaoProximo>
      <DivWrapperCarousel data-testid='div_wrapper_carousel' id='div_wrapper_carousel'>
        {
          [
            carouselItems.map((carouselItem, index) => <CarouselItem key={index} {...carouselItem} />)
          ]
        }
      </DivWrapperCarousel>
    </DivCarousel>
  </>);
}

const DivPromocional = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  padding-left: 1%;
  padding-right: 1%;
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  background-color: ${ ({theme}) => theme.cores.background.promocao };
`;

const SpanPrimeiraCompra = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.bold };
  font-size: ${ ({theme}) => theme.tamanhoFonte.pequeno };
  line-height: 21px;
  padding-right:3%;

  color: ${ ({theme}) => theme.cores.texto.terciaria };
`;

const SpanReaisOff = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.normal };
  font-size: ${ ({theme}) => theme.tamanhoFonte.pequeno };
  line-height: 21px;
  padding-right:3%;

  color: ${ ({theme}) => theme.cores.texto.secundaria };
`;

const BotaoPrimeira25 = styled.button`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.bold };
  background: #FFFFFF;
  border-radius: ${ ({theme}) => theme.borderRadius.medio };
  border: none;

  font-size: ${ ({theme}) => theme.tamanhoFonte.pequeno };
  line-height: 21px;
  cursor: pointer;

  color: ${ ({theme}) => theme.cores.texto.secundaria };
`;

const DivCarousel = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  overflow: hidden; /* necessário? */
  align-items: center;
  position: relative;
`;

const BotaoAnterior = styled.button`
  position: absolute;
  top: 45%;
  left: 5%;
  border: none;
  background-color: transparent;
  z-index: 127;
  cursor: pointer;
`;

const BotaoProximo = styled.button`
  position: absolute;
  top: 45%;
  right: 5%;
  border: none;
  background-color: transparent;
  z-index: 127;
  cursor: pointer;
`;

const DivWrapperCarousel = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  list-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
`;
