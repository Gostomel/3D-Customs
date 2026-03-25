import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Download, Box } from 'lucide-react';

const MODELS = [
  { id: 1, name: 'Industrial Gear Box', category: 'Mechanical', image: 'https://picsum.photos/seed/gear/400/300', price: '$45.00', rating: 'MMU3 Ready' },
  { id: 2, name: 'Drone Chassis V4', category: 'Aerospace', image: 'https://picsum.photos/seed/drone/400/300', price: '$120.00', rating: 'Optimized for MK4S' },
  { id: 3, name: 'Precision Caliper Case', category: 'Tools', image: 'https://picsum.photos/seed/case/400/300', price: '$15.00', rating: 'PLA Optimized' },
  { id: 4, name: 'Custom Heat Sink', category: 'Electronics', image: 'https://picsum.photos/seed/heatsink/400/300', price: '$35.00', rating: 'PETG Recommended' },
  { id: 5, name: 'Ergonomic Mouse Shell', category: 'Consumer', image: 'https://picsum.photos/seed/mouse/400/300', price: '$55.00', rating: 'Lightweight' },
  { id: 6, name: 'Structural Bracket', category: 'Mechanical', image: 'https://picsum.photos/seed/bracket/400/300', price: '$25.00', rating: 'High Strength' },
];

export default function Library() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredModels = MODELS.filter(model => 
    model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    model.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">
            Model <span className="text-brand-orange">Library</span>
          </h1>
          <p className="text-gray-400 max-w-lg">
            Browse our collection of proprietary, engineering-grade 3D models. 
            Optimized for Prusa MK4S and XL build volumes.
          </p>
        </div>

        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search models..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-industrial w-full pl-10"
            />
          </div>
          <button className="btn-secondary p-3">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredModels.map((model, i) => (
          <motion.div
            key={model.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="card-industrial group overflow-hidden p-0"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-brand-orange text-black text-[10px] font-black uppercase px-2 py-1 tracking-widest">
                {model.category}
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold uppercase tracking-wider leading-tight">{model.name}</h3>
                <span className="text-brand-orange font-black text-xl">{model.price}</span>
              </div>
              
              <div className="flex items-center gap-2 mb-6">
                <Box className="w-4 h-4 text-gray-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{model.rating}</span>
              </div>

              <div className="flex gap-2">
                <button className="btn-primary flex-grow py-2 text-xs flex items-center justify-center gap-2">
                  <Download className="w-3 h-3" /> Download STL
                </button>
                <button className="btn-secondary py-2 px-4 text-xs">
                  View 3D
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
