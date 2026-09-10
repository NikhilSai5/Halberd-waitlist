import { ChevronDown, Sparkles, Shield, Clock } from 'lucide-react';
import { WaitlistForm } from './WaitlistForm';

export function Hero() {
  return (
    <section id="top" className="relative min-h-[860px] overflow-hidden border-b border-[#dfded7] pt-[82px] lg:min-h-[1020px]">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_46%,rgba(72,101,81,0.08),transparent_75%)]" />

      <div className="section-wrap relative z-10 flex min-h-[778px] flex-col lg:min-h-[938px]">
        {/* Top-left editorial eyebrow */}
        <div className="absolute z-0 pt-10 sm:pt-16">
          <div className="max-w-[170px]">
            <p className="eyebrow leading-[1.8]">A more<br />focused<br />internet.</p>
            <div className="mt-5 h-px w-full bg-[#c5c5bc] line-reveal" />
          </div>
        </div>

        {/* Top-right editorial eyebrow */}
        <div className="absolute right-0 top-10 max-w-[155px] text-right sm:top-[60%]">
          <p className="eyebrow leading-[1.8]">Small steps.<br />A better you.</p>
          <div className="mt-5 ml-auto h-px w-full bg-[#c5c5bc] line-reveal" />
        </div>

        {/* Floating micro badges around the knight */}
        <div className="pointer-events-none absolute left-4 top-[32%] z-20 hidden md:flex items-center gap-2 rounded-full border border-[#d6d4ca] bg-[#fbfaf6]/90 px-3.5 py-1.5 text-[11px] font-medium text-[#40473c] shadow-sm backdrop-blur-xs">
          <Clock size={12} className="text-[#486551]" />
          <span>Intentional browsing</span>
        </div>

        <div className="pointer-events-none absolute right-4 top-[36%] z-20 hidden md:flex items-center gap-2 rounded-full border border-[#d6d4ca] bg-[#fbfaf6]/90 px-3.5 py-1.5 text-[11px] font-medium text-[#40473c] shadow-sm backdrop-blur-xs">
          <Shield size={12} className="text-[#486551]" />
          <span>Zero tab clutter</span>
        </div>

        {/* Central HALBERD typographic centerpiece + Knight with Realistic Human Ground Shadow */}
        <div className="relative z-10 flex flex-1 items-center justify-center">
          <div
            className="pointer-events-none absolute left-1/2 top-[44%] z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(3.8rem,18.5vw,17.5rem)] font-bold leading-[.73] tracking-[-.105em] text-[#111111] fade-up select-none"
            aria-hidden="true"
          >
            HALBERD
          </div>

          {/* Knight image without hover zoom animation */}
          <div className="hero-knight absolute left-1/2 top-[46%] z-10 h-[min(67vw,420px)] w-[min(67vw,420px)] -translate-x-1/2 -translate-y-1/2 sm:top-[42%] sm:h-[min(66vw,660px)] sm:w-[min(66vw,660px)]">
            <img
              src="/assets/halberd-knight.png"
              alt="A knight holding a halberd and shield"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Human Ground Shadow System: Multi-layer depth mimicking standing ground contact */}
          <div className="pointer-events-none absolute left-1/2 bottom-[13%] sm:bottom-[10%] z-0 -translate-x-1/2 flex items-center justify-center">
            {/* Broad ambient ground occlusion falloff */}
            <div className="h-10 sm:h-14 w-[min(58vw,440px)] rounded-[50%] bg-[#151912]/20 blur-xl" />
            {/* Elongated cast shadow matching foot positioning */}
            <div className="absolute h-6 sm:h-9 w-[min(46vw,340px)] rounded-[50%] bg-[#12160f]/45 blur-md translate-y-1" />
            {/* Deep ground contact occlusion directly under the boots */}
            <div className="absolute h-3 sm:h-4 w-[min(32vw,220px)] rounded-[50%] bg-[#0a0d08]/75 blur-[3px] translate-y-2" />
          </div>
        </div>

        {/* Waitlist Call-to-Action & Down Indicator */}
        <div className="relative z-20 flex flex-col items-center pb-8 sm:pb-10">
          <WaitlistForm formId="hero-waitlist" />

          <a
            href="#features"
            className="group mt-6 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest text-[#737a6e] transition-colors hover:text-[#19211b]"
            aria-label="Explore features"
          >
            <span>Explore Halberd</span>
            <ChevronDown size={14} className="transition-transform group-hover:translate-y-0.5 text-[#486551]" />
          </a>
        </div>
      </div>
    </section>
  );
}
