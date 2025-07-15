import Carousel from '../componentes/Carousel';
import ProductCard from '../componentes/ProductCard';
import products from '../data/products.json';

export default function Home() {
  return (
    <main>
      <Carousel />
      <ProductCard {...products[0]} />
    </main>
  );
}