'use client';
import { useCartStore } from '@/stores/cartStore';
import { Product } from '@/types';
import toast from 'react-hot-toast';

const AddToCartButton = ({ product }: { product: Product }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleClick = () => {
    try {
      if (!product.id || !product.title || !product.price) {
        throw new Error('Invalid product data');
      }

      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        image: {
          url: product.image.url,
          alt: product.image.alt,
        },
      });

      toast.success(`${product.title} was added to the cart!`);
    } catch (error) {
      console.error('Add to cart failed:', error);
      toast.error('Something went wrong. Try again later.');
    }
  };

  return (
    <div className="mt-4 self-start">
      <button
        onClick={handleClick}
        className="bg-blue-600 text-white px-4 py-2 rounded-md shadow 
                   hover:bg-blue-700 hover:scale-105 transition cursor-pointer"
      >
        Add to cart
      </button>
    </div>
  );
};
export default AddToCartButton;
