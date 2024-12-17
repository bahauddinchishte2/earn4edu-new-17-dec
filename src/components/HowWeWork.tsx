import { Video, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

const steps = [
  {
    icon: Video,
    title: 'Simple Application',
    description: 'Submit a brief application sharing your story and motivation.',
    details: 'Tell us about your background, goals, and how you plan to balance work and studies.',
  },
  {
    icon: BookOpen,
    title: 'Free Training Program',
    description: 'Comprehensive skill development and communication training.',
    details: 'Master professional communication, technical skills, and workplace etiquette through our structured program.',
  },
  {
    icon: Briefcase,
    title: 'Work Experience',
    description: 'Start working with our partner companies like Olab.com.au and StudentPreneur Agency.',
    details: 'Gain real-world experience while working ≤15 hours per week to maintain study-work balance.',
  },
  {
    icon: GraduationCap,
    title: 'Ongoing Support',
    description: 'Continue learning while earning.',
    details: 'Access ongoing mentorship and training while working on real projects with our partner companies.',
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-20 bg-[#24272D]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your Journey With Us
          </h2>
          <p className="text-gray-300 text-lg">
            A structured program designed to nurture your growth while maintaining focus on your studies.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="bg-[#2A2D35] p-8 rounded-2xl hover:scale-105 transition-transform duration-300 group">
                  <div className="w-16 h-16 bg-[#33FEA8]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#33FEA8]/20 transition-colors">
                    <step.icon className="h-8 w-8 text-[#33FEA8]" />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#33FEA8] text-[#24272D] w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{step.description}</p>
                  <p className="text-sm text-gray-500">{step.details}</p>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <img
                  src={`https://images.unsplash.com/photo-${
                    index === 0
                      ? '1516321318423-f06f85e504b3'
                      : index === 1
                      ? '1523240795612-9a054b0db644'
                      : index === 2
                      ? '1522202176988-66273c2fd55f'
                      : '1517245386807-bb43f82c33c4'
                  }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={step.title}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}