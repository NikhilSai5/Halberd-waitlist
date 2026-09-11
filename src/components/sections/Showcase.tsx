import { useState } from 'react';
import { Sparkles, Calendar as CalendarIcon, CheckSquare, Compass, Shield, Laptop } from 'lucide-react';
import { Reveal } from '../Reveal';

type TabKey = 'home' | 'calendar' | 'todo';

interface TabItem {
  id: TabKey;
  label: string;
  tag: string;
  title: string;
  subtitle: string;
  video: string;
  alt: string;
  features: string[];
}

const tabs: TabItem[] = [
  {
    id: 'home',
    label: 'Morning Tab',
    tag: '01 / Flagship Experience',
    title: 'The calm start to every session.',
    subtitle: 'Wake up to an uncluttered view of nature, a gentle greeting, and an unobtrusive dock with everything you need.',
    video: '/Videos/home.mp4',
    alt: 'Halberd calm morning browser tab with mountain landscape and floating tools dock',
    features: ['Minimalist clock & greeting', 'Floating Halberd dock', 'Distraction-free sunrise visuals', 'Weather & pet status at a glance'],
  },
  {
    id: 'calendar',
    label: 'Calendar Sync',
    tag: '02 / Smart Schedule',
    title: 'Your day, without tab switching.',
    subtitle: 'Google Calendar seamlessly lives inside your browser space. Review meetings and block focus time with zero friction.',
    video: '/Videos/calendar.mp4',
    alt: 'Halberd calendar view integrated with Google Calendar events',
    features: ['121+ Google Calendar events synced', 'Day, Week & Month toggle', 'One-click event creation', 'Direct link to meetings'],
  },
  {
    id: 'todo',
    label: 'Google Tasks',
    tag: '03 / Task Stream',
    title: 'Intentional task management.',
    subtitle: 'Sync your Google Tasks directly into your workflow. Categorized cleanly so you focus on one priority at a time.',
    video: '/Videos/todo.mp4',
    alt: 'Halberd Google Tasks integration showing clean checklist interface',
    features: ['Google Tasks bi-directional sync', 'Contextual tags (Office, Home, Focus)', 'Quick task creation inline', 'Clean check-off satisfaction'],
  },
];

export function Showcase() {
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const current = tabs.find((t) => t.id === activeTab) || tabs[0];

  const handleVideoEnd = () => {
    setActiveTab((prev) => {
      const currentIndex = tabs.findIndex((t) => t.id === prev);
      return tabs[(currentIndex + 1) % tabs.length].id;
    });
  };

  return (
    <section id="features" className="border-b border-[#dfded7] bg-[#f7f6f0] py-24 sm:py-32">
      <div className="section-wrap">
        {/* Section Header */}
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d8d7cf] bg-[#fbfaf6] px-3.5 py-1 text-xs text-[#486551]">
              <Sparkles size={13} />
              <span className="font-mono text-[11px] uppercase tracking-wider">Product Showcase</span>
            </div>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[.95] tracking-[-.07em]">
              Designed for stillness, <br />
              <span className="display-serif">built for momentum.</span>
            </h2>
          </div>
          <p className="max-w-[340px] text-sm leading-6 text-[#666960]">
            Experience how Halberd transforms your new tab into an oasis of intention. Switch views below to explore each core surface.
          </p>
        </Reveal>

        {/* Tab Switcher Controls */}
        <Reveal delay="delay-1" className="mb-8">
          <div className="flex flex-wrap items-center gap-2 border-b border-[#dfded7] pb-4">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex items-center gap-2.5 rounded-full px-5 py-2.5 text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? 'bg-[#18211b] text-[#f9f9f7] shadow-sm'
                      : 'bg-[#eeece2] text-[#4d5248] hover:bg-[#e4e2d7] hover:text-[#111111]'
                  }`}
                >
                  {tab.id === 'home' && <Compass size={14} className={isActive ? 'text-[#a9c1ad]' : 'text-[#777b72]'} />}
                  {tab.id === 'calendar' && <CalendarIcon size={14} className={isActive ? 'text-[#a9c1ad]' : 'text-[#777b72]'} />}
                  {tab.id === 'todo' && <CheckSquare size={14} className={isActive ? 'text-[#a9c1ad]' : 'text-[#777b72]'} />}
                  <span>{tab.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8fb094] animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Browser Mockup Window */}
        <Reveal delay="delay-2" className="mx-auto w-full max-w-8xl">
          <div className="overflow-hidden rounded-2xl border border-[#d2d1c8] bg-[#1a1c18] shadow-[0_28px_60px_-15px_rgba(20,24,18,0.18)] transition-all">
            {/* Window Top Bar (Chrome / macOS style) */}
            <div className="flex items-center justify-between border-b border-[#2d312a] bg-[#222620] px-4 py-3 text-xs text-[#a3aca0]">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#e36a5c]/80 transition-opacity hover:opacity-100" />
                <span className="h-3 w-3 rounded-full bg-[#e7be46]/80 transition-opacity hover:opacity-100" />
                <span className="h-3 w-3 rounded-full bg-[#5fc454]/80 transition-opacity hover:opacity-100" />
                <div className="ml-3 hidden sm:flex items-center gap-2 rounded-md bg-[#181b16] px-3 py-1 text-[11px] text-[#8e988b]">
                  <Shield size={11} className="text-[#64846a]" />
                  <span>halberd://{activeTab}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[11px] text-[#939e90]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#5fc454]" />
                  <span className="hidden sm:inline">Active Space</span>
                </div>
                <div className="hidden md:flex items-center gap-2 border-l border-[#343a31] pl-3">
                  <Laptop size={13} />
                  <span>Desktop Extension</span>
                </div>
              </div>
            </div>

            {/* Screen Content Image */}
            <div className="relative w-full overflow-hidden bg-[#0d0f0c]">
              <video
                src={current.video}
                className="w-full"
                autoPlay
                muted
                playsInline
                onLoadedData={(e) => { (e.target as HTMLVideoElement).playbackRate = 2; }}
                onEnded={handleVideoEnd}
                key={current.id}
              />
              {/* Subtle Vignette Overlay for realism */}
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.25)]" />
            </div>

            {/* Interactive Bottom Bar with Tab Details */}
            <div className="grid gap-6 border-t border-[#292e27] bg-[#1b1f1a] p-6 text-[#eaece8] lg:grid-cols-[1.2fr_.8fr] lg:items-center">
              <div>
                <p className="eyebrow text-[#86a88e]">{current.tag}</p>
                <h3 className="mt-1 text-xl font-medium tracking-tight text-[#f3f5f1] sm:text-2xl">
                  {current.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#a4aca1] sm:text-sm">
                  {current.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {current.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 rounded-lg border border-[#2d352b] bg-[#222820]/70 px-3 py-2 text-[11px] text-[#c9d3c7]"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#648b6b]" />
                    <span className="truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
