import './Carousel.css';
import imgAnterior from '../assets/carousel/anterior.svg';
import imgProximo from '../assets/carousel/proximo.svg';
import { useCallback, useEffect, useState } from 'react';
import CarouselItem from './CarouselItem';
import ICarouselItem from '../types/ICarouselItem';
import backEnd from '../services/BackEnd';

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
    <div className='margem_10 padding_1 div_promocional'>
      <span className='fonte_negrito primeira_compra'>primeira compra?</span><span className='fonte_normal reais_off'><b>R$25 OFF</b> A PARTIR DE <b>R$ 200</b></span><button className='fonte_negrito botao_primeira_25'>PRIMEIRA25</button>
    </div>
    <div id='div_carousel' className='margem_10'>
      <button className='botao_carousel_anterior' onClick={e => {e.preventDefault(); carouselMove(false);}}><img src={imgAnterior} alt='Ir para imagem anterior' /></button>
      <button className='botao_carousel_proximo' onClick={e => {e.preventDefault(); carouselMove(true);}}><img src={imgProximo} alt='Ir para imagem posterior' /></button>
      <div id='div_wrapper_carousel'>
        {
          [
            carouselItems.map((carouselItem, index) => <CarouselItem key={index} {...carouselItem} />)
          ]
        }
      </div>
    </div>
  </>);
}