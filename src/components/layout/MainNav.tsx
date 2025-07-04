import React from 'react';

const navLinks = [
  { label: 'Gbay Live', href: '#' },
  { label: 'Saved', href: '#' },
  { label: 'Motors', href: '#', expandable: true },
  { label: 'Electronics', href: '#', expandable: true },
  { label: 'Collectibles', href: '#', expandable: true },
  { label: 'Home & Garden', href: '#', expandable: true },
  { label: 'Clothing, Shoes & Accessories', href: '#', expandable: true },
  { label: 'Toys', href: '#', expandable: true },
  { label: 'Sporting Goods', href: '#', expandable: true },
  { label: 'Business & Industrial', href: '#', expandable: true },
  { label: 'Jewelry & Watches', href: '#', expandable: true },
  { label: 'Refurbished', href: '#' },
];

const MainNav: React.FC = () => (
  <nav
    style={{ background: 'var(--primary-bg)', borderBottom: '1px solid var(--border-color)', fontSize: 15 }}
    className="w-full overflow-x-auto"
  >
    <div className="max-w-7xl mx-auto px-4 flex items-center h-12 space-x-6 whitespace-nowrap">
      {navLinks.map(link => (
        <a
          key={link.label}
          href={link.href}
          className="flex items-center px-2 py-1 hover:underline hover:text-[var(--accent)]"
          style={{ color: 'var(--primary-text)' }}
        >
          {link.label}
          {link.expandable && (
            <svg
              className="ml-1 w-3 h-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </a>
      ))}
    </div>
  </nav>
);

export default MainNav; 