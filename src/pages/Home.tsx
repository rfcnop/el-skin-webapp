import Carousel from '../componentes/Carousel';
import ProductGrid from '../componentes/ProductGrid';

export default function Home() {
  return (
    <main data-testid='main_home'>
      <Carousel />
      <ProductGrid />
    </main>
  );
}