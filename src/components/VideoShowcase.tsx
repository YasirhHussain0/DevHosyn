import { useInView } from '../hooks/useInView';
import { Play, Monitor, Smartphone, Palette } from 'lucide-react';
import { useState } from 'react';

const videos = [
  {
    title: 'UI Animation Demo',
    description: 'Smooth micro-interactions and page transitions for a SaaS dashboard.',
    icon: Monitor,
    gradient: 'from-cyan-neon to-blue-500',
  },
  {
    title: 'Landing Page Transition',
    description: 'Scroll-driven animations with parallax effects and reveal sequences.',
    icon: Palette,
    gradient: 'from-accent-purple to-accent-pink',
  },
  {
    title: 'Mobile App Prototype',
    description: 'Gesture-based navigation with haptic feedback and fluid animations.',
    icon: Smartphone,
    gradient: 'from-accent-orange to-accent-pink',
  },
];

export default function VideoShowcase() {
  const { ref, isInView } = useInView();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="videos" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 dark:bg-navy-900 bg-white" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-pink/5 rounded-full blur-3xl -translate-y-1/2" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm font-semibold tracking-widest uppercase text-cyan-neon mb-3">Showcase</p>
          <h2 className="text-3xl sm:text-5xl font-bold dark:text-white text-navy-900">
            Video{' '}
            <span className="bg-gradient-to-r from-accent-pink to-accent-orange bg-clip-text text-transparent">
              Reel
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <div
              key={video.title}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Video placeholder */}
              <div className="relative aspect-video dark:bg-navy-700 bg-gray-100 rounded-2xl overflow-hidden border dark:border-white/10 border-gray-200">
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${video.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`relative transition-all duration-500 ${hoveredIdx === i ? 'scale-110' : 'scale-100'}`}>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${video.gradient} flex items-center justify-center shadow-lg transition-all duration-500 ${hoveredIdx === i ? 'shadow-xl' : ''}`}>
                      <Play className="w-6 h-6 text-white ml-0.5" />
                    </div>
                    {/* Pulse ring */}
                    <div className={`absolute inset-0 rounded-full border-2 border-white/20 transition-all duration-500 ${hoveredIdx === i ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`} />
                  </div>
                </div>

                {/* Blur-to-sharp overlay */}
                <div className={`absolute inset-0 backdrop-blur-sm transition-all duration-700 ${hoveredIdx === i ? 'blur-0 opacity-0' : 'blur-sm opacity-30'}`} />
              </div>

              {/* Info */}
              <div className="mt-4 flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${video.gradient} flex items-center justify-center flex-shrink-0`}>
                  <video.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold dark:text-white text-navy-900 mb-1">{video.title}</h3>
                  <p className="text-sm dark:text-gray-400 text-gray-500">{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
