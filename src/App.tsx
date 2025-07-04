import React, { useEffect, useState } from 'react';
import { CartProvider } from './store/CartContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { NotFoundPage } from './pages/NotFoundPage';
import TopNav from './components/layout/TopNav';
import MainNav from './components/layout/MainNav';

const getPathFromHash = () => window.location.hash.substring(1) || '/';

const App = () => {
  const [route, setRoute] = useState(getPathFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getPathFromHash());
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    if (!window.location.hash) window.location.hash = '#/';

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  let page;
  if (route === '/') {
    page = <HomePage />;
  } else if (route.startsWith('/product/')) {
    const id = parseInt(route.split('/')[2] ?? '', 10);
    page = isNaN(id) ? <NotFoundPage /> : <ProductDetailPage productId={id} />;
  } else if (route === '/cart') {
    page = <CartPage />;
  } else {
    page = <NotFoundPage />;
  }

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen font-sans" style={{ background: 'var(--secondary-bg)', color: 'var(--primary-text)' }}>
        <TopNav />
        <Header />
        <MainNav />
        <main className="flex-grow">
          {page}
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
