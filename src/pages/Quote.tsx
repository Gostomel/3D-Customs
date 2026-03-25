import { useState } from 'react';
import { motion } from 'motion/react';
import { Upload, FileText, CheckCircle2, AlertCircle, Info } from 'lucide-react';

export default function Quote() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    material: 'pla',
    infill: '20',
    deadline: 'standard',
    color: 'black',
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">
          Custom <span className="text-brand-orange">Quote</span>
        </h1>
        <p className="text-gray-400">
          Upload your files and get an instant estimation for your custom manufacturing project.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-12 relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-industrial-accent -translate-y-1/2 z-0" />
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 transition-colors ${
              step >= i ? 'bg-brand-orange text-black' : 'bg-industrial-light text-gray-500 border border-industrial-accent'
            }`}
          >
            {step > i ? <CheckCircle2 className="w-6 h-6" /> : i}
          </div>
        ))}
      </div>

      <div className="card-industrial min-h-[400px] flex flex-col">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 flex-grow"
          >
            <div className="text-center">
              <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Upload Your Design</h3>
              <p className="text-gray-400 text-sm">We accept .STL, .STEP, and .OBJ files.</p>
            </div>

            <div className="border-2 border-dashed border-industrial-accent rounded-sm p-12 flex flex-col items-center justify-center hover:border-brand-orange transition-colors cursor-pointer group">
              <Upload className="w-12 h-12 text-gray-500 group-hover:text-brand-orange transition-colors mb-4" />
              <span className="text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-white">
                Drag & Drop or Click to Upload
              </span>
            </div>

            <div className="bg-industrial-black p-4 rounded-sm flex items-start gap-3">
              <Info className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-400 leading-relaxed">
                Max file size: 50MB. For larger assemblies, please contact our engineering team directly. 
                All files are encrypted and processed securely.
              </p>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 flex-grow"
          >
            <h3 className="text-xl font-bold uppercase tracking-wider mb-6">Print Specifications</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Material</label>
                <select 
                  className="input-industrial w-full"
                  value={formData.material}
                  onChange={(e) => setFormData({...formData, material: e.target.value})}
                >
                  <option value="pla">PLA - Standard</option>
                  <option value="petg">PETG - Durable</option>
                  <option value="tpu">TPU - Flexible</option>
                  <option value="nylon-cf">Nylon CF - High Strength</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Infill Density</label>
                <select 
                  className="input-industrial w-full"
                  value={formData.infill}
                  onChange={(e) => setFormData({...formData, infill: e.target.value})}
                >
                  <option value="10">10% - Light</option>
                  <option value="20">20% - Standard</option>
                  <option value="40">40% - Strong</option>
                  <option value="100">100% - Solid</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Color</label>
                <select 
                  className="input-industrial w-full"
                  value={formData.color}
                  onChange={(e) => setFormData({...formData, color: e.target.value})}
                >
                  <option value="black">Industrial Black</option>
                  <option value="gray">Slate Gray</option>
                  <option value="orange">Prusa Orange</option>
                  <option value="white">Signal White</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Deadline</label>
                <select 
                  className="input-industrial w-full"
                  value={formData.deadline}
                  onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                >
                  <option value="standard">Standard (3-5 Days)</option>
                  <option value="express">Express (24-48 Hours)</option>
                  <option value="economy">Economy (7-10 Days)</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8 flex-grow py-8"
          >
            <div className="w-20 h-20 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto">
              <FileText className="w-10 h-10 text-brand-orange" />
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Estimation Complete</h3>
              <p className="text-gray-400">Based on your specifications, here is your initial quote.</p>
            </div>

            <div className="bg-industrial-black border border-industrial-accent p-8 rounded-sm max-w-sm mx-auto">
              <div className="flex justify-between mb-2">
                <span className="text-gray-500 text-xs uppercase tracking-widest">Material Cost</span>
                <span className="font-bold">$12.45</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-500 text-xs uppercase tracking-widest">Machine Hours</span>
                <span className="font-bold">$28.00</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-industrial-accent mt-4">
                <span className="text-brand-orange font-bold uppercase tracking-widest">Total Estimated</span>
                <span className="text-2xl font-black text-brand-orange">$40.45</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <AlertCircle className="w-4 h-4" />
              Final price may vary after manual engineering review.
            </div>
          </motion.div>
        )}

        <div className="mt-12 flex justify-between">
          {step > 1 && (
            <button onClick={prevStep} className="btn-secondary">
              Back
            </button>
          )}
          <div className="flex-grow" />
          {step < 3 ? (
            <button onClick={nextStep} className="btn-primary">
              Continue
            </button>
          ) : (
            <button className="btn-primary px-12">
              Submit Request
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
