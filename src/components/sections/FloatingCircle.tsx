import { useState, useEffect, useRef } from 'react';
import { Bell, Flame, Target, Timer, Sparkles, CheckCircle2 } from 'lucide-react';
import { Reveal } from '../Reveal';
import { FloatingCircleWidget } from './FloatingCircleWidget';

interface Feature {
  id: string;
  number: string;
  title: string;
  shortLabel: string;
  description: string;
  details: string;
  image: string;
  icon: typeof Bell;
  badge: string;
}

const features: Feature[] = [
  {
    id: 'reminders',
    number: '01',
    shortLabel: 'Reminders',
    title: 'Stay ahead of what matters.',
    description: 'Get gentle nudges for upcoming appointments and obligations without intrusive notification popups.',
    details: 'Displays calendar events 20 minutes before they happen with gentle visual clarity.',
    image: '/floating_circle_calendar_notification.png',
    icon: Bell,
    badge: 'Smart Nudge',
  },
  {
    id: 'focus',
    number: '02',
    shortLabel: 'Focus Mode',
    title: 'Create space for deep work.',
    description: 'Minimize browser clutter and keep a single, quiet timer visible in your peripheral vision.',
    details: 'Mutes distracting tabs and tracks deep flow sessions with precision.',
    image: '/floating_circle_focus_mode.png',
    icon: Target,
    badge: 'Flow State',
  },
  {
    id: 'habits',
    number: '03',
    shortLabel: 'Habits',
    title: 'Build habits that stick.',
    description: 'Micro-routines that keep you balanced throughout the day — stretch, hydrate, or stand up.',
    details: 'One-tap confirmation keeps consistency effortless and rewarding.',
    image: '/floating_circle_habit remainder.png',
    icon: Flame,
    badge: 'Consistency',
  },
  {
    id: 'pomodoro',
    number: '04',
    shortLabel: 'Pomodoro',
    title: 'Work in focused intervals.',
    description: 'Classic 25-minute sprints paired with restful breaks designed to prevent digital fatigue.',
    details: 'Gentle chime transition when the sprint finishes, keeping your rhythm natural.',
    image: '/floating_circle_pomodoro.png',
    icon: Timer,
    badge: '25m Rhythm',
  },
];

const ROTATION_INTERVAL_MS = 15000; // 15 seconds

