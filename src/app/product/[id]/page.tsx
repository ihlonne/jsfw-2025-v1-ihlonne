import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/productApi';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';
import AddToCartButton from '@/components/AddToCartButton';

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(params.id);
  if (!product) return notFound();

  return (
    <div className="flex justify-center items-center w-full my-12 h-auto">
      <div className="flex flex-col max-w-[1290px] w-full">
        <div className="flex flex-col md:flex-row w-full gap-4 px-2 xl:px-0">
          <div className="relative w-full md:w-1/2 aspect-[4/3] ">
            <Image
              src={product.image.url}
              alt={product.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-md"
            />
            {product.discountedPrice &&
            product.discountedPrice < product.price ? (
              <span className="absolute top-4 right-0 inline-flex items-center rounded-l-md bg-red-800 px-3 py-2 text-xs font-medium text-white ring-1 ring-red-600/10 ring-inset">
                {Math.round(
                  ((product.price - product.discountedPrice) / product.price) *
                    100
                )}
                %
              </span>
            ) : null}
          </div>

          <div className="flex flex-col justify-between">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="my-8">{product.description}</p>

            {product.discountedPrice &&
            product.discountedPrice < product.price ? (
              <div className="flex flex-col">
                <p className="text-gray-900 font-semibold text-lg">
                  ${product.discountedPrice}
                </p>
                <p className="text-sm line-through text-red-700">
                  ${product.price}
                </p>
              </div>
            ) : (
              <p className="text-sm text-gray-600">${product.price}</p>
            )}
            <AddToCartButton product={product} />
            <div className="flex gap-1 pt-4 md:pt-0">
              {product.tags?.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 rounded-md py-1 px-2 text-xs uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-12 px-2 xl:px-0 max-w-[900px] w-full m-auto">
          <div className="w-full">
            <h2 className="text-lg font-bold">Reviews</h2>
            {product.reviews && product.reviews.length > 0 ? (
              <div className="flex gap-2 text-md text-gray-900">
                {(
                  product.reviews.reduce((sum, r) => sum + r.rating, 0) /
                  product.reviews.length
                ).toFixed(1)}{' '}
                {(() => {
                  const avg =
                    product.reviews.reduce((sum, r) => sum + r.rating, 0) /
                    product.reviews.length;
                  const full = Math.floor(avg);
                  const half = avg % 1 >= 0.5;
                  const empty = 5 - full - (half ? 1 : 0);

                  return (
                    <span className="ml-1 text-yellow-500">
                      {[...Array(full)].map((_, i) => (
                        <span key={`full-${i}`}>★</span>
                      ))}
                      {half && <span key="half">⯨</span>}
                      {[...Array(empty)].map((_, i) => (
                        <span key={`empty-${i}`}>☆</span>
                      ))}
                    </span>
                  );
                })()}
                <p className="text-gray-400">
                  (Based on {product.reviews.length} reviews)
                </p>
              </div>
            ) : null}
          </div>
          <div className="flex flex-col gap-2 bg-blue-100 mt-2 p-2 rounded-md w-full">
            {product.reviews?.map((review) => (
              <div
                key={review.id}
                className="flex flex-col bg-white rounded-md p-2 "
              >
                <div className="flex gap-2 items-center">
                  <MdVerified className="fill-green-700" />{' '}
                  <p className="font-bold"> {review.username}</p>
                </div>
                <p>{review.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
