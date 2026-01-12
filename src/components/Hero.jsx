import { Link, useLocation } from 'react-router-dom';
import graphImg from '../assets/images/istockphoto-1326273607-612x612-removebg-preview 2.png';

export default function Hero() {
  const { pathname } = useLocation();

  return (
    <section id="home" className="pt-20 md:pt-24 pb-24 bg-white min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="hidden md:grid md:grid-cols-3 items-center gap-16">
          <div className="flex flex-col justify-between h-full">
            <div className="flex items-center gap-10 h-52">
              <div className="h-full w-px border-l-2 border-dashed border-gray-200" />
              <img src={graphImg} alt="Growth Tracking Graph" className="w-32 md:w-40 object-contain" />
              <div className="h-full w-px border-l-2 border-dashed border-gray-200" />
            </div>
            <p className="mt-8 text-xs md:text-sm text-gray-500 max-w-xs">
              Class Edge simplifies academic tracking by combining performance, attendance, and insights
              into one powerful platform.
            </p>
          </div>

          <div className="flex flex-col justify-center items-start h-full">
            <h1 className="font-bold tracking-tight leading-[1.1]">
              <span className="block text-gray-900 text-[32px] md:text-[48px] md:whitespace-nowrap">Tracking growth.</span>
              <span className="block text-blue-600 text-[32px] md:text-[48px] md:whitespace-nowrap">Shaping futures.</span>
            </h1>
          </div>

          <div className="flex flex-col items-end space-y-2 text-right w-56">
            <Link
              to="/"
              className={`flex w-full items-baseline justify-between text-sm font-medium ${
                pathname === '/' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
              }`}
            >
              <span>Home</span>
              <span className="text-blue-500 ml-6">01</span>
            </Link>
            <Link
              to="/features"
              className={`flex w-full items-baseline justify-between text-sm font-medium ${
                pathname === '/features' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
              }`}
            >
              <span>What Class Edge Does</span>
              <span className="text-blue-500 ml-6">02</span>
            </Link>
            <Link
              to="/contact"
              className={`flex w-full items-baseline justify-between text-sm font-medium ${
                pathname === '/contact' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
              }`}
            >
              <span>Contact Us</span>
              <span className="text-blue-500 ml-6">03</span>
            </Link>
          </div>
        </div>

        <div className="md:hidden space-y-10">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-6 h-40">
              <div className="h-full w-px border-l-2 border-dashed border-gray-200" />
              <img src={graphImg} alt="Growth Tracking Graph" className="w-28 object-contain" />
              <div className="h-full w-px border-l-2 border-dashed border-gray-200" />
            </div>
            <p className="mt-4 text-xs text-gray-500 text-center max-w-xs">
              Class Edge simplifies academic tracking by combining performance, attendance, and insights
              into one powerful platform.
            </p>
          </div>
          <div className="text-center">
            <h1 className="font-bold leading-[1.1] text-2xl">
              <span className="block text-gray-900">Tracking growth.</span>
              <span className="block text-blue-600">Shaping futures.</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
