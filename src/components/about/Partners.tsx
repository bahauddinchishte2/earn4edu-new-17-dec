import { Building } from 'lucide-react';

const partners = [
  {
    name: "Olab.com.au",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Leading technology solutions provider offering real-world project opportunities."
  },
  {
    name: "StudentPreneur Agency",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Student-focused agency providing hands-on experience in digital services."
  }
];

export default function Partners() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        Our Partner Companies
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {partners.map((partner) => (
          <div key={partner.name} className="bg-[#24272D] p-8 rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Building className="h-8 w-8 text-[#33FEA8]" />
              <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
            </div>
            <p className="text-gray-400">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}