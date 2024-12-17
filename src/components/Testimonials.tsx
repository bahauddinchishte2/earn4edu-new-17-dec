import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const studentTestimonials = [
  {
    name: "Bahauddin Chishte",
    role: "Computer Science Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    quote: "Earn4Edu helped me balance my studies while earning. The flexible schedule and mentorship were exactly what I needed.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Business Major",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    quote: "The skills I learned here are invaluable. I'm now confident in my ability to work in the digital space.",
    rating: 5
  },
  {
    name: "Aisha Patel",
    role: "Design Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    quote: "From a beginner to handling real client projects - my journey with Earn4Edu has been transformative.",
    rating: 5
  },
  {
    name: "John Smith",
    role: "Marketing Student",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    quote: "The practical experience gained here has given me a significant advantage in my field. The mentorship is outstanding.",
    rating: 5
  },
  {
    name: "Emma Wilson",
    role: "Data Science Student",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    quote: "Earn4Edu provided me with real-world projects that perfectly complemented my academic studies.",
    rating: 5
  }
];

const clientTestimonials = [
  {
    name: "David Thompson",
    company: "TechStart Inc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    quote: "The students we've worked with through Earn4Edu have shown exceptional professionalism and skill.",
    logo: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Emily Zhang",
    company: "Creative Solutions",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    quote: "We're impressed by the quality of work and dedication shown by Earn4Edu students.",
    logo: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "James Wilson",
    company: "Digital Dynamics",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    quote: "The perfect blend of fresh perspectives and professional delivery. We're happy to partner with Earn4Edu.",
    logo: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Sarah Miller",
    company: "Innovation Hub",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    quote: "The students bring fresh energy and innovative ideas to our projects. Their work quality exceeds expectations.",
    logo: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Robert Chen",
    company: "Global Tech Solutions",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    quote: "Working with Earn4Edu students has been a game-changer for our digital initiatives. They're professional and skilled.",
    logo: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState('students');
  const carouselRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);

  const scrollToDirection = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      carouselRef.current.scrollLeft += scrollAmount;
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (autoScroll && carouselRef.current) {
      intervalId = setInterval(() => {
        if (carouselRef.current) {
          const scrollWidth = carouselRef.current.scrollWidth;
          const currentScroll = carouselRef.current.scrollLeft;
          const clientWidth = carouselRef.current.clientWidth;

          if (currentScroll + clientWidth >= scrollWidth) {
            carouselRef.current.scrollLeft = 0;
          } else {
            carouselRef.current.scrollLeft += 350;
          }
        }
      }, 3000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoScroll]);

  const handleMouseEnter = () => setAutoScroll(false);
  const handleMouseLeave = () => setAutoScroll(true);

  return (
    <section className="py-20 bg-[#24272D]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Success Stories
          </h2>
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('students')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'students'
                  ? 'bg-[#33FEA8] text-[#24272D]'
                  : 'bg-[#2A2D35] text-gray-400'
              }`}
            >
              Student Stories
            </button>
            <button
              onClick={() => setActiveTab('clients')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'clients'
                  ? 'bg-[#33FEA8] text-[#24272D]'
                  : 'bg-[#2A2D35] text-gray-400'
              }`}
            >
              Client Feedback
            </button>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => scrollToDirection('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-[#33FEA8] text-[#24272D] rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div 
            ref={carouselRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 pb-4 gap-6"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {(activeTab === 'students' ? studentTestimonials : clientTestimonials).map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-[350px] snap-center bg-[#2A2D35] p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-white font-semibold">{testimonial.name}</h3>
                    <p className="text-[#33FEA8]">
                      {activeTab === 'students' ? testimonial.role : testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <Quote className="h-8 w-8 text-[#33FEA8]/20 mb-4" />
                  <p className="text-gray-300">{testimonial.quote}</p>
                </div>

                {activeTab === 'students' && (
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-[#33FEA8] fill-[#33FEA8]"
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollToDirection('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[#33FEA8] text-[#24272D] rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  );
}