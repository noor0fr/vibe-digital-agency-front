
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import HeroAnimation from './HeroAnimation';

const Hero3DScene = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] rounded-2xl shadow-2xl overflow-hidden border-2 border-vibrant-purple/30">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <Suspense fallback={null}>
          <HeroAnimation />
        </Suspense>
      </Canvas>
      <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-vibrant-purple/20 z-10">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-vibrant-lime rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-vibrant-purple">En ligne maintenant</span>
        </div>
        <p className="text-xs text-gray-600 mt-1">Prêts à transformer votre vision</p>
      </div>
    </div>
  );
};

export default Hero3DScene;
