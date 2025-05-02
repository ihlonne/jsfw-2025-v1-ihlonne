import { fetcher } from '@/utils/axios';
import { Product } from '@/types';

const getProducts = async () => {
  const { data: products } = await fetcher<{
    data: Product[];
  }>('/online-shop');

  return products;
};

const getProductById = async (
  id: string
): Promise<Product | null> => {
  try {
    const { data: product } = await fetcher<{
      data: Product;
    }>(`/online-shop/${id}`);
    return product;
  } catch (error) {
    console.error(
      'Failed to fetch product:',
      error
    );
    return null;
  }
};

export { getProducts, getProductById };
