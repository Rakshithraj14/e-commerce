import React, { useState } from 'react';
import { ShoppingCartIcon, UserIcon, SearchIcon } from '../icons';
import { useCart } from '../../store/CartContext';

const categories = [
  'All Categories',
  'Electronics',
  'Fashion',
  'Home & Garden',
  'Toys',
  'Motors',
  'Collectibles',
];

export const Header = () => {
  const { cartCount } = useCart();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <header
      style={{ background: 'var(--primary-bg)', color: 'var(--primary-text)', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
      className="sticky top-0 z-50 border-b border-[var(--border-color)]"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Gbay branding left */}
        <div className="flex items-center min-w-[120px]">
          <span className="text-4xl font-bold tracking-tight" style={{ fontFamily: 'Arial, sans-serif', color: '#3665f3', letterSpacing: '1px' }}>
            Gbay
          </span>
        </div>
        {/* Search bar center, styled as in the image */}
        <div className="flex-1 flex justify-center">
          <form className="flex w-full max-w-3xl items-stretch" onSubmit={e => e.preventDefault()}>
            {/* Shop by category dropdown */}
            <div className="flex items-center border border-gray-300 rounded-l-full px-3 bg-white text-gray-700 text-sm font-medium cursor-pointer hover:bg-gray-100">
              <span>Shop by category</span>
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </div>
            {/* Search input */}
            <input
              type="search"
              placeholder="Search for anything"
              className="flex-1 px-4 py-2 outline-none border-t border-b border-gray-300 text-lg"
              style={{ minWidth: 0 }}
            />
            {/* All Categories dropdown */}
            <select
              className="border-t border-b border-gray-300 px-3 text-gray-700 text-base outline-none"
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              style={{ minWidth: 120 }}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            {/* Search button */}
            <button
              type="submit"
              className="bg-[#3665f3] hover:bg-blue-700 text-white font-semibold px-8 rounded-r-full text-lg ml-0"
              style={{ boxShadow: 'none' }}
            >
              Search
            </button>
            {/* Advanced link */}
            <a href="#" className="flex items-center ml-2 text-gray-500 text-sm hover:underline self-center">Advanced</a>
          </form>
        </div>
        {/* Cart/User right */}
        <div className="flex items-center space-x-6 min-w-[120px] justify-end">
          <a href="#/cart" className="relative" style={{ color: 'var(--primary-text)' }}>
            <ShoppingCartIcon className="h-7 w-7" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center h-6 w-6 text-xs font-bold text-white bg-red-500 rounded-full">
                {cartCount}
              </span>
            )}
          </a>
          <a href="#" style={{ color: 'var(--primary-text)' }}>
            <UserIcon className="h-7 w-7" />
          </a>
        </div>
      </nav>
    </header>
  );
};
