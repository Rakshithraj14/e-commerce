import type { Product } from '../types';

const FAKE_STORE_API_URL = 'https://fakestoreapi.com';

export const api = {
  getProducts: async (): Promise<Product[]> => {
    const res = await fetch(`${FAKE_STORE_API_URL}/products`);
    if (!res.ok) throw new Error('Failed to fetch products');
    return (await res.json()) as Product[];        // 👈 assert
  },

  getProductById: async (id: number): Promise<Product> => {
    const res = await fetch(`${FAKE_STORE_API_URL}/products/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch product with id ${id}`);
    return (await res.json()) as Product;          // 👈 assert
  },

  getCategories: async (): Promise<string[]> => {
    const res = await fetch(`${FAKE_STORE_API_URL}/products/categories`);
    if (!res.ok) throw new Error('Failed to fetch categories');
    return (await res.json()) as string[];         // 👈 assert
  },
};
