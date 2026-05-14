import { useEffect, useRef, useState } from 'react';
import { Play, ExternalLink, Filter } from 'lucide-react';
import TwitchIcon from '../components/TwitchIcon';

function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
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
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const CLIPS = [
  {
    id: 1,
    title: 'Clutch 1v3 on Border',
    game: 'Rainbow Six Siege',
    type: 'twitch',
    category: 'r6',
    url: 'https://www.twitch.tv/justbobl/clip/example1',
    clipId: 'GiantFurryPeanutWutFace',
    description: 'Down to 1v3 on Border — site defence that somehow worked out.',
  },
  {
    id: 2,
    title: 'Perfect Flank on Chalet',
    game: 'Rainbow Six Siege',
    type: 'twitch',
    category: 'r6',
    url: 'https://www.twitch.tv/justbobl/clip/example2',
    clipId: 'example2',
    description: 'Read the attack rotation perfectly and caught them off guard.',
  },
  {
    id: 3,
    title: 'Reaper Force Opening',
    game: 'Rainbow Six Siege',
    type: 'twitch',
    category: 'r6',
    url: 'https://www.twitch.tv/justbobl/clip/example3',
    clipId: 'example3',
    description: 'First engagement of the round goes beautifully.',
  },
  {
    id: 4,
    title: 'Deep Sea Terror',
    game: 'Subnautica',
    type: 'twitch',
    category: 'survival',
    url: 'https://www.twitch.tv/justbobl/clip/example4',
    clipId: 'example4',
    description: 'Encountered a Reaper Leviathan. Did not go well.',
  },
  {
    id: 5,
    title: 'Cannibal Base Raid',
    game: 'The Forest',
    type: 'twitch',
    category: 'survival',
    url: 'https://www.twitch.tv/justbobl/clip/example5',
    clipId: 'example5',
    description: 'Solo cave raid gone absolutely chaotic.',
  },
  {
    id: 6,
    title: 'Op Ash Entry Frag',
    game: 'Rainbow Six Siege',
    type: 'twitch',
    category: 'r6',
    url: 'https://www.twitch.tv/justbobl/clip/example6',
    clipId: 'example6',
    description: 'Aggressive Ash entry — exactly how it should be done.',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Clips' },
  { id: 'r6', label: 'Rainbow Six Siege' },
  { id: 'survival', label: 'Survival Games' },
];

export default function Clips() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [playing, setPlaying] = useState(null);

  const filtered = activeCategory === 'all'
    ? CLIPS
    : CLIPS.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="relative py-24 overflow-hidden grid-bg border-b border-[#1e1e1e]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#c0392b]/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c0392b] font-bold text-xs tracking-widest uppercase mb-4 fade-up" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Highlights & VODs
          </p>
          <h1
            className="text-5xl sm:text-7xl font-bold text-white uppercase mb-6 fade-up fade-up-delay-1"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Clip <span className="text-[#c0392b]">Archive</span>
          </h1>
          <p className="text-gray-400 max-w-xl fade-up fade-up-delay-2">
            Best moments from the stream — clutches, fails, and everything in between.
          </p>
        </div>
      </section>

      {/* Clips */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter bar */}
          <AnimatedSection className="flex flex-wrap gap-3 mb-12 items-center">
            <Filter size={14} className="text-gray-500" />
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs font-bold tracking-widest uppercase px-4 py-2 rounded border transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-[#c0392b] border-[#c0392b] text-white'
                    : 'bg-transparent border-[#1e1e1e] text-gray-500 hover:border-[#c0392b]/40 hover:text-gray-300'
                }`}
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                {cat.label}
              </button>
            ))}
          </AnimatedSection>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((clip, i) => (
              <AnimatedSection key={clip.id} delay={i * 80}>
                <div className="clip-card bg-[#111111] border border-[#1e1e1e] rounded overflow-hidden hover:border-[#c0392b]/30 group">
                  {/* Embed or thumbnail */}
                  {playing === clip.id ? (
                    <div className="aspect-video bg-black">
                      <iframe
                        src={`https://clips.twitch.tv/embed?clip=${clip.clipId}&parent=${window.location.hostname}&autoplay=true`}
                        className="w-full h-full"
                        allowFullScreen
                        title={clip.title}
                      />
                    </div>
                  ) : (
                    <div
                      className="relative aspect-video bg-[#0d0d0d] cursor-pointer overflow-hidden"
                      onClick={() => setPlaying(clip.id)}
                    >
                      {/* Placeholder with game label */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-[#c0392b]/20 border border-[#c0392b]/30 rounded-full flex items-center justify-center group-hover:bg-[#c0392b]/40 group-hover:scale-110 transition-all duration-300">
                          <Play size={26} className="text-[#c0392b] ml-1" />
                        </div>
                      </div>
                      {/* Top-left game tag */}
                      <div className="absolute top-3 left-3">
                        <span
                          className="bg-[#0a0a0a]/90 border border-[#1e1e1e] text-gray-400 text-xs px-2 py-1 rounded"
                          style={{ fontFamily: 'Rajdhani, sans-serif' }}
                        >
                          {clip.game}
                        </span>
                      </div>
                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                    </div>
                  )}

                  {/* Info */}
                  <div className="p-5">
                    <h3
                      className="text-white font-bold text-lg mb-1 group-hover:text-[#e74c3c] transition-colors"
                      style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    >
                      {clip.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4">{clip.description}</p>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => setPlaying(playing === clip.id ? null : clip.id)}
                        className={`flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase transition-colors ${
                          playing === clip.id ? 'text-gray-400 hover:text-white' : 'text-[#c0392b] hover:text-[#e74c3c]'
                        }`}
                        style={{ fontFamily: 'Rajdhani, sans-serif' }}
                      >
                        <Play size={11} />
                        {playing === clip.id ? 'Close' : 'Play Clip'}
                      </button>
                      <a
                        href={clip.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-600 hover:text-gray-400 text-xs transition-colors"
                      >
                        <ExternalLink size={11} />
                        <span style={{ fontFamily: 'Rajdhani, sans-serif' }}>Twitch</span>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600">No clips found in this category.</p>
            </div>
          )}

          {/* Twitch CTA */}
          <AnimatedSection delay={300} className="mt-20 text-center border-t border-[#1e1e1e] pt-16">
            <TwitchIcon size={32} className="text-gray-700 mx-auto mb-4" />
            <h3 className="text-white text-2xl font-bold uppercase mb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Want More?
            </h3>
            <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
              Full VODs and past broadcasts available on Twitch. Follow to get notified when a stream goes live.
            </p>
            <a
              href="https://www.twitch.tv/justbobl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#c0392b] hover:bg-[#e74c3c] text-white font-bold px-8 py-4 rounded text-sm tracking-widest uppercase transition-all duration-200 hover:scale-105 red-glow"
              style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.12em' }}
            >
              <TwitchIcon size={18} />
              Visit Twitch Channel
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
