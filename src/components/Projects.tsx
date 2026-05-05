import { useInView } from '../hooks/useInView';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useMemo, useRef, useState, useCallback } from 'react';

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

  const trackRef = useRef<HTMLDivElement>(null);

  const [slidesPerView, setSlidesPerView] = useState(3);
  const [index, setIndex] = useState(projects.length);
  const [isAnimating, setIsAnimating] = useState(true);

  const total = projects.length;

  // ---------------- responsive ----------------
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setSlidesPerView(1);
      else if (window.innerWidth < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // ---------------- infinite clone ----------------
  const extended = useMemo(() => {
    return [...projects, ...projects, ...projects];
  }, []);

  const step = 100 / slidesPerView;

  // ---------------- navigation ----------------
  const move = useCallback((dir: number) => {
    if (!isAnimating) return;
    setIndex((prev) => prev + dir);
  }, [isAnimating]);

  // ---------------- seamless loop correction ----------------
  useEffect(() => {
    const timeout = setTimeout(() => {
      const max = total * 2;

      if (index >= max) {
        setIsAnimating(false);
        setIndex(total);
      }

      if (index <= 0) {
        setIsAnimating(false);
        setIndex(total);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [index, total]);

  // re-enable animation after reset
  useEffect(() => {
    if (!isAnimating) {
      const t = setTimeout(() => setIsAnimating(true), 50);
      return () => clearTimeout(t);
    }
  }, [isAnimating]);

  // ---------------- autoplay ----------------
  useEffect(() => {
    const timer = setInterval(() => move(1), 5000);
    return () => clearInterval(timer);
  }, [move]);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 dark:bg-navy-800 bg-gray-50" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] dark:bg-accent-purple/5 bg-accent-purple/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header (UNCHANGED) */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="text-sm font-semibold tracking-widest uppercase dark:text-cyan-neon text-cyan-600 mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold dark:text-white text-navy-900">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-neon to-accent-purple bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div
          className={`relative transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {/* arrows (UNCHANGED) */}
          <button
            onClick={() => move(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 w-11 h-11 rounded-xl dark:bg-navy-700/80 bg-white/80 border dark:border-white/10 border-gray-200 backdrop-blur-sm flex items-center justify-center dark:text-white text-navy-900 hover:border-cyan-neon/40 dark:hover:text-cyan-neon hover:text-cyan-600 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => move(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 w-11 h-11 rounded-xl dark:bg-navy-700/80 bg-white/80 border dark:border-white/10 border-gray-200 backdrop-blur-sm flex items-center justify-center dark:text-white text-navy-900 hover:border-cyan-neon/40 dark:hover:text-cyan-neon hover:text-cyan-600 transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* TRACK */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * step}%)`,
                transition: isAnimating ? 'transform 500ms ease-in-out' : 'none',
              }}
            >
              {extended.map((project, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-3 flex items-stretch"
                  style={{ flex: `0 0 ${100 / slidesPerView}%` }}
                >
                  <div className="group relative w-full h-full flex flex-col rounded-2xl dark:bg-white/5 bg-white border dark:border-white/10 border-gray-200 overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-cyan-neon/5 hover:border-cyan-neon/30">

                    {/* Image (UNCHANGED) */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t dark:from-navy-900/80 to-transparent" />

                      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-8 h-8 rounded-lg dark:bg-white/10 bg-white/80 backdrop-blur-sm flex items-center justify-center dark:text-white text-navy-900 hover:bg-cyan-neon/20 transition-colors">
                          <Github className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-lg dark:bg-white/10 bg-white/80 backdrop-blur-sm flex items-center justify-center dark:text-white text-navy-900 hover:bg-cyan-neon/20 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Content (FIXED) */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-lg font-bold dark:text-white text-navy-900 mb-2">
                        {project.title}
                      </h3>

                      <p className="text-sm dark:text-gray-400 text-gray-500 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium rounded-full dark:bg-cyan-neon/10 bg-cyan-600/5 dark:text-cyan-neon text-cyan-600 border dark:border-cyan-neon/20 border-cyan-600/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* dots (UNCHANGED) */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === (index % total)
                  ? 'w-8 bg-gradient-to-r from-cyan-neon to-accent-purple'
                  : 'w-2 dark:bg-white/20 bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}