import { fetcher } from '@/utils/axios';
import { Product } from '@/types';

const getProducts = async () => {
  const { data: products } = await fetcher<{
    data: Product[];
  }>('/online-shop');

  return products;
};

export default getProducts;
