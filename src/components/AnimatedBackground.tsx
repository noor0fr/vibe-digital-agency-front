
import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gradientIntensity = Math.min(scrollY / 500, 1);

  return (
    <div 
      className="fixed inset-0 -z-10 transition-all duration-1000 ease-out"
      style={{
        background: `linear-gradient(135deg, 
          hsl(${280 - scrollY * 0.1}, 85%, ${60 + gradientIntensity * 20}%) 0%, 
          hsl(${250 + scrollY * 0.05}, 80%, ${65 + gradientIntensity * 15}%) 100%)`,
        backgroundSize: '200% 200%',
      }}
    >
      <div 
        className="absolute inset-0 animate-gradient-shift opacity-30"
        style={{
          background: `linear-gradient(45deg, 
            #b931fc 0%, 
            #4d7fff 25%, 
            #ff9fb2 50%, 
            #ffd23f 75%, 
            #b931fc 100%)`,
          backgroundSize: '400% 400%',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
