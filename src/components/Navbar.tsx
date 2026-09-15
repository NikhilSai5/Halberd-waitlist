import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Mark } from './Mark';

const LINKS = [
  { href: '#features', id: 'features', label: 'Showcase' },
  { href: '#circle', id: 'circle', label: 'Floating Circle' },
  { href: '#pet', id: 'pet', label: 'Companion' },
  { href: '#method', id: 'method', label: 'Method' },
  { href: '#faq', id: 'faq', label: 'FAQ' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const close = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observable = LINKS.map((link) => `#${link.id}`).join(',');
    const sections = document.querySelectorAll(observable);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto mt-3 flex w-[min(1180px,calc(100%-32px))] items-center justify-between gap-3 rounded-full border px-4 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-500 ${
          scrolled
            ? 'h-[58px] border-[#486551]/15 bg-[#f6f5ef]/85 shadow-[0_12px_36px_-8px_rgba(35,50,35,0.22)] md:h-[64px]'
            : 'h-[66px] border-white/30 bg-white/15 shadow-[0_8px_32px_-12px_rgba(35,50,35,0.14)] md:h-[70px]'
        }`}
      >
        <Mark />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className="eyebrow group relative transition-colors duration-300"
              >
                <span
                  className={`inline-flex items-center gap-1.5 transition-colors duration-300 ${
                    isActive ? 'text-[#486551]' : 'text-[#3f403c] hover:text-[#486551]'
                  }`}
                >
                  <span
                    className={`h-1 w-1 rounded-full bg-[#7fc788] transition-all duration-300 ${
                      isActive ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                    }`}
                  />
                  {link.label}
                </span>
                <span className="absolute -bottom-1 left-3.5 h-px w-[calc(100%-14px)] origin-left scale-x-0 bg-[#486551] transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            );
          })}
        </nav>

        <a
          href="#waitlist"
          className="hidden items-center gap-2 rounded-full bg-[#111111] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[.13em] text-[#f9f9f7] transition-all duration-300 hover:bg-[#486551] hover:shadow-[0_8px_24px_rgba(72,101,81,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#486551] focus-visible:ring-offset-2 lg:inline-flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#7fc788] animate-pulse" />
          <span>Join waitlist</span>
        </a>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="rounded-full border border-white/25 bg-white/10 p-2.5 text-[#181a16] shadow-xs backdrop-blur-md transition-colors duration-300 hover:border-[#486551]/40 lg:hidden"
        >
          {open ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.2, 0.75, 0.2, 1] }}
            className="mx-auto mb-3 w-[min(1180px,calc(100%-32px))] rounded-2xl border border-[#486551]/15 bg-[#f6f5ef]/90 p-6 shadow-[0_16px_48px_rgba(35,50,35,0.18)] backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {LINKS.map((link, index) => {
                const isActive = active === link.id;
                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={close}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.3, ease: 'easeOut' }}
                    className="eyebrow flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm transition-colors"
                  >
                    <span
                      className={`h-1 w-1 rounded-full bg-[#7fc788] transition-all duration-300 ${
                        isActive ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                      }`}
                    />
                    <span className={isActive ? 'text-[#486551]' : 'text-[#3f403c]'}>{link.label}</span>
                  </motion.a>
                );
              })}
            </nav>
            <div className="mt-3 pt-2">
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#111111] px-5 py-3 text-[11px] font-medium uppercase tracking-[.14em] text-[#f9f9f7] transition-colors duration-300 hover:bg-[#486551]"
                href="#hero-waitlist"
                onClick={close}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#7fc788]" />
                <span>Join waitlist</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}