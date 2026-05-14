import { useEffect, useRef, useState } from 'react';
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

const CLIPS = [];


export default function Clips() {
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
          {/* Empty state */}
          <AnimatedSection delay={100} className="py-24 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[#111111] border border-[#1e1e1e] rounded-full flex items-center justify-center mb-6">
              <TwitchIcon size={32} className="text-[#c0392b]" />
            </div>
            <h3
              className="text-white text-3xl font-bold uppercase mb-3"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              No Clips Yet
            </h3>
            <p className="text-gray-500 text-sm max-w-sm mb-8 leading-relaxed">
              Check back soon — clips will be posted here once the streams get going. In the meantime, catch everything live on Twitch.
            </p>
            <a
              href="https://www.twitch.tv/justbobl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#c0392b] hover:bg-[#e74c3c] text-white font-bold px-8 py-4 rounded text-sm tracking-widest uppercase transition-all duration-200 hover:scale-105 red-glow"
              style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.12em' }}
            >
              <TwitchIcon size={18} />
              Watch Live on Twitch
            </a>
          </AnimatedSection>

        </div>
      </section>
    </div>
  );
}
