import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Mark } from './Mark';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="section-wrap flex h-[82px] items-center justify-between">
        <Mark />
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          <a className="cursor-link eyebrow" href="#features">Features</a>
          <a className="cursor-link eyebrow" href="#faq">FAQ</a>
        </nav>
        <a href="#hero-waitlist" className="hidden rounded-full bg-[#111111] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[.13em] text-[#f9f9f7] transition-colors hover:bg-[#486551] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#486551] focus-visible:ring-offset-2 md:block">
          Join waitlist
        </a>
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="rounded-full border border-[#c1c2ba] p-2.5 text-[#181a16] md:hidden"
        >
          {open ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>
      {open && (
        <div className="mx-4 border border-[#d4d4cc] bg-[#f9f9f7] p-5 shadow-[0_12px_28px_rgba(30,32,25,.08)] md:hidden">
          <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
            <a className="eyebrow" href="#features" onClick={close}>Features</a>
            <a className="eyebrow" href="#faq" onClick={close}>FAQ</a>
            <a className="mt-1 inline-flex w-fit rounded-full bg-[#111111] px-5 py-3 text-[11px] uppercase tracking-[.14em] text-[#f9f9f7]" href="#hero-waitlist" onClick={close}>Join waitlist</a>
          </nav>
        </div>
      )}
    </header>
  );
}