export function FloatingCircle() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(1495); // 24:55
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const startTimeRef = useRef<number>(Date.now());
  const activeFeature = features[activeIdx];

  // Auto-rotate every 15 seconds
  useEffect(() => {
    startTimeRef.current = Date.now();
    setProgress(0);

    const timer = setInterval(() => {
      if (!isPaused) {
        setActiveIdx((prev) => (prev + 1) % features.length);
      }
    }, ROTATION_INTERVAL_MS);

    const progressTicker = setInterval(() => {
      if (!isPaused) {
        const elapsed = (Date.now() - startTimeRef.current) % ROTATION_INTERVAL_MS;
        setProgress((elapsed / ROTATION_INTERVAL_MS) * 100);
      }
    }, 100);

    return () => {
      clearInterval(timer);
      clearInterval(progressTicker);
    };
  }, [activeIdx, isPaused]);

  // Subtle live ticking preview for Pomodoro / Focus
  useEffect(() => {
    const interval = setInterval(() => {
      setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 1500));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSelect = (index: number) => {
    setActiveIdx(index);
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  return (
    <section id="circle" className="border-b border-[#dfded7] py-28 sm:py-36">
      <div className="section-wrap">
        {/* Header */}
        <Reveal className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dfded7] bg-[#fdfdfa] px-3.5 py-1 text-xs text-[#486551]">
              <Sparkles size={13} />
              <span className="font-mono text-[11px] uppercase tracking-wider">The Floating Circle</span>
            </div>
            <h2 className="mt-4 max-w-[560px] text-[clamp(2.5rem,5vw,4.7rem)] font-medium leading-[.94] tracking-[-.07em]">
              Your productivity tools, <br />
              <span className="display-serif">always within reach.</span>
            </h2>
          </div>
          <div className="max-w-[380px]">
            <div className="mb-4">
              <FloatingCircleWidget mode="flame" size={48} />
            </div>
            <p className="text-sm leading-6 text-[#666960]">
              Never lose your place. A single unobtrusive circle rests quietly at the edge of your screen, expanding into just what you need with a single click.
            </p>
          </div>
        </Reveal>

        {/* Interactive Simulation Sandbox */}
        <Reveal delay="delay-1" className="mb-16">
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              startTimeRef.current = Date.now();
            }}
            className="overflow-hidden rounded-2xl border border-[#d6d5cb] bg-[#f5f4ed] shadow-sm"
          >
            {/* Simulation Header with 15s Progress Bar */}
            <div className="relative border-b border-[#dfded7] bg-[#eeece3] px-6 py-3.5 text-xs text-[#62675e]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#486551] animate-pulse" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#404b3f]">
                    Interactive Floating Widget Simulator
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-[#6b7267]">
                  <span>{isPaused ? 'Paused on hover' : 'Next tool in 15s'}</span>
                  <span className="font-mono text-[#486551]">
                    0{activeIdx + 1} / 0{features.length}
                  </span>
                </div>
              </div>

              {/* 15s Progress Bar */}
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#dfded7]">
                <div
                  className="h-full bg-[#486551] transition-all duration-100 ease-linear"
                  style={{ width: isPaused ? '100%' : `${progress}%` }}
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-[1fr_1.3fr]">
              {/* Tool selector buttons */}
              <div className="flex flex-col justify-between border-b border-[#dfded7] p-6 lg:border-b-0 lg:border-r">
                <div className="flex flex-col gap-3">
                  {features.map((feature, idx) => {
                    const isSelected = activeIdx === idx;
                    const Icon = feature.icon;
                    return (
                      <button
                        key={feature.id}
                        type="button"
                        onClick={() => handleSelect(idx)}
                        className={`flex items-start gap-4 rounded-xl p-4 text-left transition-all ${
                          isSelected
                            ? 'border border-[#486551]/30 bg-[#fbfaf6] shadow-sm'
                            : 'border border-transparent hover:bg-[#eae8de]'
                        }`}
                      >
                        <div
                          className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                            isSelected ? 'bg-[#486551] text-[#fbfaf6]' : 'bg-[#dedcd1] text-[#555b50]'
                          }`}
                        >
                          <Icon size={18} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] tracking-wider text-[#798072]">
                              {feature.number} / {feature.badge}
                            </span>
                            {isSelected && (
                              <span className="rounded-full bg-[#e8efe9] px-2 py-0.5 text-[10px] font-medium text-[#486551]">
                                Showing
                              </span>
                            )}
                          </div>
                          <h3 className="mt-1 text-base font-medium tracking-tight text-[#181a15]">
                            {feature.shortLabel}
                          </h3>
                          <p className="mt-1 text-xs leading-5 text-[#6c7267]">
                            {feature.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-[#dfded7] pt-4 text-xs text-[#6e7568]">
                  <CheckCircle2 size={15} className="text-[#486551]" />
                  <span>Floats unobtrusively over any website or blank tab</span>
                </div>
              </div>

              {/* Simulated Desktop Preview with Real Floating Circle & Asset */}
              <div className="relative flex min-h-[380px] flex-col items-center justify-center overflow-hidden bg-[#e8e6dc] p-8 sm:min-h-[440px]">
                {/* Simulated webpage content lines in the background */}
                <div className="pointer-events-none absolute inset-6 flex flex-col gap-3 opacity-25">
                  <div className="h-4 w-1/3 rounded bg-[#5a6154]" />
                  <div className="h-3 w-3/4 rounded bg-[#737a6c]" />
                  <div className="h-3 w-5/6 rounded bg-[#737a6c]" />
                  <div className="h-3 w-2/3 rounded bg-[#737a6c]" />
                  <div className="mt-6 h-32 w-full rounded-lg bg-[#5a6154]/20" />
                  <div className="h-3 w-4/5 rounded bg-[#737a6c]" />
                  <div className="h-3 w-1/2 rounded bg-[#737a6c]" />
                </div>

                {/* Floating Widget Stage */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-4 text-center">
                    <span className="eyebrow text-[#486551]">Current Halberd Floating State</span>
                    <h4 className="mt-1 text-lg font-medium text-[#1c201a]">{activeFeature.title}</h4>
                  </div>

                  {/* The Floating Circle Capsule containing the real image asset */}
                  <div className="group relative flex flex-col items-center justify-center rounded-3xl border border-[#486551]/20 bg-[#fdfdfa]/95 p-6 shadow-[0_18px_38px_rgba(20,24,18,0.14)] backdrop-blur-sm transition-all duration-500">
                    {activeFeature.id === 'habits' ? (
                      <div className="flex items-center gap-4 px-3 py-2">
                        <img
                          src={activeFeature.image}
                          alt={activeFeature.title}
                          className="h-16 w-16 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-110"
                        />
                        <div className="text-left">
                          <p className="text-xs font-semibold uppercase tracking-wider text-[#486551]">Daily Habit</p>
                          <p className="text-sm font-medium text-[#1a1c17]">Afternoon Stretch & Hydration</p>
                          <p className="text-xs text-[#71786c]">Streak: 12 days continuous</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <img
                          src={activeFeature.image}
                          alt={activeFeature.title}
                          className="max-h-20 w-auto object-contain drop-shadow-sm transition-all duration-300"
                        />
                        {(activeFeature.id === 'pomodoro' || activeFeature.id === 'focus') && (
                          <div className="mt-2 text-center">
                            <span className="font-mono text-xs font-semibold text-[#486551]">
                              Live sync: {formatTime(timerSeconds)}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Subtle pulse ring around active pill */}
                    <div className="pointer-events-none absolute -inset-1 rounded-3xl border border-[#486551]/20 opacity-50 focus-ring" />
                  </div>

                  <p className="mt-6 max-w-[340px] text-center text-xs leading-relaxed text-[#596053]">
                    {activeFeature.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 4 Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isCurrent = activeIdx === index;
            return (
              <Reveal key={feature.number} delay={`delay-${index + 1}`}>
                <div
                  onClick={() => handleSelect(index)}
                  className={`cursor-pointer rounded-xl border p-6 transition-all duration-300 ${
                    isCurrent
                      ? 'border-[#486551] bg-[#fbfaf6] shadow-md ring-1 ring-[#486551]/20'
                      : 'border-[#dfded7] bg-[#fdfdfa] hover:border-[#b8b7ae] hover:bg-[#f6f5ec]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-[#486551]">{feature.number}</span>
                    <Icon size={16} className={isCurrent ? 'text-[#486551]' : 'text-[#878e81]'} />
                  </div>
                  <h3 className="mt-4 text-lg font-medium tracking-tight text-[#161814]">{feature.shortLabel}</h3>
                  <p className="mt-2 text-xs leading-5 text-[#666960]">{feature.description}</p>

                  {/* Inline widget preview */}
                  <div className="mt-5 flex h-20 items-center justify-center rounded-lg border border-[#e4e3da] bg-[#f3f2ea] p-2 transition-transform duration-300">
                    {feature.id === 'pomodoro' ? (
                      <FloatingCircleWidget mode="timer" emoji="🍅" size={38} progress={82} timer="24:55" />
                    ) : feature.id === 'focus' ? (
                      <FloatingCircleWidget mode="timer" emoji="🎯" size={38} progress={18} timer="04:42" />
                    ) : (
                      <FloatingCircleWidget mode="circle" emoji={feature.id === 'reminders' ? '🔔' : '🔥'} size={38} />
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
