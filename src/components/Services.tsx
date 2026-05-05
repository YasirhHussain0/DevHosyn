import { useInView } from '../hooks/useInView';
import { Code2, Palette, Smartphone, Globe, Zap, Layers } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building performant, scalable web applications with modern frameworks and clean architecture.',
    gradient: 'from-cyan-neon to-blue-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Crafting intuitive interfaces with user-centered design principles and delightful micro-interactions.',
    gradient: 'from-accent-purple to-accent-pink',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps with native feel, smooth animations, and responsive layouts.',
    gradient: 'from-accent-orange to-accent-pink',
  },
  {
    icon: Globe,
    title: 'Full-Stack Solutions',
    description: 'End-to-end product development from database design to deployment and DevOps pipelines.',
    gradient: 'from-teal-400 to-cyan-neon',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Auditing and optimizing load times, rendering performance, and overall user experience.',
    gradient: 'from-amber-400 to-accent-orange',
  },
  {
    icon: Layers,
    title: 'Design Systems',
    description: 'Building reusable component libraries and design tokens for consistent, maintainable UIs.',
    gradient: 'from-accent-purple to-cyan-neon',
  },
];

export default function Services() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 dark:bg-navy-900 bg-white" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] dark:bg-accent-pink/5 bg-accent-pink/10 rounded-full blur-3xl -translate-y-1/2" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold tracking-widest uppercase dark:text-cyan-neon text-cyan-600 mb-3">What I Offer</p>
          <h2 className="text-3xl sm:text-5xl font-bold dark:text-white text-navy-900">
            My{' '}
            <span className="bg-gradient-to-r from-cyan-neon to-accent-purple bg-clip-text text-transparent">
              Services
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative rounded-2xl dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 p-6 overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-cyan-neon/5 hover:border-cyan-neon/30 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-neon/20 via-accent-purple/20 to-accent-pink/20 -z-10 blur-xl" />

              {/* Gradient accent on top */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-bold dark:text-white text-navy-900 mb-2">{service.title}</h3>
              <p className="text-sm dark:text-gray-400 text-gray-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
