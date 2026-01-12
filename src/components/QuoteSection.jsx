import studentImg from '../assets/images/Rectangle 11.png';

export default function QuoteSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={studentImg} 
            alt="Student studying" 
            className="w-full h-full object-cover"
          />
          {/* Overlay to ensure text readability - darker blue/slate tone from design */}
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 py-24 px-8 text-center">
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-4xl md:text-5xl font-bold  text-white leading-tight">
              “ What gets measured gets improved . ”
            </p>
            <footer className="mt-8">
              <p className="text-gray-300 font-bold text-lg tracking-wide uppercase">Peter Drucker</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
