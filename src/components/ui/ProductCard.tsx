import React from 'react';
import type { Product } from '../../types';
import { useCart } from '../../store/CartContext';
import { Button } from './Button';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div
      className="card flex flex-col overflow-hidden group transition-transform duration-200 hover:-translate-y-1"
      style={{ minWidth: 220, maxWidth: 260, margin: 'auto' }}
    >
      <a href={`#/product/${product.id}`} className="block overflow-hidden p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-105"
          style={{ background: 'var(--input-bg)', borderRadius: 8 }}
        />
      </a>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-md font-semibold mb-2 flex-grow" style={{ color: 'var(--primary-text)' }}>
          <a href={`#/product/${product.id}`} className="hover:underline line-clamp-2" style={{ color: 'var(--primary-text)' }}>
            {product.title}
          </a>
        </h3>
        <p className="text-lg font-bold mb-3" style={{ color: 'var(--primary-text)' }}>
          <span className="font-bold text-lg text-orange-500">GPU {product.price.toFixed(2)}</span>
        </p>
        <Button
          onClick={() => addToCart(product)}
          className="w-full mt-auto"
          style={{ background: 'var(--button-bg)', color: 'var(--button-text)', fontWeight: 600, fontSize: '1rem', borderRadius: 6 }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
