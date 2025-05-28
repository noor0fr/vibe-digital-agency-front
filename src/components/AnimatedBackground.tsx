
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
          #A51CF1 0%, 
          #D4C2FC 100%)`,
        backgroundSize: '200% 200%',
      }}
    >
      <div 
        className="absolute inset-0 animate-gradient-shift opacity-30"
        style={{
          background: `linear-gradient(45deg, 
            #A51CF1 0%, 
            #DEFD47 25%, 
            #D4C2FC 50%, 
            #A51CF1 75%, 
            #DEFD47 100%)`,
          backgroundSize: '400% 400%',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
