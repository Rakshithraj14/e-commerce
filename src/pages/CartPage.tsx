import React from 'react';
import { useCart } from '../store/CartContext';
import { ShoppingCartIcon, Trash2Icon, PlusIcon, MinusIcon } from '../components/icons';
import { Button } from '../components/ui/Button';

export const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartCount, totalPrice } = useCart();

  if (cartCount === 0) {
    return (
      <div className="text-center py-16">
        <ShoppingCartIcon className="h-24 w-24 mx-auto text-gray-300" />
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">Your cart is empty</h2>
        <p className="mt-2 text-gray-600">Looks like you haven't added anything to your cart yet.</p>
        <a href="#/" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
          Start Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Shopping Cart</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <div key={item.id} style={{ background: '#FFFFFF' }} className="flex items-center p-4 border rounded-lg shadow-sm">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-contain mr-4" />
              <div className="flex-grow">
                <p className="font-semibold text-gray-800 line-clamp-2">{item.title}</p>
                <p className="text-sm text-gray-500">GPU {item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 text-gray-600 hover:bg-gray-100 rounded-l-md"><MinusIcon className="h-4 w-4" /></button>
                  <span className="px-3 text-sm font-semibold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 text-gray-600 hover:bg-gray-100 rounded-r-md"><PlusIcon className="h-4 w-4" /></button>
                </div>
                <p className="font-bold w-20 text-right">GPU {(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-600"><Trash2Icon className="h-5 w-5" /></button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 p-6 rounded-lg border h-fit sticky top-24">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal ({cartCount} items)</span>
              <span>GPU {totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600 font-semibold">FREE</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t mt-2">
              <span>Total</span>
              <span>GPU {totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <Button className="w-full mt-6">Proceed to Checkout</Button>
          <Button onClick={clearCart} variant="secondary" className="w-full mt-2">Clear Cart</Button>
        </div>
      </div>
    </div>
  );
};
