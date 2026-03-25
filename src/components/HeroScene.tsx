import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, PerspectiveCamera, Environment, Float } from '@react-three/drei';
import { Suspense } from 'react';

function Model({ color }: { color: string }) {
  // Using a simple box as a placeholder for a 3D model
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} roughness={0.1} metalness={0.8} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-[500px] lg:h-[700px] relative overflow-hidden">
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          <Environment preset="city" />
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Stage environment="city" intensity={0.5} shadows={{ type: 'contact', opacity: 0.4, blur: 2 }} adjustCamera={false}>
              <Model color="#ff6a13" />
            </Stage>
          </Float>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-industrial-black via-transparent to-transparent opacity-60" />
    </div>
  );
}
