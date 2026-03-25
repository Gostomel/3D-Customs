import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <footer className="bg-industrial-black border-t border-industrial-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-black uppercase tracking-tighter">
                3D<span className="text-brand-orange">Customs</span>
              </span>
              <p className="mt-4 text-gray-400 max-w-xs">
                Precision manufacturing for the next generation of creators. From prototyping to production.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Custom 3D Printing</li>
                <li>Rapid Prototyping</li>
                <li>Industrial Design</li>
                <li>Material Consultation</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-industrial-accent text-center text-gray-500 text-xs uppercase tracking-widest">
            &copy; {new Date().getFullYear()} 3D Customs. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
