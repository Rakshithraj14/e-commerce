import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import type { Product } from '../types';
import { Spinner } from '../components/ui/Spinner';
import { ProductCard } from '../components/ui/ProductCard';
import HeroSlider from '../components/layout/HeroSlider';

export const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await api.getProducts();
        setProducts(data);
      } catch {
        setError('Could not load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <p className="text-center text-red-500 p-8">{error}</p>;

  return (
    <>
      <HeroSlider />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
