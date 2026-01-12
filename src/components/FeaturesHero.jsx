import { Link, useLocation } from 'react-router-dom';

export default function FeaturesHero() {
  const { pathname } = useLocation();

  return (
    <section className="bg-gradient-to-b from-[#0a1538] to-[#00153b] text-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="font-bold tracking-tight leading-[1.1]">
              <span className="block text-white text-[32px] md:text-[44px]">What Class Edge</span>
              <span className="block text-blue-400 text-[32px] md:text-[44px]">Does</span>
            </h1>
            <p className="text-sm text-white/70 max-w-md">
              Our platform simplifies academic tracking with attendance monitoring, performance insights,
              and communication tools that keep everyone connected.
            </p>
          </div>

          <div className="md:col-span-2 flex justify-end">
            <div className="flex flex-col items-end space-y-2 text-right w-56">
              <Link
                to="/"
                className={`flex w-full items-baseline justify-between text-sm font-medium ${
                  pathname === '/' ? 'text-blue-300' : 'text-white hover:text-blue-200'
                }`}
              >
                <span>Home</span>
                <span className="text-blue-300 ml-6">01</span>
              </Link>
              <Link
                to="/features"
                className={`flex w-full items-baseline justify-between text-sm font-medium ${
                  pathname === '/features' ? 'text-blue-300' : 'text-white hover:text-blue-200'
                }`}
              >
                <span>What Class Edge Does</span>
                <span className="text-blue-300 ml-6">02</span>
              </Link>
              <Link
                to="/contact"
                className={`flex w-full items-baseline justify-between text-sm font-medium ${
                  pathname === '/contact' ? 'text-blue-300' : 'text-white hover:text-blue-200'
                }`}
              >
                <span>Contact Us</span>
                <span className="text-blue-300 ml-6">03</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
