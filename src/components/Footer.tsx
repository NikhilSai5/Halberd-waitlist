import { ArrowUpRight } from 'lucide-react';
import { Mark } from './Mark';

export function Footer() {
  return (
    <footer className="bg-[#111111] py-10 text-[#dbe3db]">
      <div className="section-wrap flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-start">
          <div><Mark light /><p className="mt-5 max-w-[220px] text-xs leading-5 text-[#95a395]">A more focused internet.<br />Small steps. A better you.</p></div>
          <div className="flex gap-12">
            <div><p className="eyebrow mb-4 text-[#8fa18f]">Explore</p><div className="flex flex-col gap-3 text-sm text-[#c2cdc2]"><a className="hover:text-white" href="#features">Features</a><a className="hover:text-white" href="#method">Method</a><a className="hover:text-white" href="#faq">FAQ</a></div></div>
            <div><p className="eyebrow mb-4 text-[#8fa18f]">Elsewhere</p><div className="flex flex-col gap-3 text-sm text-[#c2cdc2]"><a className="hover:text-white" href="mailto:hello@halberd.world">Email us <ArrowUpRight className="ml-1 inline" size={12} /></a><a className="hover:text-white" href="#waitlist">Join the circle</a></div></div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-[#3c4a3e] pt-6 text-[10px] uppercase tracking-[.13em] text-[#829182] sm:flex-row"><span>{'\u00a9'} 2025 Halberd</span><span>Made for attention, not addiction.</span></div>
      </div>
    </footer>
  );
}
