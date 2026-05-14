import { useEffect, useRef, useState } from 'react';
import { Users, MessageSquare, Zap, Shield, ExternalLink } from 'lucide-react';

const DiscordIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size }}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

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

const PERKS = [
  {
    icon: <MessageSquare size={22} />,
    title: 'Live Stream Chat',
    description: 'Dedicated channels for real-time stream chat, clip sharing, and match discussion.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Siege Strats',
    description: 'Drop callouts, strat ideas, and operator discussions in the dedicated Siege channels.',
  },
  {
    icon: <Shield size={22} />,
    title: 'Squad Up',
    description: 'Find team members for ranked stacks and casual sessions across all timezones.',
  },
  {
    icon: <Users size={22} />,
    title: 'Community Events',
    description: 'Subscriber tournaments, community games, and giveaways announced first in Discord.',
  },
];

const CHANNELS = [
  { name: '# announcements', color: '#c0392b', description: 'Stream schedule, updates' },
  { name: '# general', color: '#5865f2', description: 'Community chat' },
  { name: '# siege-strats', color: '#27ae60', description: 'R6 tactics & tips' },
  { name: '# clip-sharing', color: '#e67e22', description: 'Share your highlights' },
  { name: '# looking-for-team', color: '#8e44ad', description: 'Find squad members' },
  { name: '🔴 Stream Live', color: '#c0392b', description: 'Stream announcements' },
];

