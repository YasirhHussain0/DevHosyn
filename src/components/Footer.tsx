import { Github, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const socials = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 dark:bg-navy-900 bg-slate-50 border-t dark:border-white/5 border-gray-200" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-10 mb-10">
          {/* Left: Logo + paragraph */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-neon to-accent-purple bg-clip-text text-transparent">
                YH
              </span>
              <span className="dark:text-white text-navy-900 font-bold text-2xl">.</span>
            </div>
            <p className="text-sm dark:text-gray-400 text-gray-500 leading-relaxed">
              Creative developer crafting modern, interactive web experiences with smooth animations and clean UI systems. Available for freelance projects and collaborations.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 flex items-center justify-center dark:text-gray-400 text-gray-500 hover:text-gray-500 hover:border-cyan-neon/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact info + socials */}
          <div className="flex flex-col items-start sm:items-end gap-6">
            <h4 className="dark:text-gray-300 text-gay-600 font-semibold text-xl"> Contacts</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:yasirhosyn@gmail.com" className="flex items-center gap-3 dark:text-gray-300 text-gray-600 hover:text-cyan-500 transition-colors">
                <div className="w-8 h-8 rounded-full dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-cyan-neon hover:text-cyan-500" />
                </div>
                <span className="text-sm hover:text-cyan-500">yasirhosyn@gmail.com</span>
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-3 dark:text-gray-300 text-gray-600 hover:text-cyan-500 transition-colors">
                <div className="w-8 h-8 rounded-full dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-cyan-neon hover:text-cyan-500" />
                </div>
                <span className="text-sm hover:text-cyan-500">+92 (555) 123-4567</span>
              </a>
            </div>

            
          </div>
        </div>

        {/* Copyright - centered */}
        <div className="pt-6 border-t dark:border-white/5 border-gray-100 text-center">
          <p className="text-sm dark:text-gray-500 text-gray-400">
            &copy; {new Date().getFullYear()} Yasir Hussain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
