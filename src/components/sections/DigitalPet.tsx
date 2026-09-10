import { useState } from 'react';
import { Heart, Sparkles, Coffee, Moon, Sun, Volume2 } from 'lucide-react';
import { Reveal } from '../Reveal';

const catQuotes = [
  'Purrrrr... you\u2019re doing great work today.',
  'Take a deep breath and stretch your shoulders.',
  'Remember to take a sip of water, human.',
  'Focus deeply. I\u2019ll watch over your tabs.',
  'Small steps every day lead to big progress.',
  'Purr... another 25-minute session completed!',
];

export function DigitalPet() {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [petCount, setPetCount] = useState(14);
  const [isPurring, setIsPurring] = useState(false);
  const [mood, setMood] = useState<'focused' | 'sleepy' | 'playful'>('focused');
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const handlePetCat = (e: React.MouseEvent<HTMLDivElement>) => {
    setPetCount((prev) => prev + 1);
    setQuoteIdx((prev) => (prev + 1) % catQuotes.length);
    setIsPurring(true);
    setTimeout(() => setIsPurring(false), 1200);

    // Spawn floating heart particle
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now() + Math.random();
    setFloatingHearts((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((item) => item.id !== id));
    }, 1000);
  };

  return (
    <section id="pet" className="border-b border-[#dfded7] bg-[#f8f7f2] py-28 sm:py-36">
      <div className="section-wrap">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          {/* Interactive Sanctuary Card */}
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-[#d5d4ca] bg-[#fdfdfa] p-8 shadow-[0_20px_45px_rgba(25,28,22,0.08)] sm:p-12">
              {/* Background Tatami / Paper texture grid */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#486551_0.75px,transparent_0.75px)] opacity-[0.08] [background-size:16px_16px]" />

              {/* Status Header */}
              <div className="relative z-10 mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-[#eceae1] pb-5">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#486551]/10 text-[#486551]">
                    🐾
                  </span>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#697063]">Desktop Companion</span>
                    <h4 className="text-sm font-semibold text-[#181a15]">Calico Focus Cat</h4>
                  </div>
                </div>

                {/* Mood Pills */}
                <div className="flex items-center gap-1.5 rounded-full border border-[#dedcd1] bg-[#f5f4eb] p-1">
                  <button
                    type="button"
                    onClick={() => setMood('focused')}
                    className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-medium transition-colors ${
                      mood === 'focused' ? 'bg-[#19211b] text-white' : 'text-[#62685d] hover:text-[#111111]'
                    }`}
                  >
                    <Sun size={10} /> Focus
                  </button>
                  <button
                    type="button"
                    onClick={() => setMood('sleepy')}
                    className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-medium transition-colors ${
                      mood === 'sleepy' ? 'bg-[#19211b] text-white' : 'text-[#62685d] hover:text-[#111111]'
                    }`}
                  >
                    <Moon size={10} /> Nap
                  </button>
                  <button
                    type="button"
                    onClick={() => setMood('playful')}
                    className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-medium transition-colors ${
                      mood === 'playful' ? 'bg-[#19211b] text-white' : 'text-[#62685d] hover:text-[#111111]'
                    }`}
                  >
                    <Coffee size={10} /> Play
                  </button>
                </div>
              </div>

              {/* Interactive Speech Bubble */}
              <div className="relative z-10 mb-6 flex justify-center">
                <div className="relative max-w-sm rounded-2xl border border-[#d8d6cc] bg-[#f5f4ec] px-5 py-3 text-center shadow-sm transition-all duration-300">
                  <p className="text-xs font-medium text-[#2d3329] sm:text-sm">
                    {mood === 'sleepy'
                      ? 'Zzz... Resting between intense work sprints.'
                      : mood === 'playful'
                      ? 'Batting at stray notifications! All clear.'
                      : catQuotes[quoteIdx]}
                  </p>
                  {/* Bubble pointer */}
                  <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-[#d8d6cc] bg-[#f5f4ec]" />
                </div>
              </div>

              {/* Interactive Cat Stage with Click to Pet */}
              <div
                onClick={handlePetCat}
                className="group relative z-10 mx-auto flex h-64 w-64 cursor-pointer items-center justify-center rounded-2xl transition-all select-none hover:scale-105 active:scale-95"
                title="Click to pet your companion!"
              >
                {/* Gentle halo */}
                <div className="absolute inset-4 rounded-full bg-[#486551]/10 blur-xl transition-all group-hover:bg-[#486551]/20" />

                {/* Pixel Cat Asset */}
                <div className={`relative z-10 ${isPurring ? 'scale-110' : 'pet-breathe'} transition-transform duration-300`}>
                  <img
                    src="/only cat.png"
                    alt="Halberd digital pet pixel cat"
                    className="h-44 w-44 object-contain drop-shadow-[0_12px_18px_rgba(20,24,18,0.12)] image-rendering-pixelated"
                  />
                </div>

                {/* Floating Heart Particles */}
                {floatingHearts.map((heart) => (
                  <span
                    key={heart.id}
                    style={{ left: heart.x, top: heart.y }}
                    className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 text-sm text-[#c04a43] animate-bounce"
                  >
                    ❤️
                  </span>
                ))}

                {/* Click hint tooltip */}
                <div className="absolute bottom-1 rounded-full border border-[#d4d2c7] bg-[#fbfaf6]/90 px-3 py-1 text-[10px] font-medium tracking-wide text-[#656b60] opacity-80 backdrop-blur-xs transition-opacity group-hover:opacity-100">
                  Click to pet • {petCount} pats given
                </div>
              </div>

              {/* Companion Stats Grid */}
              <div className="relative z-10 mt-8 grid grid-cols-3 gap-3 border-t border-[#eceae1] pt-6 text-center">
                <div className="rounded-xl bg-[#f7f6ef] p-3">
                  <p className="font-mono text-[10px] uppercase text-[#737a6e]">Focus Streak</p>
                  <p className="mt-1 text-sm font-semibold text-[#1a1d17]">7 Days</p>
                </div>
                <div className="rounded-xl bg-[#f7f6ef] p-3">
                  <p className="font-mono text-[10px] uppercase text-[#737a6e]">Current Mood</p>
                  <p className="mt-1 text-sm font-semibold text-[#1a1d17] capitalize">{mood}</p>
                </div>
                <div className="rounded-xl bg-[#f7f6ef] p-3">
                  <p className="font-mono text-[10px] uppercase text-[#737a6e]">Affection</p>
                  <p className="mt-1 text-sm font-semibold text-[#486551]">100% Calm</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Section Narrative Copy */}
          <Reveal delay="delay-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dedcd1] bg-[#fdfdfa] px-3.5 py-1 text-xs text-[#486551]">
              <Sparkles size={13} />
              <span className="font-mono text-[11px] uppercase tracking-wider">04 / Digital Companion</span>
            </div>

            <h2 className="mt-4 max-w-[440px] text-[clamp(2.5rem,5vw,4.7rem)] font-medium leading-[.94] tracking-[-.07em]">
              A quiet presence, <br />
              <span className="display-serif">never a distraction.</span>
            </h2>

            <p className="mt-7 max-w-[380px] text-sm leading-7 text-[#60665b]">
              Most internet productivity software is cold and utilitarian. Halberd pairs your focus sessions with a charming 8-bit digital cat companion who sleeps when you rest, purrs when you stay in the zone, and reminds you to stay human.
            </p>

            <div className="mt-8 flex flex-col gap-4 border-t border-[#dfded7] pt-6">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#486551] text-[10px] text-white">✓</span>
                <div>
                  <h4 className="text-sm font-medium text-[#1a1c17]">Responds to your focus sessions</h4>
                  <p className="text-xs text-[#6e7469]">Naps peacefully during deep work intervals so you never get pulled out of flow.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#486551] text-[10px] text-white">✓</span>
                <div>
                  <h4 className="text-sm font-medium text-[#1a1c17]">Zero guilt gamification</h4>
                  <p className="text-xs text-[#6e7469]">No punishing notifications or dying pets. Just unconditional companionship.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
