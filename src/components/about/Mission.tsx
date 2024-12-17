import { Target, Heart, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Free Training',
    description: 'Comprehensive skill development and mentorship program at zero cost to students.',
  },
  {
    icon: Heart,
    title: 'Mentorship',
    description: 'Personalized guidance and support throughout your learning journey.',
  },
  {
    icon: Users,
    title: 'Work Opportunities',
    description: 'Connect with partner companies for flexible, meaningful work experience.',
  },
];

export default function Mission() {
  return (
    <div className="max-w-3xl mx-auto text-center mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Our Mission
      </h2>
      <p className="text-gray-300 mb-6 text-lg">
        At Earn4Edu, we're committed to helping low-income students learn, earn, and pursue their dreams while maintaining focus on their education. Through our program, students work ≤15 hours per week, ensuring their studies remain the top priority.
      </p>
      <p className="text-gray-300 mb-12 text-lg">
        We believe that no student should have to abandon their education due to financial constraints. Our initiative supports students in learning valuable skills and earning part-time income while continuing their studies, enabling them to support their families without compromising their future.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {values.map((value) => (
          <div key={value.title} className="bg-[#24272D] p-6 rounded-xl">
            <div className="w-12 h-12 bg-[#33FEA8]/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <value.icon className="h-6 w-6 text-[#33FEA8]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
            <p className="text-gray-400">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}