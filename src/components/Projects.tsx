import { useInView } from '../hooks/useInView';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';

const projects = [
  {
    title: 'Nebula Dashboard',
    description: 'Real-time analytics dashboard with interactive data visualizations and dark mode support.',
    tags: ['React', 'D3.js', 'Tailwind'],
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Pulse UI Kit',
    description: 'A comprehensive design system with 50+ components built for modern web applications.',
    tags: ['UI/UX', 'Figma', 'React'],
    image: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Wavelength Music',
    description: 'Music streaming platform with audio visualization and personalized recommendations.',
    tags: ['Next.js', 'WebAudio', 'Animation'],
    image: 'https://images.pexels.com/photos/1190197/pexels-photo-1190197.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Terraform Studio',
    description: '3D landscape generator with real-time editing and procedural terrain algorithms.',
    tags: ['Three.js', 'WebGL', 'TypeScript'],
    image: 'https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Cipher Messenger',
    description: 'End-to-end encrypted messaging app with ephemeral messages and voice calls.',
    tags: ['React Native', 'Node.js', 'Crypto'],
    image: 'https://images.pexels.com/photos/6078291/pexels-photo-6078291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Aurora Commerce',
    description: 'E-commerce platform with AR product previews and seamless checkout experience.',
    tags: ['Next.js', 'Stripe', 'AR'],
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Projects() {
  const { ref, isInView } = useInView();
  const [offset, setOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const total = projects.length;

  const slide = useCallback(
    (dir: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setOffset((prev) => (prev + dir + total) % total);
      setTimeout(() => setIsTransitioning(false), 400);
    },
    [isTransitioning, total]
  );

  useEffect(() => {
    const timer = setInterval(() => slide(1), 5000);
    return () => clearInterval(timer);
  }, [slide]);

  // Build a 3-card window from the circular list
  const getVisible = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(projects[(offset + i) % total]);
    }
    return visible;
  };

  const visible = getVisible();

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 dark:bg-navy-800 bg-gray-50" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-cyan-neon mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-5xl font-bold dark:text-white text-navy-900">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-neon to-accent-purple bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div
          className={`relative transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Nav arrows */}
          <button
            onClick={() => slide(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 w-11 h-11 rounded-xl dark:bg-navy-700/80 bg-white/80 border dark:border-white/10 border-gray-200 backdrop-blur-sm flex items-center justify-center dark:text-white text-navy-900 hover:border-cyan-neon/40 hover:text-cyan-neon transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => slide(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 w-11 h-11 rounded-xl dark:bg-navy-700/80 bg-white/80 border dark:border-white/10 border-gray-200 backdrop-blur-sm flex items-center justify-center dark:text-white text-navy-900 hover:border-cyan-neon/40 hover:text-cyan-neon transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 3-card track */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-8">
            {visible.map((project, i) => (
              <div
                key={`${offset}-${i}`}
                className="group relative rounded-2xl dark:bg-white/5 bg-white border dark:border-white/10 border-gray-200 overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-cyan-neon/5 hover:border-cyan-neon/30"
                style={{ animation: 'fadeIn 0.4s ease-out' }}
              >
                {/* Glow border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-neon/20 via-accent-purple/20 to-accent-pink/20 -z-10 blur-xl" />

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 rounded-lg dark:bg-white/10 bg-navy-900/10 backdrop-blur-sm flex items-center justify-center dark:text-white text-white hover:bg-cyan-neon/20 transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-lg dark:bg-white/10 bg-navy-900/10 backdrop-blur-sm flex items-center justify-center dark:text-white text-white hover:bg-cyan-neon/20 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold dark:text-white text-navy-900 mb-2">{project.title}</h3>
                  <p className="text-sm dark:text-gray-400 text-gray-500 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full dark:bg-cyan-neon/10 bg-cyan-neon/5 text-cyan-neon border dark:border-cyan-neon/20 border-cyan-neon/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setOffset(i);
                    setTimeout(() => setIsTransitioning(false), 400);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === offset
                    ? 'w-8 bg-gradient-to-r from-cyan-neon to-accent-purple'
                    : 'w-2 dark:bg-white/20 bg-gray-300 hover:bg-cyan-neon/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
