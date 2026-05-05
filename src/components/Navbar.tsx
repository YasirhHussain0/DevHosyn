import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = ['About', 'Projects', 'Services', 'Skills', 'Contact'];

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl bg-navy-900/60 dark:bg-navy-900/60 bg-white/60 px-6 py-3 backdrop-blur-xl border border-white/10 dark:border-white/10 border-gray-200/50">
          <button onClick={() => scrollTo('hero')} className="text-xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-neon to-accent-purple bg-clip-text text-transparent">
              YH
            </span>
            <span className="dark:text-white text-navy-900">.</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-sm font-medium dark:text-gray-300 text-gray-600 hover:text-cyan-neon dark:hover:text-cyan-neon transition-colors duration-300"
              >
                {link}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="relative w-10 h-10 rounded-xl dark:bg-navy-700 bg-gray-100 flex items-center justify-center dark:hover:bg-navy-600 hover:bg-gray-200 transition-all duration-300"
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                <Sun
                  className={`absolute inset-0 h-5 w-5 text-amber-400 transition-all duration-500 ${
                    isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                  }`}
                />
                <Moon
                  className={`absolute inset-0 h-5 w-5 text-cyan-neon transition-all duration-500 ${
                    isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                  }`}
                />
              </div>
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 rounded-xl dark:bg-navy-700 bg-gray-100 flex items-center justify-center"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 dark:text-white text-navy-900" />
              ) : (
                <Menu className="w-5 h-5 dark:text-white text-navy-900" />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-2 rounded-2xl dark:bg-navy-800/90 bg-white/90 backdrop-blur-xl border dark:border-white/10 border-gray-200/50 p-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="block w-full text-left px-4 py-2 rounded-xl text-sm font-medium dark:text-gray-300 text-gray-600 dark:hover:bg-navy-700 hover:bg-gray-100 transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
