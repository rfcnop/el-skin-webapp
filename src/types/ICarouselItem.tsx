interface ICarouselItem {
  subtitle: string;
  title: string;
  description: string;
  backgroundImage: string;
  discount: string | null;
  coupon: string | null;
  positionX: number;
  positionY: number;
}

export default ICarouselItem;