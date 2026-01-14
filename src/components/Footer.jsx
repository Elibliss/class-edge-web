import { Link, useLocation } from 'react-router-dom';
import contactImg from '../assets/images/contact-us-abstract-concept-vector-illustration_107173-28778 1.png'; // Using this or similar for the contact illustration
import logo from '../assets/images/logo.png'; // Logo for footer
import TermsOfServiceModal from './TermsOfServiceModal';
import { useState } from 'react';

export default function Footer() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer className={`bg-black text-white ${isContactPage ? 'pt-20 md:pt-12' : 'pt-44 md:pt-32'} pb-12 relative mt-32`}>
      <TermsOfServiceModal open={showTerms} onClose={() => setShowTerms(false)} />
      
      {/* Reach Out Card - Overlapping the top (Hidden on Contact Page) */}
      {!isContactPage && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4">
          <div className="bg-[#00153B] rounded-3xl p-8 md:p-12 shadow-2xl flex flex-cols-3 md:flex-row items-center justify-between overflow-hidden relative">
             
             {/* Left Content */}
             <div className="z-10 md:w-1/2 space-y-6">
               <h2 className="text-3xl md:text-4xl font-bold text-white">Reach Out To Us</h2>
               <p className="text-gray-300 text-sm max-w-sm">
                 We'd love to hear from you — reach out to learn how Class Edge can support your school's success.
               </p>
               <Link to="/contact" className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition inline-block">
                 Contact Us
               </Link>
             </div>

             {/* Right Illustration */}
             <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 relative z-10">
                <div className="bg-white p-4 rounded-xl shadow-lg max-w-xs">
                  <img src={contactImg} alt="Contact Us" className="w-full h-auto" />
                </div>
             </div>

             {/* Decorative blurred blobs inside card */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -ml-16 -mb-16"></div>
          </div>
        </div>
      )}

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          
          {/* Column 1: Brand & Address */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Class Edge" className="h-8 w-auto brightness-0 invert" /> {/* Inverting logo to white if needed */}
              <span className="text-xl font-bold">Class Edge</span>
            </Link>
            
            <div>
              <h4 className="font-bold text-white mb-2">Head Office</h4>
              <p className="text-gray-400 leading-relaxed">
                No. 5 College Road, Obiagu, Enugu,<br />
                Enugu State, Nigeria.
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-gray-400">Phone Number</p>
              <p className="text-white font-semibold">+2348109494277</p>
            </div>
             <div className="space-y-1">
              <p className="text-gray-400">Email</p>
              <p className="text-white font-semibold">theclassedge@gmail.com</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/features" className="hover:text-white transition">What Class Edge Does</Link></li>
              <li><Link to="#" className="hover:text-white transition">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Social */}
          <div>
            <h4 className="font-bold text-white mb-6">Social</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter ( X )</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <button
                  type="button"
                  onClick={() => setShowTerms(true)}
                  className="hover:text-white transition text-left"
                >
                  Terms Of Service
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition">Privacy Policies</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
