import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ICarouselItem from '../../types/ICarouselItem';
import IProduct from '../../types/IProduct';

const PRODUCTS_URL = '/products';

const apiSlice = createApi(
  {
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
      baseUrl: process.env.EL_SKIN_BASE_URL || 'http://localhost:3001/',
      timeout: 5000,
      prepareHeaders: headers => { // nos headers dá pra botar token jwt de autenticação
        headers.set('Content-Type', 'application/json');
        return headers;
      }
    }),
    endpoints: builder => ({
      getProducts: builder.query<IProduct[], void>({
        query: () => PRODUCTS_URL
      }),
      getProductById: builder.query<IProduct, number>({ // o primeiro tipo especificado é o do que ele nos devolve e o segundo do que enviamos para ele
        query: id => `${PRODUCTS_URL}/${id}`
      }),
      getCarouselItems: builder.query<ICarouselItem[], void>({
        query: () => '/carousel'
      })
    })
  }
);

export default apiSlice;

export const { useGetProductsQuery, useGetCarouselItemsQuery, useGetProductByIdQuery } = apiSlice;
