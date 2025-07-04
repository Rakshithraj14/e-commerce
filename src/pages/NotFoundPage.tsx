import React from 'react';

export const NotFoundPage = () => (
  <div className="text-center py-20">
    <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
    <h2 className="mt-4 text-3xl font-semibold text-gray-800">Page Not Found</h2>
    <p className="mt-2 text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
    <a href="#/" className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
      Go back home
    </a>
  </div>
);
