import ICarouselItem from '../types/ICarouselItem';
import './CarouselItem.css';
import imgEnviar from '../assets/enviar.svg';

export default function CarouselItem(props: ICarouselItem) {
  function infoComDesconto() {
    return (<>
      <div className='fonte_negrito desconto'>{props.discount}</div>
      <div className='fonte_normal use_o_cupom'>use o cupom</div>
      <div className='fonte_negrito nome_cupom'>{props.coupon}</div>
    </>);
  }

  return (
    <div className="div_item_carousel">
      <div
        className="div_imagem_carrossel"
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
      >
        <div
          className="div_info_na_imagem"
          style={{ left: `${props.positionX}%`, top: `${props.positionY}%` }}
        >
          <div className='fonte_normal subtitulo_carrossel'>{props.subtitle}</div>
          <div className='fonte_negrito titulo_carrossel'>{props.title}</div>
          {
            props.discount ? infoComDesconto() : <div className='fonte_normal descricao_carrossel'>{props.description}</div>
          }
          <button className='fonte_normal comprar_carrossel'>comprar agora<img id='img_go' src={imgEnviar} alt="Ir Comprar" /></button>
        </div>
      </div>
    </div>
  );
}
