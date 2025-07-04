import React from 'react';

const links = [
  { label: 'Daily Deals', href: '#' },
  { label: 'Brand Outlet', href: '#' },
  { label: 'Gift Cards', href: '#' },
  { label: 'Help & Contact', href: '#' },
];

const TopNav: React.FC = () => (
  <nav
    style={{ background: 'var(--primary-bg)', borderBottom: '1px solid var(--border-color)', fontSize: 14 }}
    className="w-full"
  >
    <div className="max-w-7xl mx-auto px-4 flex justify-end items-center h-8 space-x-6">
      {links.map(link => (
        <a
          key={link.label}
          href={link.href}
          className="hover:underline text-[var(--secondary-text)]"
          style={{ color: 'var(--secondary-text)' }}
        >
          {link.label}
        </a>
      ))}
    </div>
  </nav>
);

export default TopNav; 