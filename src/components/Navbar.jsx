import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import logoName from '../assets/images/logoname.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const isFeatures = pathname === '/features';
  const isContact = pathname === '/contact';
  const isSpecial = isFeatures || isContact;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isSpecial) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isSpecial]);

  useEffect(() => {
    if (!isContact) return;
  }, [isContact]);

  return (
    <nav className={`z-30 ${isSpecial ? (scrolled ? 'fixed top-0 left-0 w-full bg-[#0a1538]/90 backdrop-blur border-b border-white/10 text-white' : 'absolute top-0 left-0 w-full text-white') : 'w-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative flex items-center justify-between ${isSpecial && scrolled ? 'py-3' : 'pt-6'}`}>
          <Link to="/" className="flex items-center">
            {isSpecial ? (
              <div className="flex flex-col items-center gap-4">
                <div className="rounded-full bg-white/10 ring-1 ring-white/20 px-4 py-1.5 flex items-center">
                  <img className="h-5 w-auto" src={logoName} alt="Class Edge" />
                </div>
                {scrolled && (
                  <div className="hidden md:block">
                    <h1 className="font-bold tracking-tight leading-[1.1]">
                      <span className="block text-white text-[32px] md:text-[44px]">
                        {isFeatures ? 'What Class Edge' : 'Contact'}
                      </span>
                      <span className="block text-blue-400 text-[32px] md:text-[44px]">
                        {isFeatures ? 'Does' : 'Us'}
                      </span>
                    </h1>
                  </div>
                )}
              </div>
            ) : (
              <>
                {/* <img className="h-8 w-auto" src={logo} alt="Class Edge" />
                <span className="ml-2 text-xl font-bold text-gray-900">Class Edge</span> */}
              </>
            )}
          </Link>

          {!isSpecial && (
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-2">
              <img className="h-8 w-auto" src={isFeatures ? logoName : logo} alt="Class Edge" />
              {!isFeatures && <span className="text-xl font-bold text-gray-900">Class Edge</span>}
            </div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden inline-flex items-center justify-center p-2 rounded-md ${isSpecial && scrolled ? 'text-white hover:text-blue-200 hover:bg-white/10 focus:ring-white' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:ring-blue-500'}`}
          >
            <span className="sr-only">Toggle main menu</span>
            {!isOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {isSpecial && scrolled && (
          <div className="hidden top-7 right-20 md:flex items-center justify-end absolute  mb-10">
            <div className="flex items-center gap-16 text-sm">
              <Link to="/" className={`font-medium ${pathname === '/' ? 'text-blue-300' : 'text-white hover:text-blue-300'}`}>
                Home <span className="text-blue-300 ml-1">01</span>
              </Link>
              <Link to="/features" className={`font-medium ${pathname === '/features' ? 'text-blue-300' : 'text-white hover:text-blue-300'}`}>
                What Class Edge Does <span className="text-blue-300 ml-1">02</span>
              </Link>
              <Link to="/contact" className={`font-medium ${pathname === '/contact' ? 'text-blue-300' : 'text-white hover:text-blue-300'}`}>
                Contact Us <span className="text-blue-300 ml-1">03</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {isOpen && (
        <div className={`md:hidden  w-full ${isSpecial && scrolled ? 'bg-[#0a1538]/95  border-t border-white/10 text-white' : 'bg-white shadow-lg border-t border-gray-100'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 ${
                pathname === '/' ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home <span className="text-blue-500 ml-1">01</span>
            </Link>
            <Link
              to="/features"
              className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 ${
                pathname === '/features' ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'
              }`}
              onClick={() => setIsOpen(false)}
            >
              What Class Edge Does <span className="text-blue-500 ml-1">02</span>
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 ${
                pathname === '/contact' ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact Us <span className="text-blue-500 ml-1">03</span>
            </Link>
          </div>
        </div>
      )}
    </nav>

  );
}
