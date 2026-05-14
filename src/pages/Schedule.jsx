import { useEffect, useRef, useState } from 'react';
import { Clock, Calendar, AlertCircle } from 'lucide-react';
import TwitchIcon from '../components/TwitchIcon';

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

const SCHEDULE = [
  { day: 'Mon', fullDay: 'Monday', status: 'off', time: null, game: null },
  { day: 'Tue', fullDay: 'Tuesday', status: 'live', time: '8:00 PM – 11:00 PM', game: 'Rainbow Six Siege', note: 'Ranked grind' },
  { day: 'Wed', fullDay: 'Wednesday', status: 'live', time: '8:00 PM – 11:00 PM', game: 'Rainbow Six Siege', note: 'Ranked / casual mix' },
  { day: 'Thu', fullDay: 'Thursday', status: 'off', time: null, game: null },
  { day: 'Fri', fullDay: 'Friday', status: 'live', time: '9:00 PM – Midnight', game: 'Varies', note: 'R6 Siege or survival games' },
  { day: 'Sat', fullDay: 'Saturday', status: 'live', time: '3:00 PM – 7:00 PM', game: 'Rainbow Six Siege', note: 'Afternoon session — long stream' },
  { day: 'Sun', fullDay: 'Sunday', status: 'maybe', time: '7:00 PM – 10:00 PM', game: 'Survival / Chill', note: 'Unscheduled — check Twitch or Discord' },
];

const TIMEZONE = 'GMT / BST (Isle of Man)';

export default function Schedule() {
  const today = new Date().toLocaleDateString('en-GB', { weekday: 'long' });

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="relative py-24 overflow-hidden grid-bg border-b border-[#1e1e1e]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#c0392b]/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c0392b] font-bold text-xs tracking-widest uppercase mb-4 fade-up" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            When to Tune In
          </p>
          <h1
            className="text-5xl sm:text-7xl font-bold text-white uppercase mb-6 fade-up fade-up-delay-1"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Stream <span className="text-[#c0392b]">Schedule</span>
          </h1>
          <div className="flex items-center gap-2 text-gray-500 fade-up fade-up-delay-2">
            <Clock size={14} className="text-[#c0392b]" />
            <span className="text-sm tracking-widest uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{TIMEZONE}</span>
          </div>
        </div>
      </section>

      {/* Schedule grid */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {/* Timezone notice */}
            <div className="flex items-start gap-3 bg-[#111111] border border-[#1e1e1e] rounded p-4 mb-10">
              <AlertCircle size={16} className="text-[#c0392b] flex-shrink-0 mt-0.5" />
              <p className="text-gray-400 text-sm">
                All times shown in <span className="text-white font-semibold">GMT / BST</span> (Isle of Man timezone). Schedule may vary — follow on{' '}
                <a href="https://www.twitch.tv/justbobl" target="_blank" rel="noopener noreferrer" className="text-[#c0392b] hover:underline">Twitch</a>
                {' '}or join{' '}
                <a href="/discord" className="text-[#c0392b] hover:underline">Discord</a>
                {' '}for live updates.
              </p>
            </div>

            {/* Day cards */}
            <div className="space-y-3">
              {SCHEDULE.map((item, i) => {
                const isToday = today === item.fullDay;
                const isLive = item.status === 'live';
                const isMaybe = item.status === 'maybe';
                const isOff = item.status === 'off';

                return (
                  <AnimatedSection key={item.day} delay={i * 60}>
                    <div
                      className={`flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 rounded p-5 border transition-all duration-300 ${
                        isToday
                          ? 'bg-[#c0392b]/10 border-[#c0392b]/40'
                          : isOff
                          ? 'bg-[#0d0d0d] border-[#1a1a1a] opacity-60'
                          : 'bg-[#111111] border-[#1e1e1e] hover:border-[#c0392b]/20'
                      }`}
                    >
                      {/* Day */}
                      <div className="flex items-center gap-4 sm:w-28 flex-shrink-0">
                        {isToday && (
                          <div className="w-2 h-2 bg-[#c0392b] rounded-full live-pulse flex-shrink-0" />
                        )}
                        <div>
                          <p
                            className={`font-bold text-xl ${isToday ? 'text-[#c0392b]' : isOff ? 'text-gray-600' : 'text-white'}`}
                            style={{ fontFamily: 'Rajdhani, sans-serif' }}
                          >
                            {item.fullDay}
                          </p>
                          {isToday && (
                            <span className="text-[#c0392b] text-xs font-bold tracking-widest" style={{ fontFamily: 'Rajdhani, sans-serif' }}>TODAY</span>
                          )}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className={`hidden sm:block w-px h-10 ${isOff ? 'bg-[#1a1a1a]' : 'bg-[#1e1e1e]'}`} />

                      {/* Content */}
                      {isOff ? (
                        <div className="flex-1">
                          <p className="text-gray-600 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>No stream scheduled</p>
                        </div>
                      ) : (
                        <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <div>
                            <p className="text-white font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{item.game}</p>
                            <p className="text-gray-500 text-sm">{item.note}</p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="flex items-center gap-2 justify-end sm:justify-start">
                              <Clock size={13} className="text-gray-500" />
                              <span className="text-gray-300 text-sm font-mono">{item.time}</span>
                            </div>
                            {isMaybe && (
                              <span className="text-xs text-yellow-500/70 font-bold tracking-widest" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                                UNSCHEDULED
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Status badge */}
                      <div className="flex-shrink-0">
                        {isLive && (
                          <span className="bg-[#c0392b]/20 border border-[#c0392b]/40 text-[#e74c3c] text-xs font-bold tracking-widest px-3 py-1 rounded-full" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                            STREAMING
                          </span>
                        )}
                        {isMaybe && (
                          <span className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-500/70 text-xs font-bold tracking-widest px-3 py-1 rounded-full" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                            MAYBE
                          </span>
                        )}
                        {isOff && (
                          <span className="text-gray-700 text-xs font-bold tracking-widest" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                            OFF
                          </span>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Summary cards */}
          <AnimatedSection delay={400} className="mt-16 grid sm:grid-cols-3 gap-6">
            {[
              { icon: <Calendar size={20} />, label: 'Stream Days', value: '4 per week', sub: 'Tue, Wed, Fri, Sat' },
              { icon: <Clock size={20} />, label: 'Avg Duration', value: '3 Hours', sub: 'Sometimes longer on Fri' },
              { icon: <TwitchIcon size={20} />, label: 'Platform', value: 'Twitch', sub: 'twitch.tv/justbobl' },
            ].map(({ icon, label, value, sub }) => (
              <div key={label} className="bg-[#111111] border border-[#1e1e1e] rounded p-6 text-center hover:border-[#c0392b]/30 transition-all">
                <div className="text-[#c0392b] flex justify-center mb-3">{icon}</div>
                <p className="text-gray-500 text-xs tracking-widest uppercase mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{label}</p>
                <p className="text-white text-2xl font-bold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{value}</p>
                <p className="text-gray-600 text-xs mt-1">{sub}</p>
              </div>
            ))}
          </AnimatedSection>

          {/* Twitch CTA */}
          <AnimatedSection delay={500} className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">Never miss a stream — follow on Twitch for notifications</p>
            <a
              href="https://www.twitch.tv/justbobl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#c0392b] hover:bg-[#e74c3c] text-white font-bold px-8 py-4 rounded text-sm tracking-widest uppercase transition-all duration-200 hover:scale-105 red-glow"
              style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.12em' }}
            >
              <TwitchIcon size={18} />
              Follow on Twitch
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
