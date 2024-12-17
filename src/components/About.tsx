import Mission from './about/Mission';
import Story from './about/Story';
import Partners from './about/Partners';
import Team from './about/Team';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#2A2D35]">
      <div className="container mx-auto px-6">
        <Story />
        <Mission />
        <Partners />
        <Team />
      </div>
    </section>
  );
}