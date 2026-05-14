import { useEffect, useRef, useState } from 'react';
import { Monitor, Gamepad2, MapPin, ChevronRight } from 'lucide-react';

function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const GAMES = [
  {
    name: 'Rainbow Six Siege',
    role: 'Main Game',
    description: 'Tactical FPS — my bread and butter. Ranked grind is the goal, always pushing to improve aim, callouts, and game sense.',
    tags: ['Ranked', 'Attack', 'Defence', 'Competitive'],
    color: '#c0392b',
  },
  {
    name: 'The Forest',
    role: 'Survival Horror',
    description: 'Brutal survival meets horror. Building bases, exploring caves, keeping the cannibals at bay — alone or with chat.',
    tags: ['Solo', 'Co-op', 'Survival', 'Horror'],
    color: '#27ae60',
  },
  {
    name: 'Subnautica',
    role: 'Ocean Survival',
    description: 'Deep sea exploration and base building. One of the most atmospheric games ever made — terrifying and beautiful.',
    tags: ['Exploration', 'Base Building', 'Story', 'Survival'],
    color: '#2980b9',
  },
  {
    name: 'Rocket League',
    role: 'Car Soccer',
    description: 'Rocket-powered cars meet football in this high-octane competitive game. Easy to learn, impossible to master.',
    tags: ['Competitive', 'Sports', 'Multiplayer'],
    color: '#d35400',
  },
];

