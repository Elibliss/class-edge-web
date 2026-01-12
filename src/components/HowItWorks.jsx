import AttIcon from "../assets/images/Frame 40.png";
import Accdcon from "../assets/images/Frame 39.png";


// Using React Icons for the graduation cap and calendar if no specific asset found.
// But user said "all images... inside that folder".
// I'll check if there are icon assets. Maybe "3d-group-icon" or similar.
// If not, I'll use SVGs.

export default function HowItWorks() {
  return (
    <section className="py-20 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How Class Edge Works</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              The system is a centralized platform that uses biometric fingerprint scanning to record daily attendance for students and teachers, with real-time visibility for school administrators and parents. Teachers upload academic results into the system, which analyzes performance trends across terms and subjects to highlight improvement, decline, and students needing early intervention.
            </p>
          </div>
          <div className="max-w-xs text-right md:text-right self-end md:self-start">
             <h3 className="text-xl font-bold text-blue-600 leading-tight">
               Improved<br />
               Insight Into<br />
               Your Wards<br />
               Academic life
             </h3>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Academic Insight */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="">
                {/* Graduation Cap Icon SVG */}
                <img className="w-35 h-35" src={Accdcon} alt="icon" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Academic Insight</h4>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex-grow">
              <p className="text-gray-600 text-sm leading-relaxed">
                Teachers upload academic results into the system, which analyzes performance across subjects and terms and shares role-based insights with admins, teachers, and parents to ensure timely academic intervention.
              </p>
            </div>
          </div>

          {/* Card 2: Attendance Insight */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-35 h-35">
                 {/* Calendar/Clock Icon SVG */}
                 <img className="w-35 h-35" src={AttIcon} alt="icon" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Attendance Insight</h4>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex-grow">
              <p className="text-gray-600 text-sm leading-relaxed">
                Each school day is activated using a designated card, after which students and teachers sign in and out with fingerprint scanning; attendance is recorded in real time and visible to administrators and parents.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
