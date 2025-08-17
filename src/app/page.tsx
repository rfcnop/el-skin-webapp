import Carousel from '../componentes/Carousel';
import ProductGrid from '../componentes/ProductGrid';

async function fetchGet(caminhoRelativo: string) {
  const url = (process.env.EL_SKIN_BASE_URL || 'http://localhost:3000/api/') + caminhoRelativo;
  const resposta = await fetch(url);
  return resposta.json();
}

export default async function Home() {
  const produtos = await fetchGet('products/');
  const carouselItems = await fetchGet('carousel/');

  return (
    <main data-testid='main_home'>
      <Carousel carouselItems={carouselItems} />
      <ProductGrid products={produtos} />
    </main>
  );
}