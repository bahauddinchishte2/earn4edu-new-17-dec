const teamMembers = [
  {
    name: 'Bahauddin Chishte',
    role: 'Founder & Mentor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    bio: 'Former educator passionate about bridging education and employment.',
  },
  {
    name: 'Nazmul Islam',
    role: 'Operations Lead',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    bio: '10+ years experience in EdTech and skill development.',
  },
  {
    name: 'Bappy Golder',
    role: 'Chief Advisor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    bio: 'Dedicated to helping students achieve their full potential.',
  },
];

export default function Team() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        Meet Our Team
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-[#24272D] rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300"
          >
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-[#33FEA8] mb-3">{member.role}</p>
              <p className="text-gray-400">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}