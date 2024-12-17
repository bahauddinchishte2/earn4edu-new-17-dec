import { GraduationCap, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { id: 'facebook', Icon: Facebook, href: 'https://facebook.com/earn4edu' },
    { id: 'twitter', Icon: Twitter, href: 'https://twitter.com/earn4edu' },
    { id: 'linkedin', Icon: Linkedin, href: 'https://linkedin.com/company/earn4edu' },
    { id: 'instagram', Icon: Instagram, href: 'https://instagram.com/earn4edu' },
  ];

  const quickLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About Us', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'join', label: 'Join Us', href: '#join' },
  ];

  const services = [
    { id: 'web-dev', label: 'Web Development' },
    { id: 'digital-marketing', label: 'Digital Marketing' },
    { id: 'graphic-design', label: 'Graphic Design' },
    { id: 'video-editing', label: 'Video Editing' },
    { id: 'ai-automation', label: 'AI Automation' },
  ];

  return (
    <footer className="bg-[#24272D] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-[#33FEA8]" />
              <span className="text-white font-bold text-xl">Earn4Edu</span>
            </div>
            <p className="text-gray-400">
              Empowering students to achieve their educational dreams through flexible earning opportunities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ id, Icon, href }) => (
                <a
                  key={id}
                  href={href}
                  className="text-gray-400 hover:text-[#33FEA8] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ id, label, href }) => (
                <li key={id}>
                  <a
                    href={href}
                    className="text-gray-400 hover:text-[#33FEA8] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-[#33FEA8] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Dhaka, Bangladesh</li>
              <li>support@earn4edu.com</li>
              <li>+880 1234-567890</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} Earn4Edu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}