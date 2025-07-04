import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react'; 
import type { Product, CartItem } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const localData = localStorage.getItem('gbay-cart');
      return localData ? JSON.parse(localData) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('gbay-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart(prev =>
      prev.some(item => item.id === product.id)
        ? prev.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
          )
        : [...prev, { ...product, quantity }]
    );
  };

  const removeFromCart = (productId: number) =>
    setCart(prev => prev.filter(item => item.id !== productId));

  const updateQuantity = (productId: number, quantity: number) =>
    setCart(prev =>
      quantity <= 0
        ? prev.filter(item => item.id !== productId)
        : prev.map(item =>
            item.id === productId ? { ...item, quantity } : item
          )
    );

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((c, i) => c + i.quantity, 0);
  const totalPrice = cart.reduce((t, i) => t + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
};
