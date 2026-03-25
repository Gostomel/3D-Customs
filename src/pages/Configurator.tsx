import { useState } from 'react';
import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Environment, Float } from '@react-three/drei';
import { Suspense } from 'react';

const MATERIALS = [
  { id: 'pla', name: 'PLA', color: '#ff6a13', description: 'Easy to print, great for prototypes and visual models.', properties: ['Rigid', 'Biodegradable', 'Vibrant Colors'] },
  { id: 'petg', name: 'PETG', color: '#00aaff', description: 'Stronger and more heat resistant than PLA. Perfect for functional parts.', properties: ['Tough', 'Heat Resistant', 'Chemical Resistant'] },
  { id: 'tpu', name: 'TPU', color: '#ffffff', description: 'Flexible and rubber-like. Ideal for gaskets, cases, and vibration dampeners.', properties: ['Flexible', 'Impact Resistant', 'Durable'] },
  { id: 'nylon-cf', name: 'Nylon CF', color: '#333333', description: 'Carbon fiber reinforced nylon. Extreme strength and stiffness.', properties: ['High Strength', 'Lightweight', 'High Temp'] },
];

function ConfigModel({ color }: { color: string }) {
  return (
    <mesh castShadow receiveShadow>
      <torusKnotGeometry args={[1, 0.4, 128, 32]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.5} />
    </mesh>
  );
}

export default function Configurator() {
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIALS[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* 3D Preview */}
        <div className="flex-1 min-h-[500px] bg-industrial-gray border border-industrial-accent rounded-sm relative overflow-hidden">
          <Canvas shadows dpr={[1, 2]}>
            <Suspense fallback={null}>
              <Environment preset="city" />
              <Stage environment="city" intensity={0.5} shadows={{ type: 'contact', opacity: 0.4, blur: 2 }}>
                <ConfigModel color={selectedMaterial.color} />
              </Stage>
              <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.5} />
            </Suspense>
          </Canvas>
          <div className="absolute bottom-4 left-4 bg-industrial-black/80 p-4 border border-industrial-accent backdrop-blur-sm">
            <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block mb-1">Previewing</span>
            <span className="text-brand-orange font-black uppercase tracking-tighter text-xl">{selectedMaterial.name}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="w-full lg:w-[400px] space-y-8">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">
              Material <span className="text-brand-orange">Configurator</span>
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Select a material to see its properties and how it looks on a complex geometry.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-orange">Select Material</h3>
            <div className="grid grid-cols-2 gap-4">
              {MATERIALS.map((mat) => (
                <button
                  key={mat.id}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`p-4 border text-left transition-all rounded-sm ${
                    selectedMaterial.id === mat.id
                      ? 'border-brand-orange bg-brand-orange/10'
                      : 'border-industrial-accent hover:border-gray-500'
                  }`}
                >
                  <div className="w-4 h-4 rounded-full mb-2" style={{ backgroundColor: mat.color }} />
                  <span className="font-bold uppercase tracking-widest text-xs">{mat.name}</span>
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={selectedMaterial.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-industrial"
          >
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">{selectedMaterial.name} Properties</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">{selectedMaterial.description}</p>
            <div className="space-y-2">
              {selectedMaterial.properties.map((prop, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                  {prop}
                </div>
              ))}
            </div>
          </motion.div>

          <button className="btn-primary w-full py-4 text-base">
            Request Quote with {selectedMaterial.name}
          </button>
        </div>
      </div>
    </div>
  );
}
