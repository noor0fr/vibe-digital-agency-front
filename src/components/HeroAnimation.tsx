
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const HeroAnimation = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      sphereRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.4) * 0.2;
      sphereRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 2, 2]} intensity={1} color="#b931fc" />
      <directionalLight position={[-2, -2, -2]} intensity={0.5} color="#4d7fff" />
      
      <mesh ref={sphereRef}>
        <Sphere args={[1.6, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial 
            color="#ff9fb2"
            attach="material" 
            distort={0.5} 
            speed={1.5} 
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </mesh>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.5}
        rotateSpeed={0.5}
      />
    </>
  );
};

export default HeroAnimation;
