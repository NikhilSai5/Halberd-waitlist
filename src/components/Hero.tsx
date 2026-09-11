import { ChevronDown } from 'lucide-react';
import { WaitlistForm } from './WaitlistForm';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[100dvh] min-h-[680px] max-h-[1050px] flex-col justify-between overflow-hidden border-b border-[#dfded7] pt-[70px] pb-2 sm:pb-4"
    >
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/bg.png)' }}
      />

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_46%,rgba(72,101,81,0.09),transparent_75%)]" />

      <div className="section-wrap relative z-10 flex flex-1 flex-col justify-between">
        {/* Central Stage: Large Bold HALBERD Typography + Even Larger Majestic Knight + Realistic Ground Shadow */}
        <div className="relative z-10 my-auto flex flex-1 items-center justify-center">
          {/* Increased Typographic Watermark */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(4.2rem,16vw,15.5rem)] font-bold leading-none tracking-[-.105em] text-[#111111] select-none"
            aria-hidden="true"
          >
            HALBERD
          </div>

          {/* Significantly Increased Knight Container */}
          <div className="hero-knight relative z-10 flex flex-col items-center justify-center">
            <div className="relative h-[clamp(420px,72vh,820px)] w-[clamp(420px,72vh,820px)]">
              <img
                src="/assets/halberd-knight.png"
                alt="A knight holding a halberd and shield"
                className="h-full w-full object-contain drop-shadow-[0_18px_26px_rgba(17,19,15,0.12)]"
              />
            </div>

            {/* Realistic human standing ground shadow directly under the knight's feet */}
            <div className="pointer-events-none -mt-10 sm:-mt-12 flex items-center justify-center">
              {/* Broad ambient ground occlusion falloff */}
              <div className="h-10 sm:h-14 w-[clamp(300px,46vw,560px)] rounded-[50%] bg-[#151912]/20 blur-xl" />
              {/* Elongated cast shadow */}
              <div className="absolute h-6 sm:h-9 w-[clamp(220px,35vw,430px)] rounded-[50%] bg-[#12160f]/45 blur-md translate-y-1" />
              {/* Deep ground contact occlusion right under boots */}
              <div className="absolute h-4 sm:h-5 w-[clamp(140px,23vw,270px)] rounded-[50%] bg-[#0a0d08]/75 blur-[2.5px] translate-y-1.5" />
            </div>
          </div>
        </div>

        {/* Waitlist Call-to-Action - Compact and immediately visible */}
        <div className="relative z-20 flex flex-col items-center pb-2">
          <WaitlistForm formId="hero-waitlist" />

          <a
            href="#features"
            className="hero-arrow group -mt-4 flex items-center justify-center rounded-full p-2.5 text-white transition-opacity duration-300 hover:opacity-70"
            aria-label="Explore features"
          >
            <ChevronDown size={18} className="text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
