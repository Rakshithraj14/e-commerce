import React from 'react';

export const Footer = () => (
  <footer className="bg-gray-100 border-t border-gray-200">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Shop</h3>
          <ul>
            <li className="mb-1"><a href="#" className="text-gray-600 hover:text-blue-600">New Arrivals</a></li>
            <li className="mb-1"><a href="#" className="text-gray-600 hover:text-blue-600">Deals</a></li>
            <li className="mb-1"><a href="#" className="text-gray-600 hover:text-blue-600">Categories</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Help & Contact</h3>
          <ul>
            <li className="mb-1"><a href="#" className="text-gray-600 hover:text-blue-600">Help Center</a></li>
            <li className="mb-1"><a href="#" className="text-gray-600 hover:text-blue-600">Contact Us</a></li>
            <li className="mb-1"><a href="#" className="text-gray-600 hover:text-blue-600">Returns</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">About gbay</h3>
          <ul>
            <li className="mb-1"><a href="#" className="text-gray-600 hover:text-blue-600">Company Info</a></li>
            <li className="mb-1"><a href="#" className="text-gray-600 hover:text-blue-600">Careers</a></li>
            <li className="mb-1"><a href="#" className="text-gray-600 hover:text-blue-600">News</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Follow Us</h3>
          <ul>
            <li className="mb-1">
              <a 
                href="https://x.com/gpunet?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                Twitter
              </a>
            </li>
            <li className="mb-1">
              <a 
                href="https://www.instagram.com/gpu.network/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-200">
        &copy; {new Date().getFullYear()} gbay Inc. All rights reserved.
      </div>
    </div>
  </footer>
);
