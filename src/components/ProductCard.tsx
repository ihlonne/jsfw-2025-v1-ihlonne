import { Product } from '@/types';
import Image from 'next/image';

type ProductCardProps = {
  product: Product;
};

function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <div key={product.id}>
      <div className='relative w-full aspect-[3/4] overflow-hidden rounded-xs'>
        <Image
          src={product.image.url}
          alt={product.image.alt}
          fill
          className='object-cover'
          sizes='(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw'
        />
        {product.discountedPrice &&
        product.discountedPrice <
          product.price ? (
          <span className='absolute top-4 right-0 inline-flex items-center rounded-l-md bg-red-800 px-3 py-2 text-xs font-medium text-white ring-1 ring-red-600/10 ring-inset'>
            {Math.round(
              ((product.price -
                product.discountedPrice) /
                product.price) *
                100
            )}
            %
          </span>
        ) : null}
      </div>

      <div className='flex justify-between mt-2'>
        <div className='flex flex-col justify-between align-center'>
          <h2 className='text-sm font-semibold'>
            {product.title}
          </h2>
          {product.reviews &&
          product.reviews.length > 0 ? (
            <div className='text-sm text-yellow-600'>
              {(
                product.reviews.reduce(
                  (sum, r) => sum + r.rating,
                  0
                ) / product.reviews.length
              ).toFixed(1)}{' '}
              {(() => {
                const avg =
                  product.reviews.reduce(
                    (sum, r) => sum + r.rating,
                    0
                  ) / product.reviews.length;
                const full = Math.floor(avg);
                const half = avg % 1 >= 0.5;
                const empty =
                  5 - full - (half ? 1 : 0);

                return (
                  <span className='ml-1 text-yellow-500'>
                    {[...Array(full)].map(
                      (_, i) => (
                        <span key={`full-${i}`}>
                          ★
                        </span>
                      )
                    )}
                    {half && (
                      <span key='half'>⯨</span>
                    )}
                    {[...Array(empty)].map(
                      (_, i) => (
                        <span key={`empty-${i}`}>
                          ☆
                        </span>
                      )
                    )}
                  </span>
                );
              })()}
            </div>
          ) : (
            <span
              title="This product hasn't been rated yet"
              className='text-gray-400 text-sm'
            >
              No reviews
            </span>
          )}
        </div>

        {product.discountedPrice &&
        product.discountedPrice <
          product.price ? (
          <div className='flex flex-col'>
            <p className='text-sm text-gray-600 font-semibold'>
              ${product.discountedPrice}
            </p>
            <p className='text-sm line-through text-red-700'>
              ${product.price}
            </p>
          </div>
        ) : (
          <p className='text-sm text-gray-600'>
            ${product.price}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