const TIMELINE = [
  {
    year: '2020',
    title: 'PS5 Era Begins',
    description: 'Started gaming seriously on PlayStation 5. Rainbow Six Siege on console — learned the fundamentals, fell in love with the tactical gameplay.',
  },
  {
    year: '2022',
    title: 'Made the Switch to PC',
    description: 'Built a PC rig and moved R6 Siege to PC. The jump in performance and input precision was immediately noticeable. No going back.',
  },
  {
    year: '2023',
    title: 'Started Streaming',
    description: 'Launched the justbobl channel on Twitch. Started small, focused on authentic gameplay and building a community rather than chasing numbers.',
  },
  {
    year: '2024',
    title: 'Expanding the Content',
    description: 'Added survival games like The Forest and Subnautica to the mix. Variety content alongside the R6 core — something for everyone.',
  },
  {
    year: '2025',
    title: 'Community Growing',
    description: 'Discord community active, regulars in chat. Still based out of the Isle of Man, still grinding, still improving every session.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      {/* Page Header */}
      <section className="relative py-24 overflow-hidden grid-bg border-b border-[#1e1e1e]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#c0392b]/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c0392b] font-bold text-xs tracking-widest uppercase mb-4 fade-up" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Getting to Know Me
          </p>
          <h1
            className="text-5xl sm:text-7xl font-bold text-white uppercase mb-6 fade-up fade-up-delay-1"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            About <span className="text-[#c0392b]">justbobl</span>
          </h1>
          <div className="flex items-center gap-2 text-gray-500 fade-up fade-up-delay-2">
            <MapPin size={14} className="text-[#c0392b]" />
            <span className="text-sm tracking-widest uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Isle of Man, United Kingdom</span>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="grid md:grid-cols-5 gap-16 items-start">
            {/* Text — takes 3 cols */}
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold text-white uppercase mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                The Story So Far
              </h2>
              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  I'm justbobl — a Rainbow Six Siege streamer from the Isle of Man, a small island in the middle of the Irish Sea between England and Ireland. It's not exactly known as a gaming hotspot, but that's never stopped the grind.
                </p>
                <p>
                  My journey started on PS5, where I picked up Rainbow Six Siege and immediately got hooked on the tactical depth of the game. Operator choices, site setup, soft destruction, breach angles — there's nothing quite like it. But console had its limits.
                </p>
                <p>
                  The switch to PC was a turning point. Better frames, better input, better performance. I built a rig and never looked back. Siege on PC is a different game — more demanding, more rewarding.
                </p>
                <p>
                  I started streaming to share the experience — the highs, the clutches, the tilting losses, all of it. The channel's grown into a small but solid community of people who love tactical gaming and aren't afraid of a survival game detour every now and then.
                </p>
                <p>
                  Alongside Siege, you'll find me in The Forest, Subnautica, and Stranded Deep — games that scratch a completely different itch but still reward patience and strategic thinking.
                </p>
              </div>
            </div>

            {/* Info card — takes 2 cols */}
            <div className="md:col-span-2">
              <div className="bg-[#111111] border border-[#1e1e1e] rounded p-6 space-y-5">
                <h3 className="text-[#c0392b] font-bold tracking-widest uppercase text-xs mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Quick Facts
                </h3>
                {[
                  { label: 'Location', value: 'Isle of Man, UK', icon: <MapPin size={14} /> },
                  { label: 'Platform', value: 'PC (migrated from PS5)', icon: <Monitor size={14} /> },
                  { label: 'Main Game', value: 'Rainbow Six Siege', icon: <Gamepad2 size={14} /> },
                  { label: 'Timezone', value: 'GMT / BST', icon: null },
                  { label: 'Stream Focus', value: 'Ranked gameplay, community', icon: null },
                  { label: 'Streaming Since', value: '2023', icon: null },
                ].map(({ label, value, icon }) => (
                  <div key={label} className="flex items-start justify-between gap-4 border-b border-[#1e1e1e] pb-4 last:border-0 last:pb-0">
                    <span className="text-gray-500 text-sm flex items-center gap-1.5">
                      {icon && <span className="text-[#c0392b]">{icon}</span>}
                      {label}
                    </span>
                    <span className="text-white text-sm font-semibold text-right" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{value}</span>
                  </div>
                ))}
              </div>

              {/* Platform journey */}
              <div className="mt-4 bg-[#111111] border border-[#c0392b]/20 rounded p-6">
                <h3 className="text-[#c0392b] font-bold tracking-widest uppercase text-xs mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Platform Journey
                </h3>
                <div className="flex items-center gap-3">
                  <div className="bg-[#1e1e1e] rounded px-3 py-2 text-center">
                    <Gamepad2 size={20} className="text-gray-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-500" style={{ fontFamily: 'Rajdhani, sans-serif' }}>PS5</p>
                  </div>
                  <ChevronRight size={16} className="text-[#c0392b]" />
                  <div className="bg-[#c0392b]/10 border border-[#c0392b]/30 rounded px-3 py-2 text-center flex-1">
                    <Monitor size={20} className="text-[#c0392b] mx-auto mb-1" />
                    <p className="text-xs text-[#c0392b] font-bold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>PC (Current)</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-24 bg-[#0d0d0d] border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-[#c0392b] font-bold text-xs tracking-widest uppercase mb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              What I Play
            </p>
            <h2 className="text-4xl font-bold text-white uppercase mb-12" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              The Game Lineup
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {GAMES.map((game, i) => (
                <AnimatedSection key={game.name} delay={i * 100}>
                  <div
                    className="bg-[#111111] border border-[#1e1e1e] rounded p-6 hover:border-opacity-60 transition-all duration-300 group h-full"
                    style={{ '--hover-color': game.color }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = game.color + '40'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = ''}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span
                          className="text-xs font-bold tracking-widest uppercase"
                          style={{ fontFamily: 'Rajdhani, sans-serif', color: game.color }}
                        >
                          {game.role}
                        </span>
                        <h3 className="text-white text-xl font-bold mt-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                          {game.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{game.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {game.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded border border-[#1e1e1e] text-gray-500"
                          style={{ fontFamily: 'Rajdhani, sans-serif' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-[#c0392b] font-bold text-xs tracking-widest uppercase mb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              The Journey
            </p>
            <h2 className="text-4xl font-bold text-white uppercase mb-16" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              How We Got Here
            </h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-[#1e1e1e] md:-translate-x-1/2" />

              <div className="space-y-12">
                {TIMELINE.map((item, i) => (
                  <AnimatedSection key={item.year} delay={i * 100} className={`relative flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[#c0392b] rounded-full border-2 border-[#c0392b]/40 mt-1.5 flex-shrink-0" style={{ zIndex: 1 }} />

                    {/* Content */}
                    <div className={`ml-8 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                      <div className="bg-[#111111] border border-[#1e1e1e] rounded p-6 hover:border-[#c0392b]/30 transition-all duration-300">
                        <span className="text-[#c0392b] font-bold text-2xl" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{item.year}</span>
                        <h3 className="text-white font-bold text-lg mt-1 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