export default function Discord() {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="relative py-24 overflow-hidden grid-bg border-b border-[#1e1e1e]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#5865f2]/5 rounded-full blur-[120px]" />
          <div className="absolute top-0 right-1/3 w-[300px] h-[300px] bg-[#c0392b]/5 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex mb-6 fade-up">
            <div className="w-16 h-16 bg-[#5865f2]/20 border border-[#5865f2]/30 rounded-2xl flex items-center justify-center">
              <DiscordIcon size={32} />
            </div>
          </div>
          <p className="text-[#c0392b] font-bold text-xs tracking-widest uppercase mb-4 fade-up fade-up-delay-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Join the Community
          </p>
          <h1
            className="text-5xl sm:text-7xl font-bold text-white uppercase mb-6 fade-up fade-up-delay-2"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Discord <span className="text-[#5865f2]">Server</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto fade-up fade-up-delay-3">
            The justbobl community hub. Stream chat, Siege discussions, squad-finding, and more. Free to join — always active.
          </p>
        </div>
      </section>

      {/* Main join card */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {/* Big Discord card */}
            <div className="relative bg-[#111111] border border-[#1e1e1e] rounded-2xl overflow-hidden">
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-[#c0392b] via-[#5865f2] to-[#c0392b]" />

              {/* Background glow */}
              <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#5865f2]/5 to-transparent pointer-events-none" />

              <div className="relative p-8 sm:p-12">
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  {/* Left: info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-[#5865f2]/20 border border-[#5865f2]/30 rounded-xl flex items-center justify-center">
                        <DiscordIcon size={24} />
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>justbobl</p>
                        <p className="text-gray-500 text-xs">Official Discord Server</p>
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold text-white uppercase mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      Ready to Join the Squad?
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-8">
                      Whether you're a Siege sweater, a survival game fan, or just someone looking for a chill gaming community — this is the place. Drop in, say hi, and find your people.
                    </p>

                    {/* Stats */}
                    <div className="flex gap-8 mb-8">
                      {[
                        { label: 'Members', value: 'Growing' },
                        { label: 'Channels', value: '10+' },
                        { label: 'Vibe', value: 'Chill' },
                      ].map(({ label, value }) => (
                        <div key={label}>
                          <p className="text-white font-bold text-xl" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{value}</p>
                          <p className="text-gray-600 text-xs tracking-widest uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{label}</p>
                        </div>
                      ))}
                    </div>

                    <a
                      href="https://discord.gg/jhbFzMpdeH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-[#5865f2] hover:bg-[#4752c4] text-white font-bold px-8 py-4 rounded-lg text-sm tracking-widest uppercase transition-all duration-200 hover:scale-105"
                      style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.1em', boxShadow: '0 0 30px rgba(88,101,242,0.3)' }}
                    >
                      <DiscordIcon size={18} />
                      Join the Discord
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  {/* Right: Discord invite widget */}
                  <div className="lg:w-72 w-full flex-shrink-0">
                    {/* Invite widget card */}
                    <div className="bg-[#1e1f22] border border-[#2a2b2e] rounded-2xl overflow-hidden shadow-2xl">
                      {/* Banner */}
                      <div className="h-16 bg-gradient-to-r from-[#c0392b] to-[#5865f2] relative">
                        <div className="absolute inset-0 bg-black/20" />
                      </div>

                      {/* Server icon + name */}
                      <div className="px-5 pb-5">
                        <div className="flex items-end gap-3 -mt-8 mb-4">
                          <div className="w-16 h-16 bg-[#111111] border-4 border-[#1e1f22] rounded-2xl flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xl font-bold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>JB</span>
                          </div>
                        </div>
                        <p className="text-white font-bold text-lg leading-tight mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>justbobl</p>
                        <p className="text-gray-400 text-xs mb-4">Rainbow Six Siege Community</p>

                        {/* Online indicator */}
                        <div className="flex items-center gap-4 mb-5">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
                            <span className="text-gray-400 text-xs">Online now</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-gray-600 inline-block" />
                            <span className="text-gray-500 text-xs">Members</span>
                          </div>
                        </div>

                        {/* Channels preview */}
                        <div className="bg-[#2b2d31] rounded-lg p-3 mb-4 space-y-1">
                          {CHANNELS.slice(0, 4).map(ch => (
                            <div key={ch.name} className="flex items-center gap-2 py-0.5">
                              <span className="text-gray-500 text-xs font-mono truncate">{ch.name}</span>
                            </div>
                          ))}
                          <p className="text-gray-600 text-[10px] pt-1">+ more channels</p>
                        </div>

                        {/* Join button */}
                        <a
                          href="https://discord.gg/jhbFzMpdeH"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full bg-[#5865f2] hover:bg-[#4752c4] text-white font-bold py-2.5 rounded-lg text-sm transition-all duration-200 hover:scale-[1.02]"
                          style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05em' }}
                        >
                          <DiscordIcon size={16} />
                          Join Server
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs text-center mt-3">discord.gg/jhbFzMpdeH</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Perks grid */}
          <AnimatedSection delay={150} className="mt-16">
            <p className="text-[#c0392b] font-bold text-xs tracking-widest uppercase mb-3 text-center" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              What's Inside
            </p>
            <h2 className="text-3xl font-bold text-white uppercase mb-10 text-center" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Community Perks
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {PERKS.map((perk, i) => (
                <AnimatedSection key={perk.title} delay={i * 80}>
                  <div className="bg-[#111111] border border-[#1e1e1e] rounded-xl p-6 hover:border-[#5865f2]/30 transition-all duration-300 group">
                    <div className="text-[#5865f2] mb-3 group-hover:scale-110 transition-transform">{perk.icon}</div>
                    <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{perk.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{perk.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Final CTA */}
          <AnimatedSection delay={300} className="mt-16 text-center border-t border-[#1e1e1e] pt-16">
            <p className="text-gray-400 mb-2">Still on the fence?</p>
            <p className="text-gray-600 text-sm mb-8 max-w-md mx-auto">
              It's free. No commitment. Just good people talking games and watching live R6 Siege. Come see what the hype's about.
            </p>
            <a
              href="https://discord.gg/jhbFzMpdeH"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#5865f2] hover:bg-[#4752c4] text-white font-bold px-10 py-5 rounded-lg text-sm tracking-widest uppercase transition-all duration-200 hover:scale-105"
              style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.1em', boxShadow: '0 0 40px rgba(88,101,242,0.3)' }}
            >
              <DiscordIcon size={20} />
              Join Discord Now
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
