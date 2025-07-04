import React, { useEffect, useRef, useState } from 'react';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';
import banner4 from '../../assets/banner4.png';

const banners = [banner1, banner2, banner3, banner4];

const SLIDE_INTERVAL = 3000; // 3 seconds

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, SLIDE_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg mb-8">
      {banners.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Banner ${idx + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full focus:outline-none transition-colors duration-300 ${
              idx === current ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider; 