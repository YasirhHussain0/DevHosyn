import { useInView } from '../hooks/useInView';
import { Briefcase, FolderOpen, Users } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '3+', label: 'Years Experience' },
  { icon: FolderOpen, value: '25+', label: 'Projects Completed' },
  { icon: Users, value: '10+', label: 'Happy Clients' },
];

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 dark:bg-navy-900 bg-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-neon/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm font-semibold tracking-widest uppercase text-cyan-neon mb-3">About Me</p>
          <h2 className="text-3xl sm:text-5xl font-bold dark:text-white text-navy-900 mb-8">
            Crafting Digital{' '}
            <span className="bg-gradient-to-r from-cyan-neon to-accent-purple bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-6">
            <p className="text-lg dark:text-gray-300 text-gray-600 leading-relaxed">
              With over three years of experience in web development and UI design, I specialize in creating
              immersive digital experiences that blend aesthetics with functionality. My approach combines
              clean code architecture with thoughtful design decisions to deliver products that users love.
            </p>
            <p className="text-lg dark:text-gray-300 text-gray-600 leading-relaxed">
              I've worked with startups and established companies alike, helping them translate complex ideas
              into elegant, performant interfaces. From interactive dashboards to animated landing pages,
              every project is an opportunity to push creative boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`group relative p-6 rounded-2xl dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 backdrop-blur-sm text-center transition-all duration-500 hover:scale-105 hover:border-cyan-neon/30 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-neon/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-cyan-neon" />
                <p className="text-3xl font-bold dark:text-white text-navy-900 mb-1">{stat.value}</p>
                <p className="text-sm dark:text-gray-400 text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
