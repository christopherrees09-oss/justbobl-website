import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import TwitchIcon from './TwitchIcon';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/clips', label: 'Clips' },
  { to: '/discord', label: 'Discord' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/90 border-b border-[#1e1e1e]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#c0392b] flex items-center justify-center rounded red-glow group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>JB</span>
            </div>
            <span
              className="text-white font-bold text-xl tracking-widest uppercase"
              style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.15em' }}
            >
              justbobl
            </span>
          </NavLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:text-[#e74c3c] relative group ${
                    isActive ? 'text-[#e74c3c]' : 'text-gray-300'
                  }`
                }
                style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.12em' }}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-[#c0392b] transition-all duration-200 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
            <a
              href="https://www.twitch.tv/justbobl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#c0392b] hover:bg-[#e74c3c] text-white text-sm font-bold px-4 py-2 rounded transition-all duration-200 hover:scale-105"
              style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.08em' }}
            >
              <TwitchIcon size={15} />
              Watch Live
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0a0a0a]/95 border-t border-[#1e1e1e] px-4 py-4 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-base font-semibold tracking-widest uppercase py-2 border-b border-[#1e1e1e] ${
                  isActive ? 'text-[#e74c3c]' : 'text-gray-300'
                }`
              }
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://www.twitch.tv/justbobl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#c0392b] text-white font-bold py-3 rounded"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            <TwitchIcon size={16} />
            Watch Live on Twitch
          </a>
        </div>
      </div>
    </nav>
  );
}
