import FeaturesHero from '../components/FeaturesHero';
import groupImg from '../assets/images/3d-group-icon-three-blue-user-figures-for-community-and-teamwork-isolated-on-transparent-background-free-png 1.png';
import notebookImg from '../assets/images/3d-shiny-blue-glass-notebook-600nw-2651595277-removebg-preview 1.png';
import msgImg from '../assets/images/pngtree-3d-illustration-of-simple-blue-message-box-icon-png-image_15858261 1.png';
import iconC from '../assets/images/Frame 36.png';
import iconD from '../assets/images/Frame 37.png';
import iconE from '../assets/images/Frame 35.png';

export default function WhatClassEdgeDoes() {
  return (
    <div className="min-h-screen bg-white">
      <FeaturesHero />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-blue-100/40 p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-20 flex flex-col items-center text-center mb-10">
              <div className="flex gap-3">
                <img src={iconE} alt="" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Track Students Attendance</h2>
              </div>
              <p className="text-gray-600 text-[15px] w-30">Monitor daily attendance, spot trends, and receive alerts on absences</p>
            </div>
            <img src={groupImg} alt="" className="absolute left-1/2 -translate-x-1/2 top-24 w-[560px] md:w-[600px] object-contain pointer-events-none select-none" />
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mt-40">
              <div className="bg-white rounded-2xl shadow-lg ring-1 ring-blue-100 p-8 md:p-10 text-left space-y-3">
                <div className="flex items-center gap-3">
                  <h2 className="font-bold text-[#003FA6] text-[22px] md:text-[26px]">Real-Time Attendance Monitoring</h2>
                </div>
                <p className="text-gray-600 text-sm">Teachers can easily mark students present, absent, or late in real time. Parents and school admins instantly see updates, helping everyone stay informed and eliminating manual record-keeping.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg ring-1 ring-blue-100 p-8 md:p-10 text-left space-y-3">
                <div className="flex items-center gap-3">
                  <h2 className="font-bold text-[#003FA6] text-[22px] md:text-[26px]">Smart Attendance Insights</h2>
                </div>
                <p className="text-gray-600 text-sm">The system automatically analyzes attendance trends to identify frequent absences, lateness, or sudden changes. This helps schools quickly spot students who may need support or follow-up.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg ring-1 ring-blue-100 p-8 md:p-10 text-left space-y-3">
                <div className="flex items-center gap-3">
                  <h2 className="font-bold text-[#003FA6] text-[22px] md:text-[26px]">Alerts & Notifications That Matter</h2>
                </div>
                <p className="text-gray-600 text-sm">Parents receive instant notifications when their child misses school or arrives late. Admins and teachers also get alerts about unusual patterns, ensuring timely intervention and accountability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-blue-100/40 p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-20 flex flex-col items-center text-center mb-10">
              <div className=" flex gap-3">
                <img src={iconC} alt="" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Analyze Students Performance</h2>
              </div>
              <p className="text-gray-600 text-[15px] w-30 ">Gain clear insight into scores, growth trends and areas needing improvemen</p>
            </div>
            <img src={notebookImg} alt="" className="absolute left-1/2 -translate-x-1/2 top-24 w-[420px] md:w-[560px] object-contain pointer-events-none select-none" />
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mt-40">
              <div className="bg-white rounded-2xl shadow-lg ring-1 ring-blue-100 p-8 md:p-10 text-left space-y-3">
                <div className="flex items-center gap-3">
                  <h2 className="font-bold text-[#003FA6] text-[22px] md:text-[26px]">Clear Performance Tracking</h2>
                </div>
                <p className="text-gray-600 text-sm">Class Edge brings every student’s scores together into one simple dashboard. Teachers and parents can easily see strengths, weak subjects, and overall progress at a glance.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg ring-1 ring-blue-100 p-8 md:p-10 text-left space-y-3">
                <div className="flex items-center gap-3">
                  <h2 className="font-bold text-[#003FA6] text-[22px] md:text-[26px]">Smart Insights & Trends</h2>
                </div>
                <p className="text-gray-600 text-sm">The system automatically analyzes results over time — highlighting improvements, declines, and patterns. This helps teachers personalize support and guides parents on how best to help their child succeed.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg ring-1 ring-blue-100 p-8 md:p-10 text-left space-y-3">
                <div className="flex items-center gap-3">
                  <h2 className="font-bold text-[#003FA6] text-[22px] md:text-[26px]">Actionable Reports for Better Results</h2>
                </div>
                <p className="text-gray-600 text-sm">Easy-to-read reports turn raw scores into meaningful insights. Schools can identify high-performing students, struggling learners, and subject performance — making decisions smarter and more data-driven.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-blue-100/40 p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-20 flex flex-col items-center text-center mb-10">
              <div className="flex gap-3">
                <img src={iconD} alt="" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Your Direct Line to the Classroom</h2>
              </div>
              <p className="text-gray-600 text-[15px] w-30">Easy-to-read reports turn raw scores into meaningful insight</p>
            </div>
            <img src={msgImg} alt="" className="absolute left-1/2 -translate-x-1/2 top-24 w-[420px] md:w-[560px] object-contain pointer-events-none select-none" />
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mt-40">
              <div className="bg-white rounded-2xl shadow-lg ring-1 ring-blue-100 p-8 md:p-10 text-left space-y-3">
                <div className="flex items-center gap-3">
                  <h2 className="font-bold text-[#003FA6] text-[22px] md:text-[26px]">Real-Time Parent-Teacher Messaging</h2>
                </div>
                <p className="text-gray-600 text-sm">Parents can chat directly with their child’s teacher in real time to ask questions, get updates, and discuss their child’s progress. This creates faster communication and helps resolve issues early.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg ring-1 ring-blue-100 p-8 md:p-10 text-left space-y-3">
                <div className="flex items-center gap-3">
                  <h2 className="font-bold text-[#003FA6] text-[22px] md:text-[26px]">Direct School-Parent & School-Teacher Communication</h2>
                </div>
                <p className="text-gray-600 text-sm">School management can also chat directly with both parents and teachers to share announcements, address concerns, and provide important updates — all in one secure space</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg ring-1 ring-blue-100 p-8 md:p-10 text-left space-y-3">
                <div className="flex items-center gap-3">
                  <h2 className="font-bold text-[#003FA6] text-[22px] md:text-[26px]">Unified Communication Platform</h2>
                </div>
                <p className="text-gray-600 text-sm">All chats happen inside the system, meaning parents, teachers, and school management stay connected in an organized and professional communication channel focused on student success</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
