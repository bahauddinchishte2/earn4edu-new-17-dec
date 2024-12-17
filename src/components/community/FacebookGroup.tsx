import { Facebook, Users, Clock, MessageCircle } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Connect with Peers',
    description: 'Network with fellow students and alumni who share similar goals and challenges.'
  },
  {
    icon: Clock,
    title: 'Real-time Support',
    description: 'Get quick answers to your questions from mentors and experienced community members.'
  },
  {
    icon: MessageCircle,
    title: 'Share & Learn',
    description: 'Exchange ideas, resources, and success stories with the community.'
  }
];

export default function FacebookGroup() {
  return (
    <section className="py-20 bg-[#2A2D35]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-[#33FEA8]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Facebook className="h-8 w-8 text-[#33FEA8]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Student Community
            </h2>
            <p className="text-gray-300 text-lg">
              Connect with fellow students, get instant help, and grow together in our supportive Facebook group.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-[#24272D] p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-[#33FEA8]/10 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-[#33FEA8]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://facebook.com/groups/earn4edu"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-8 py-3 font-semibold text-[#24272D] transition-all duration-200 ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px] group"
            >
              <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-[#238c5c]"></span>
              <span className="absolute inset-0 bg-[#33FEA8]"></span>
              <span className="relative flex items-center">
                <Facebook className="mr-2 h-5 w-5" />
                Join Facebook Group
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}