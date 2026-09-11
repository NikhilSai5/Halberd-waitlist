import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Mark } from './Mark';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/20 bg-white/10 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.06)]'
          : 'bg-white/5 backdrop-blur-md backdrop-saturate-125'
      }`}
    >
      <div className="section-wrap flex h-[78px] items-center justify-between">
        <Mark />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <a className="cursor-link eyebrow hover:text-[#486551] transition-colors" href="#features">
            Showcase
          </a>
          <a className="cursor-link eyebrow hover:text-[#486551] transition-colors" href="#circle">
            Floating Circle
          </a>
          <a className="cursor-link eyebrow hover:text-[#486551] transition-colors" href="#pet">
            Companion
          </a>
          <a className="cursor-link eyebrow hover:text-[#486551] transition-colors" href="#method">
            Method
          </a>
          <a className="cursor-link eyebrow hover:text-[#486551] transition-colors" href="#faq">
            FAQ
          </a>
        </nav>

        <a
          href="#waitlist"
          className="hidden items-center gap-2 rounded-full bg-[#111111] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[.13em] text-[#f9f9f7] transition-all hover:bg-[#486551] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#486551] focus-visible:ring-offset-2 md:inline-flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#7fc788] animate-pulse" />
          <span>Join waitlist</span>
        </a>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="rounded-full border border-white/20 bg-white/10 backdrop-blur-md p-2.5 text-[#181a16] shadow-xs md:hidden"
        >
          {open ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mb-3 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl backdrop-saturate-150 p-6 shadow-[0_16px_48px_rgba(0,0,0,0.1)] md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            <a className="eyebrow py-1 text-sm text-[#181a15]" href="#features" onClick={close}>
              Showcase
            </a>
            <a className="eyebrow py-1 text-sm text-[#181a15]" href="#circle" onClick={close}>
              Floating Circle
            </a>
            <a className="eyebrow py-1 text-sm text-[#181a15]" href="#pet" onClick={close}>
              Companion
            </a>
            <a className="eyebrow py-1 text-sm text-[#181a15]" href="#method" onClick={close}>
              Method
            </a>
            <a className="eyebrow py-1 text-sm text-[#181a15]" href="#faq" onClick={close}>
              FAQ
            </a>
            <div className="pt-2">
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#111111] px-5 py-3 text-[11px] font-medium uppercase tracking-[.14em] text-[#f9f9f7] transition-colors hover:bg-[#486551]"
                href="#hero-waitlist"
                onClick={close}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#7fc788]" />
                <span>Join waitlist</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
