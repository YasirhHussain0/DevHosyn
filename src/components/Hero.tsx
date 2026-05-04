import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900 from-slate-50 via-blue-50 to-indigo-50" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-neon/15 rounded-full blur-3xl animate-float-medium" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-pink/10 rounded-full blur-3xl animate-glow-pulse" />

      {/* Floating shapes */}
      <div className="absolute top-20 left-[15%] w-20 h-20 border border-cyan-neon/20 rounded-xl rotate-12 animate-float-slow backdrop-blur-sm" />
      <div className="absolute top-40 right-[20%] w-16 h-16 border border-accent-purple/20 rounded-full animate-float-medium backdrop-blur-sm" />
      <div className="absolute bottom-32 left-[25%] w-12 h-12 border border-accent-pink/20 rounded-lg -rotate-12 animate-float-fast backdrop-blur-sm" />
      <div className="absolute bottom-48 right-[15%] w-24 h-24 border border-cyan-neon/10 rounded-2xl rotate-45 animate-float-slow backdrop-blur-sm" />
      <div className="absolute top-1/3 right-[10%] w-8 h-8 bg-cyan-neon/10 rounded-full animate-float-fast" />
      <div className="absolute bottom-1/3 left-[10%] w-6 h-6 bg-accent-purple/10 rounded-full animate-float-medium" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(rgba(0,245,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.03)_1px,transparent_1px)]" />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-white/5 bg-navy-900/5 border dark:border-white/10 border-navy-900/10 backdrop-blur-sm mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-cyan-neon" />
          <span className="text-sm font-medium dark:text-gray-300 text-gray-600">Available for freelance work</span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-slide-up">
<<<<<<< HEAD
          <span className="dark:text-white text-navy-900">Yasir</span>{' '}
          <span className="bg-gradient-to-r from-cyan-neon via-accent-purple to-accent-pink bg-clip-text text-transparent bg-300% animate-gradient-shift">
            Hussain
=======
          <span className="dark:text-white text-navy-900">Alex</span>{' '}
          <span className="bg-gradient-to-r from-cyan-neon via-accent-purple to-accent-pink bg-clip-text text-transparent bg-300% animate-gradient-shift">
            Carter
>>>>>>> bedb7bb5242c2f985d03dbb614bee4927a61044f
          </span>
        </h1>

        <p className="text-xl sm:text-2xl font-medium dark:text-gray-300 text-gray-600 mb-4 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Creative Developer & UI Designer
        </p>

        <p className="text-base sm:text-lg dark:text-gray-400 text-gray-500 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          I build modern, interactive web experiences with smooth animations and clean UI systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.45s' }}>
          <button
            onClick={() => scrollTo('projects')}
            className="group relative px-8 py-4 rounded-xl font-semibold text-navy-900 dark:text-navy-900 bg-gradient-to-r from-cyan-neon to-accent-purple overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-cyan-neon opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="px-8 py-4 rounded-xl font-semibold dark:text-white text-navy-900 border dark:border-white/20 border-navy-900/20 dark:hover:border-cyan-neon/50 hover:border-cyan-neon/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 dark:bg-white/5 bg-navy-900/5"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 dark:text-gray-500 text-gray-400 animate-bounce"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </button>
    </section>
  );
}
