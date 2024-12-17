import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Flexible 25-30 hours monthly commitment',
  'Minimum $100 monthly income',
  'Professional mentorship and guidance',
  'Real-world project experience',
  'Networking opportunities',
  'Time management training',
];

export default function JoinUs() {
  return (
    <section id="join" className="py-20 bg-[#24272D] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Earn4Edu Today
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Take the first step towards balancing your education and financial independence. Our program is designed to support your growth while ensuring your studies remain the priority.
          </p>
          
          <div className="bg-[#2A2D35]/80 backdrop-blur-sm p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Why Choose Earn4Edu?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-[#33FEA8] flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href="https://forms.google.com/your-form-url"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-12 py-4 font-semibold text-[#24272D] transition-all duration-200 ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px] text-lg"
          >
            <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-[#238c5c]"></span>
            <span className="absolute inset-0 bg-[#33FEA8]"></span>
            <span className="relative">Apply Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}