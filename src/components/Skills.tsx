import { useInView } from '../hooks/useInView';

const skills = [
  { name: 'WordPress', level: 95, color: 'from-amber-400 to-amber-500', stroke: 'text-amber-400' },
  { name: 'PHP', level: 88, color: 'from-cyan-neon to-blue-400', stroke: 'text-cyan-400' },
  { name: 'Custom Theme', level: 90, color: 'from-accent-purple to-accent-pink', stroke: 'text-purple-400' },
  { name: 'WooCommerce', level: 85, color: 'from-accent-orange to-accent-pink', stroke: 'text-orange-400' },
  { name: 'JavaScript', level: 82, color: 'from-teal-400 to-cyan-neon', stroke: 'text-teal-400' },
  { name: 'Performance Optimization', level: 87, color: 'from-indigo-400 to-purple-500', stroke: 'text-indigo-400' },
];

export default function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 dark:bg-navy-800 bg-gray-50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] dark:bg-cyan-neon/5 bg-cyan-neon/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm font-semibold tracking-widest uppercase dark:text-cyan-neon text-cyan-600 mb-3">Expertise</p>
          <h2 className="text-3xl sm:text-5xl font-bold dark:text-white text-navy-900">
            Skills &{' '}
            <span className="bg-gradient-to-r from-cyan-neon to-accent-purple bg-clip-text text-transparent">
              Abilities
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold dark:text-white text-navy-900">{skill.name}</span>
                <span className="text-sm font-mono dark:text-gray-400 text-gray-500">{skill.level}%</span>
              </div>
              <div className="relative h-3 rounded-full dark:bg-white/10 bg-gray-200 overflow-hidden">
                <div
                  className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{
                    width: isInView ? `${skill.level}%` : '0%',
                    transitionDelay: `${400 + i * 150}ms`,
                  }}
                >
                  <div className="absolute inset-0 rounded-full opacity-50 blur-sm bg-gradient-to-r from-white/40 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Circular progress indicators */}
        <div className="mt-16 grid grid-cols-6 gap-4">
          {skills.map((skill, i) => {
            const circumference = 2 * Math.PI * 36;
            const offset = circumference - (skill.level / 100) * circumference;
            return (
              <div
                key={`circle-${skill.name}`}
                className={`flex flex-col items-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${600 + i * 100}ms` }}
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                    <circle
                      cx="40" cy="40" r="36"
                      fill="none"
                      className="dark:stroke-white/10 stroke-gray-200"
                      strokeWidth="4"
                    />
                    <circle
                      cx="40" cy="40" r="36"
                      fill="none"
                      className={`stroke-current ${skill.stroke}`}
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={isInView ? offset : circumference}
                      style={{ transition: `stroke-dashoffset 1.5s ease-out ${0.6 + i * 0.15}s` }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold dark:text-white text-navy-900">{skill.level}</span>
                  </div>
                </div>
                <span className="mt-2 text-xs font-medium dark:text-gray-400 text-gray-500 text-center">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
