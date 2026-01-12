import backpackImg from '../assets/images/istockphoto-1324554534-612x612 1.png'; // Assuming Frame 35 is the backpack/id card illustration

export default function AttendanceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Real Time<br />
              <span className="text-blue-600">Attendance Tracking</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              With our system, parents can always see exactly when their ward arrives at and leaves school, giving them peace of mind every day.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
               <img 
                 src={backpackImg} 
                 alt="Real Time Attendance Tracking" 
                 className="w-full max-w-sm object-contain" 
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
