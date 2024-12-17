import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#2A2D35]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-12 h-12 bg-[#33FEA8]/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="h-6 w-6 text-[#33FEA8]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-400 text-lg mb-2">
              Subscribe to our newsletter for inspiring success stories
            </p>
            <p className="text-gray-400">
              Be the first to know about new opportunities and student achievements
            </p>
          </div>

          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[#24272D] border border-gray-700 text-white focus:outline-none focus:border-[#33FEA8] w-full"
                required
              />
              <button
                type="submit"
                className="relative inline-flex items-center justify-center px-8 py-3 font-semibold text-[#24272D] transition-all duration-200 ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px] group w-full sm:w-auto"
              >
                <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-[#238c5c]"></span>
                <span className="absolute inset-0 bg-[#33FEA8]"></span>
                <span className="relative flex items-center justify-center">
                  Subscribe
                  <Send className="ml-2 h-4 w-4" />
                </span>
              </button>
            </div>
          </form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Success Stories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">Weekly</div>
              <div className="text-gray-400">Updates</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-400">Partner Companies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}