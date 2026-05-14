import { Link } from 'react-router-dom';
import TwitchIcon from './TwitchIcon';

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1e1e1e] mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
              <div className="w-8 h-8 bg-[#c0392b] flex items-center justify-center rounded">
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>JB</span>
              </div>
              <span
                className="text-white font-bold text-xl tracking-widest uppercase"
                style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.15em' }}
              >
                justbobl
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              Rainbow Six Siege streamer from the Isle of Man. Tactical, relentless, always live.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex gap-8">
            <div>
              <p className="text-[#c0392b] font-bold text-xs tracking-widest uppercase mb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Navigate
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { label: 'Home', to: '/' },
                  { label: 'About', to: '/about' },
                  { label: 'Schedule', to: '/schedule' },
                  { label: 'Clips', to: '/clips' },
                  { label: 'Discord', to: '/discord' },
                ].map(({ label, to }) => (
                  <Link
                    key={to}
                    to={to}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="text-center">
            <p className="text-[#c0392b] font-bold text-xs tracking-widest uppercase mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Find Me Online
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.twitch.tv/justbobl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#111] border border-[#1e1e1e] rounded flex items-center justify-center text-gray-400 hover:text-[#9146ff] hover:border-[#9146ff] transition-all duration-200 hover:scale-110"
                aria-label="Twitch"
              >
                <TwitchIcon size={18} />
              </a>
              <a
                href="https://discord.gg/justbobl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#111] border border-[#1e1e1e] rounded flex items-center justify-center text-gray-400 hover:text-[#5865f2] hover:border-[#5865f2] transition-all duration-200 hover:scale-110"
                aria-label="Discord"
              >
                <DiscordIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1e1e1e] mt-10 pt-6 text-center">
          <p className="text-gray-600 text-xs tracking-widest" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            © 2025 JUSTBOBL — ISLE OF MAN — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
