import { BookOpen, GraduationCap, Heart } from 'lucide-react';

export default function Story() {
  return (
    <div className="max-w-3xl mx-auto text-center mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Our Story
      </h2>
      <div className="bg-[#24272D] p-8 rounded-xl mb-12">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[#33FEA8]/10 rounded-full flex items-center justify-center">
            <Heart className="h-8 w-8 text-[#33FEA8]" />
          </div>
        </div>
        <p className="text-gray-300 text-lg mb-6">
          Our founder's personal journey inspired Earn4Edu. Having experienced the challenge of nearly leaving education due to financial constraints, he understood firsthand the difficult choice many students face when their families struggle to support their education.
        </p>
        <p className="text-gray-300 text-lg">
          This experience led to the creation of Earn4Edu - an initiative designed to ensure no student has to choose between their education and financial stability.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#24272D] p-6 rounded-xl">
          <div className="w-12 h-12 bg-[#33FEA8]/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <BookOpen className="h-6 w-6 text-[#33FEA8]" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">The Challenge</h3>
          <p className="text-gray-400">
            Many talented students are forced to abandon their education when their families can't bear the financial burden, creating a cycle that limits their future opportunities.
          </p>
        </div>

        <div className="bg-[#24272D] p-6 rounded-xl">
          <div className="w-12 h-12 bg-[#33FEA8]/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <GraduationCap className="h-6 w-6 text-[#33FEA8]" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Our Solution</h3>
          <p className="text-gray-400">
            We provide free training, mentorship, and part-time work opportunities that allow students to support their families while continuing their education.
          </p>
        </div>
      </div>
    </div>
  );
}