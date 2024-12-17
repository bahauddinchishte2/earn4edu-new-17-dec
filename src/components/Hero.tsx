import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-20 bg-[#24272D]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Learn, Earn & Pursue Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33FEA8] to-emerald-400">
                  Dreams
                </span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl">
                Empowering low-income students with free training, mentorship, and flexible work opportunities. Work just ≤15 hours/week while focusing on your education.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#join"
                className="relative inline-flex items-center justify-center px-8 py-3 font-semibold text-[#24272D] transition-all duration-200 ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px] group"
              >
                <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-[#238c5c]"></span>
                <span className="absolute inset-0 bg-[#33FEA8]"></span>
                <span className="relative flex items-center">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#services"
                className="relative inline-flex items-center justify-center px-8 py-3 font-semibold text-[#33FEA8] transition-all duration-200 ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px] group"
              >
                <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-[#33FEA8]/10"></span>
                <span className="absolute inset-0 border-2 border-[#33FEA8]"></span>
                <span className="relative">Discover Programs</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              {[
                ['≤15', 'Hours/Week'],
                ['100%', 'Free Training'],
                ['2+', 'Partner Companies'],
              ].map(([stat, label]) => (
                <div key={label}>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat}</div>
                  <div className="text-gray-400 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#33FEA8]/20 to-emerald-400/20 blur-3xl -z-10" />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Students learning together"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}