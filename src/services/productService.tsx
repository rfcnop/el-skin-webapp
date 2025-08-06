import IProduct from '../types/IProduct';
import backEnd from './backEnds';

const productService = {
  async getProdutos() {
    const resposta = await backEnd.get<IProduct[]>('products');
    return resposta.data;
  },

  async getProdutoById(produtoId: number) {
    const resposta = await backEnd.get<IProduct>(`products/${produtoId}`);
    return resposta.data;
  }
};

export default productService;