import ICarouselItem from '../types/ICarouselItem';
import './CarouselItem.css';
import imgEnviar from '../assets/enviar.svg';

export default function CarouselItem(props: ICarouselItem) {
  return (
    <div className="div_item_carousel">
      <div
        className="div_imagem_carrossel"
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
      >
        <div
          className="div_info_na_imagem"
          style={{ left: '$12%', top: '43%' }}
        >
          <div className='fonte_normal subtitulo_carrossel'>{props.subtitle}</div>
          <div className='fonte_negrito titulo_carrossel'>{props.title}</div>
          <div className='fonte_normal use_o_cupom'>{props.description}</div>
          <button className='fonte_normal comprar_carrossel'>comprar agora<img id='img_go' src={imgEnviar} alt="Ir Comprar" /></button>
        </div>
      </div>
    </div>
  );
}
