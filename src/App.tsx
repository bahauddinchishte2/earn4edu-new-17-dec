import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowWeWork from './components/HowWeWork';
import About from './components/About';
import FacebookGroup from './components/community/FacebookGroup';
import Testimonials from './components/Testimonials';
import JoinUs from './components/JoinUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--bg-gradient-start)] to-[var(--bg-gradient-end)]">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowWeWork />
        <About />
        <FacebookGroup />
        <Testimonials />
        <JoinUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}