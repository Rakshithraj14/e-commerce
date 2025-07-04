import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import type { Product } from '../types';
import { Spinner } from '../components/ui/Spinner';
import { Button } from '../components/ui/Button';
import { PlusIcon, MinusIcon } from '../components/icons';
import { useCart } from '../store/CartContext';

interface Props {
  productId: number;
}

export const ProductDetailPage: React.FC<Props> = ({ productId }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const data = await api.getProductById(productId);
        setProduct(data);
      } catch {
        setError('Could not find the product you are looking for.');
      } finally {
        setLoading(false);
      }
    })();
  }, [productId]);

  if (loading) return <Spinner />;
  if (error) return <p className="text-center text-red-500 p-8">{error}</p>;
  if (!product) return null;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="p-6 rounded-lg flex justify-center items-center border">
          <img src={product.image} alt={product.title} className="max-h-96 object-contain" />
        </div>
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{product.title}</h1>
          <p className="text-sm text-gray-500 uppercase mb-4">{product.category}</p>
          <p className="text-3xl font-extrabold text-blue-600 mb-4">
            GPU {product.price.toFixed(2)}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-l-lg"
              >
                <MinusIcon className="h-5 w-5" />
              </button>
              <span className="px-4 font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-2 text-orange-600 hover:bg-gray-100 rounded-r-lg"
              >
                <PlusIcon className="h-5 w-5" />
              </button>
            </div>
            <Button onClick={() => addToCart(product, quantity)} className="flex-1">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
