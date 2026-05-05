import { useInView } from '../hooks/useInView';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export default function Contact() {
  const { ref, isInView } = useInView();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 dark:bg-navy-900 bg-white" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] dark:bg-accent-purple/5 bg-accent-purple/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm font-semibold tracking-widest uppercase dark:text-cyan-neon text-cyan-600 mb-3">Get in Touch</p>
          <h2 className="text-3xl sm:text-5xl font-bold dark:text-white text-navy-900">
            Let's Work{' '}
            <span className="bg-gradient-to-r from-cyan-neon to-accent-purple bg-clip-text text-transparent">
              Together
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg dark:text-gray-300 text-gray-600 leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'yasirhosyn@gmail.com' },
                { icon: Phone, label: '+92 (555) 123-4567' },
                { icon: MapPin, label: 'ABC, Pakistan' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 flex items-center justify-center group-hover:border-cyan-neon/30 dark:group-hover:border-cyan-neon/30 group-hover:border-cyan-600/30 transition-colors duration-300">
                    <item.icon className="w-5 h-5 dark:text-cyan-neon text-cyan-600" />
                  </div>
                  <span className="dark:text-gray-300 text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-3 space-y-5 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium dark:text-gray-300 text-gray-600 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formState.name}
                onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 dark:text-white text-navy-900 placeholder:dark:text-gray-500 placeholder:text-gray-400 focus:outline-none focus:border-cyan-neon/50 focus:ring-1 focus:ring-cyan-neon/20 dark:focus:border-cyan-neon/50 focus:border-cyan-600/50 dark:focus:ring-cyan-neon/20 focus:ring-cyan-600/20 transition-all duration-300"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium dark:text-gray-300 text-gray-600 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formState.email}
                onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 dark:text-white text-navy-900 placeholder:dark:text-gray-500 placeholder:text-gray-400 focus:outline-none focus:border-cyan-neon/50 focus:ring-1 focus:ring-cyan-neon/20 dark:focus:border-cyan-neon/50 focus:border-cyan-600/50 dark:focus:ring-cyan-neon/20 focus:ring-cyan-600/20 transition-all duration-300"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium dark:text-gray-300 text-gray-600 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 dark:text-white text-navy-900 placeholder:dark:text-gray-500 placeholder:text-gray-400 focus:outline-none focus:border-cyan-neon/50 focus:ring-1 focus:ring-cyan-neon/20 dark:focus:border-cyan-neon/50 focus:border-cyan-600/50 dark:focus:ring-cyan-neon/20 focus:ring-cyan-600/20 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r dark:from-cyan-neon from-cyan-600 dark:to-accent-purple to-accent-purple overflow-hidden transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                ) : submitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple dark:to-cyan-neon to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r dark:from-cyan-neon from-cyan-600 to-accent-purple rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
