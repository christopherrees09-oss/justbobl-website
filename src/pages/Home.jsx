import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Play, MapPin, Zap } from 'lucide-react';
import TwitchIcon from '../components/TwitchIcon';

const CLIPS = [
  {
    id: 1,
    title: 'Clutch 1v3 on Border',
    game: 'Rainbow Six Siege',
    embed: 'https://clips.twitch.tv/embed?clip=GiantFurryPeanutWutFace-example1&parent=localhost',
    thumbnail: null,
  },
  {
    id: 2,
    title: 'Insane Flank on Chalet',
    game: 'Rainbow Six Siege',
    embed: 'https://clips.twitch.tv/embed?clip=example2&parent=localhost',
    thumbnail: null,
  },
  {
    id: 3,
    title: 'Base Defence Subnautica',
    game: 'Subnautica',
    embed: 'https://clips.twitch.tv/embed?clip=example3&parent=localhost',
    thumbnail: null,
  },
];

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

export default function Home() {
  const [isLive, setIsLive] = useState(false);

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#c0392b]/5 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#c0392b]/3 blur-[80px]" />
          {/* Decorative diagonal lines */}
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#c0392b]/20 to-transparent" style={{ right: '20%' }} />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#c0392b]/10 to-transparent" style={{ right: '40%' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Live badge */}
          {isLive && (
            <div className="inline-flex items-center gap-2 bg-[#c0392b]/20 border border-[#c0392b]/40 rounded-full px-4 py-1.5 mb-8 fade-up">
              <span className="w-2 h-2 bg-[#c0392b] rounded-full live-pulse" />
              <span className="text-[#e74c3c] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Live Now on Twitch
              </span>
            </div>
          )}

          {/* Location badge */}
          <div className="inline-flex items-center gap-1.5 text-gray-500 text-xs tracking-widest uppercase mb-6 fade-up fade-up-delay-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            <MapPin size={12} className="text-[#c0392b]" />
            Isle of Man, UK
          </div>

          {/* Main heading */}
          <h1
            className="fade-up fade-up-delay-1 text-[clamp(4rem,12vw,9rem)] font-bold leading-none tracking-tight uppercase text-white glitch mb-4"
            style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '-0.02em' }}
          >
            just<span className="text-[#c0392b]">bobl</span>
          </h1>

          <p
            className="fade-up fade-up-delay-2 text-gray-400 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-10"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Tactical Rainbow Six Siege gameplay from the Isle of Man. Grinding ranked, calling strats, breaking sites.
          </p>

          {/* CTA buttons */}
          <div className="fade-up fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="https://www.twitch.tv/justbobl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-[#c0392b] hover:bg-[#e74c3c] text-white font-bold px-8 py-4 rounded text-sm tracking-widest uppercase transition-all duration-200 hover:scale-105 red-glow"
              style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.12em' }}
            >
              <TwitchIcon size={18} />
              Watch on Twitch
            </a>
            <Link
              to="/clips"
              className="flex items-center gap-2.5 bg-transparent border border-[#c0392b]/40 hover:border-[#c0392b] text-gray-300 hover:text-white font-bold px-8 py-4 rounded text-sm tracking-widest uppercase transition-all duration-200"
              style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.12em' }}
            >
              <Play size={16} />
              View Clips
            </Link>
          </div>

          {/* Stats bar */}
          <div className="fade-up fade-up-delay-4 flex flex-wrap gap-8 justify-center">
            {[
              { label: 'Main Game', value: 'R6 Siege' },
              { label: 'Platform', value: 'PC' },
              { label: 'Timezone', value: 'GMT' },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <p className="text-[#c0392b] font-bold text-xl" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{value}</p>
                <p className="text-gray-600 text-xs tracking-widest uppercase mt-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-600 text-xs tracking-widest uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Scroll</span>
          <ChevronDown size={16} className="text-gray-600" />
        </div>
      </section>

      {/* LIVE BANNER */}
      <section className="bg-[#111111] border-y border-[#1e1e1e] py-0">
        <div className="animated-border h-[2px]" />
        <a
          href="https://www.twitch.tv/justbobl"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-4 py-5 hover:bg-[#c0392b]/5 transition-colors group"
        >
          <TwitchIcon size={20} className="text-[#9146ff]" />
          <span className="text-gray-300 text-sm tracking-widest uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Follow on Twitch
          </span>
          <span className="text-[#c0392b] font-bold tracking-widest text-sm group-hover:translate-x-1 transition-transform" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            twitch.tv/justbobl →
          </span>
        </a>
        <div className="animated-border h-[2px]" />
      </section>

      {/* BIO SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-[#c0392b] font-bold text-xs tracking-widest uppercase mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              About the Streamer
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-6 uppercase"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              Who is <span className="text-[#c0392b]">justbobl?</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              A Rainbow Six Siege content creator hailing from the Isle of Man. Started on PS5 and made the jump to PC to compete at a higher level — and never looked back.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Expect tactical comms, ranked grind sessions, and the occasional survival game detour into Subnautica or The Forest. Always honest, always trying to improve.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[#c0392b] font-bold tracking-widest uppercase text-sm hover:gap-3 transition-all"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              Full Story →
            </Link>
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Zap size={20} />, title: 'Rainbow Six Siege', desc: 'Primary game — ranked grind, attack & defence' },
              { icon: <Zap size={20} />, title: 'The Forest', desc: 'Survival horror — solo and co-op sessions' },
              { icon: <Zap size={20} />, title: 'Subnautica', desc: 'Deep sea survival, exploration, base building' },
              { icon: <Zap size={20} />, title: 'Stranded Deep', desc: 'Island survival with chat interaction' },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#111111] border border-[#1e1e1e] rounded p-5 hover:border-[#c0392b]/40 transition-all duration-300 group"
              >
                <div className="text-[#c0392b] mb-3 group-hover:scale-110 transition-transform">{icon}</div>
                <p className="text-white font-bold text-sm mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* LATEST CLIPS */}
      <section className="py-24 bg-[#0d0d0d] border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-[#c0392b] font-bold text-xs tracking-widest uppercase mb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Recent Highlights
                </p>
                <h2 className="text-4xl font-bold text-white uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Latest Clips
                </h2>
              </div>
              <Link
                to="/clips"
                className="text-gray-400 hover:text-[#c0392b] text-sm font-bold tracking-widest uppercase transition-colors"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                View All →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CLIPS.map((clip) => (
                <div key={clip.id} className="clip-card bg-[#111111] border border-[#1e1e1e] rounded overflow-hidden hover:border-[#c0392b]/30">
                  <div className="relative bg-[#0a0a0a] aspect-video flex items-center justify-center group cursor-pointer">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-[#c0392b]/20 border border-[#c0392b]/40 rounded-full flex items-center justify-center group-hover:bg-[#c0392b]/40 transition-all">
                        <Play size={24} className="text-[#c0392b] ml-1" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-60" />
                  </div>
                  <div className="p-4">
                    <span className="text-[#c0392b] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{clip.game}</span>
                    <p className="text-white font-semibold mt-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{clip.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
