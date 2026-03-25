import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, Cpu } from 'lucide-react';
import HeroScene from '../components/HeroScene';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-center pt-12 lg:pt-0">
        <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
              Industrial Grade Manufacturing
            </span>
            <h1 className="text-6xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
              Precision <br />
              <span className="text-brand-orange">Redefined.</span>
            </h1>
            <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
              We bridge the gap between digital design and physical reality. 
              High-performance 3D printing for engineers, designers, and visionaries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/quote" className="btn-primary flex items-center gap-2">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/library" className="btn-secondary">
                Browse Models
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="flex-1 w-full h-full lg:absolute lg:right-0 lg:top-0 lg:w-1/2 z-0">
          <HeroScene />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-industrial-gray border-y border-industrial-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Zap className="w-8 h-8 text-brand-orange" />,
                title: "Rapid Prototyping",
                desc: "Go from CAD to physical part in under 24 hours with our optimized workflow."
              },
              {
                icon: <Shield className="w-8 h-8 text-brand-orange" />,
                title: "Industrial Materials",
                desc: "Print with high-strength polymers including Carbon Fiber Nylon, TPU, and PETG."
              },
              {
                icon: <Cpu className="w-8 h-8 text-brand-orange" />,
                title: "Precision Engineering",
                desc: "Tolerances down to 0.1mm for functional assemblies and mechanical parts."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="card-industrial group hover:border-brand-orange transition-colors"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold uppercase tracking-wider mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <img 
                src="https://picsum.photos/seed/factory/800/600" 
                alt="3D Customs Factory" 
                className="rounded-sm grayscale hover:grayscale-0 transition-all duration-700 border border-industrial-accent"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">
                Built for <span className="text-brand-orange">Engineers</span>, by Engineers.
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                At 3D Customs, we don't just print parts; we solve manufacturing challenges. Our facility is equipped with the latest Prusa MK4S and XL printers, optimized for high-performance materials.
              </p>
              <div className="space-y-4">
                {[
                  "Proprietary Slicing Profiles",
                  "Material Testing Lab",
                  "Post-Processing Excellence",
                  "Global Shipping & Logistics"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-brand-orange/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-brand-orange rounded-full" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange opacity-5 z-0" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-8">
            Ready to build the <span className="text-brand-orange">future?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Join hundreds of companies using 3D Customs for their manufacturing needs.
          </p>
          <Link to="/quote" className="btn-primary px-12 py-4 text-lg">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
