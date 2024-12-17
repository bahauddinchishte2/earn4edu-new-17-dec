import { Menu, X, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'How We Work', href: '#how-we-work' },
    { label: 'Join Us', href: '#join' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-[#24272D]/95 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-[#33FEA8]" />
            <span className="text-white font-bold text-xl">Earn4Edu</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-[#33FEA8] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#join"
              className="relative inline-flex items-center justify-center px-6 py-2 font-semibold text-[#24272D] transition-all duration-200 ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px]"
            >
              <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-[#238c5c]"></span>
              <span className="absolute inset-0 bg-[#33FEA8]"></span>
              <span className="relative">Join Us Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-[#33FEA8] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#join"
              className="relative inline-flex items-center justify-center w-full px-6 py-2 mt-4 font-semibold text-[#24272D] transition-all duration-200 ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px]"
              onClick={() => setIsOpen(false)}
            >
              <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-[#238c5c]"></span>
              <span className="absolute inset-0 bg-[#33FEA8]"></span>
              <span className="relative">Get Started</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}