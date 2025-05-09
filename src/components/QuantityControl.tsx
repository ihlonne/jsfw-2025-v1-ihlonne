import { useCart } from '@/hooks/useCart';

type QuantityControlProps = {
  id: string;
  quantity: number;
};

export default function QuantityControl({
  id,
  quantity,
}: QuantityControlProps) {
  const { updateQuantity, removeItem } =
    useCart();

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    } else {
      removeItem(id);
    }
  };

  const handleIncrease = () => {
    updateQuantity(id, quantity + 1);
  };

  return (
    <div className='flex items-center border rounded w-fit'>
      <button
        onClick={handleDecrease}
        className='px-2 py-1 text-lg cursor-pointer'
      >
        −
      </button>
      <span className='px-3 py-1'>
        {quantity}
      </span>
      <button
        onClick={handleIncrease}
        className='px-2 py-1 text-lg cursor-pointer'
      >
        +
      </button>
    </div>
  );
}
