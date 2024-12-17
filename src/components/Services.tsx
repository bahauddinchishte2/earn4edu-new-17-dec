import { Code, Palette, Video, LineChart, Bot, Pen, Layout, Share } from 'lucide-react';
import { useState, useRef } from 'react';
import Modal from './Modal';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Learn to build modern websites and applications using the latest technologies.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    details: {
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Database Management'],
      projects: ['E-commerce platforms', 'Portfolio websites', 'Web applications'],
      duration: '3-6 months',
      earnings: '$15-25/hour',
    }
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Create intuitive and beautiful user interfaces that enhance user experience.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    details: {
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems'],
      projects: ['Mobile apps', 'Website redesigns', 'Design systems'],
      duration: '2-4 months',
      earnings: '$20-30/hour',
    }
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Master digital design tools to create stunning visuals and branding materials.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    details: {
      skills: ['Adobe Creative Suite', 'Typography', 'Color Theory', 'Brand Design'],
      projects: ['Logo design', 'Social media graphics', 'Marketing materials'],
      duration: '2-3 months',
      earnings: '$15-25/hour',
    }
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Create engaging video content using professional editing techniques.',
    image: 'https://images.unsplash.com/photo-1574717024453-354441190b05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    details: {
      skills: ['Premier Pro', 'After Effects', 'Color Grading', 'Motion Graphics'],
      projects: ['Social media content', 'Course videos', 'Promotional content'],
      duration: '2-4 months',
      earnings: '$18-28/hour',
    }
  },
  {
    icon: LineChart,
    title: 'Digital Marketing',
    description: 'Learn to grow online presence through effective digital marketing strategies.',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    details: {
      skills: ['SEO', 'Social Media Marketing', 'Content Strategy', 'Analytics'],
      projects: ['Marketing campaigns', 'Social media management', 'SEO optimization'],
      duration: '3-4 months',
      earnings: '$15-25/hour',
    }
  },
  {
    icon: Share,
    title: 'Social Media Management',
    description: 'Build and manage engaging social media presence for brands.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    details: {
      skills: ['Content Planning', 'Community Management', 'Analytics', 'Trend Analysis'],
      projects: ['Social media campaigns', 'Content calendars', 'Community building'],
      duration: '2-3 months',
      earnings: '$15-22/hour',
    }
  },
  {
    icon: Pen,
    title: 'Content Writing',
    description: 'Craft compelling content that engages audiences and drives results.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    details: {
      skills: ['Copywriting', 'SEO Writing', 'Content Strategy', 'Editing'],
      projects: ['Blog posts', 'Website content', 'Social media copy'],
      duration: '1-2 months',
      earnings: '$15-25/hour',
    }
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Harness the power of AI tools to automate tasks and increase productivity.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    details: {
      skills: ['AI Tools', 'Process Automation', 'Data Analysis', 'Workflow Optimization'],
      projects: ['Automation scripts', 'AI integration', 'Workflow optimization'],
      duration: '2-4 months',
      earnings: '$20-35/hour',
    }
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <section id="services" className="py-20 bg-[#2A2D35] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Skills That Pay
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose from our curated selection of high-demand digital skills. Each course is designed to provide practical, job-ready expertise.
            </p>
          </div>

          <div 
            ref={sliderRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="relative group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 rounded-2xl" />
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-[#33FEA8]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#33FEA8]/20 transition-colors">
                    <service.icon className="h-6 w-6 text-[#33FEA8]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#24272D]">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-[#2A2D35] to-[#33FEA8]/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Get 1 Year Free LinkedIn Learning Access
                </h2>
                <p className="text-gray-300 mb-6">
                  Enhance your skills with unlimited access to thousands of expert-led courses. Available for all active Earn4Edu members.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Access 16,000+ expert-led courses',
                    'Learn at your own pace',
                    'Earn certificates upon completion',
                    'Personalized course recommendations'
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-[#33FEA8] rounded-full mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a
                  href="#join"
                  className="relative inline-flex items-center justify-center px-8 py-3 font-semibold text-[#24272D] transition-all duration-200 ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px] group"
                >
                  <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-[#238c5c]"></span>
                  <span className="absolute inset-0 bg-[#33FEA8]"></span>
                  <span className="relative">Apply Now</span>
                </a>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Students learning"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#33FEA8]/20 to-transparent rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      >
        {selectedService && (
          <div className="text-white">
            <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2D35] to-transparent" />
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-[#33FEA8]/10 rounded-xl flex items-center justify-center">
                  <selectedService.icon className="h-6 w-6 text-[#33FEA8]" />
                </div>
                <h3 className="text-2xl font-bold">{selectedService.title}</h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Key Skills</h4>
                <ul className="space-y-2">
                  {selectedService.details.skills.map((skill) => (
                    <li key={skill} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-[#33FEA8] rounded-full mr-3" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Sample Projects</h4>
                <ul className="space-y-2">
                  {selectedService.details.projects.map((project) => (
                    <li key={project} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-[#33FEA8] rounded-full mr-3" />
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Training Duration</h4>
                <p className="text-gray-300">{selectedService.details.duration}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Potential Earnings</h4>
                <p className="text-gray-300">{selectedService.details.earnings}</p>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <a
                href="#join"
                onClick={() => setSelectedService(null)}
                className="relative inline-flex items-center justify-center px-8 py-3 font-semibold text-[#24272D] transition-all duration-200 ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px] group"
              >
                <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-[#238c5c]"></span>
                <span className="absolute inset-0 bg-[#33FEA8]"></span>
                <span className="relative">Apply for This Track</span>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}