import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { WaitlistForm } from './WaitlistForm';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[100dvh] min-h-[680px] max-h-[1050px] flex-col justify-between overflow-hidden border-b border-[#dfded7] pt-[70px] pb-1 sm:pb-2"
    >
      {/* Layer 0 - Background mountains/sky */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/bg.png)' }}
      />

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_46%,rgba(72,101,81,0.09),transparent_75%)]" />

      {/* Layer 2 - Huge HALBERD typography, sitting behind the warrior */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="hero-wordmark select-none whitespace-nowrap font-bold leading-none text-[#111111]"
          aria-hidden="true"
          initial={{ opacity: 0, y: 64 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          HALBERD
          <motion.span
            className="hero-wordmark-smoke"
            aria-hidden="true"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 0.55, 0.7, 0.35, 0], y: [10, 0, -4, -9, -13] }}
            transition={{
              duration: 3.6,
              ease: 'easeInOut',
              delay: 1.6,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            HALBERD
          </motion.span>
        </motion.div>
      </div>

      {/* Layer 3 - Warrior overlapping the typography */}
      <div className="hero-knight pointer-events-none absolute left-1/2 top-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="relative h-[clamp(420px,72vh,820px)] w-[clamp(420px,72vh,820px)]">
          <img
            src="/assets/halberd-knight.png"
            alt="A knight holding a halberd and shield"
            className="h-full w-full object-contain drop-shadow-[0_18px_26px_rgba(17,19,15,0.12)]"
          />
        </div>

        {/* Realistic human standing ground shadow directly under the knight's feet */}
        <div className="pointer-events-none -mt-10 flex items-center justify-center sm:-mt-12">
          {/* Broad ambient ground occlusion falloff */}
          <div className="h-10 sm:h-14 w-[clamp(300px,46vw,560px)] rounded-[50%] bg-[#151912]/20 blur-xl" />
          {/* Elongated cast shadow */}
          <div className="absolute h-6 sm:h-9 w-[clamp(220px,35vw,430px)] rounded-[50%] bg-[#12160f]/45 blur-md translate-y-1" />
          {/* Deep ground contact occlusion right under boots */}
          <div className="absolute h-4 sm:h-5 w-[clamp(140px,23vw,270px)] rounded-[50%] bg-[#0a0d08]/75 blur-[2.5px] translate-y-1.5" />
        </div>
      </div>

      {/* Layer 4 - Foreground rocks/environment in front of the warrior */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] select-none"
        aria-hidden="true"
      >
        <img
          src="/bg-lasso.png"
          alt=""
          draggable={false}
          className="block h-auto w-full"
        />
      </div>

      {/* Layer 10 - Existing hero UI */}
      <div className="section-wrap relative z-10 flex flex-1 flex-col">
        <div className="mt-auto flex flex-col items-center pb-1">
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