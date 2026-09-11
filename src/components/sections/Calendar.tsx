import { Calendar as CalendarIcon, CheckCircle2, Clock, Globe, ArrowRight } from 'lucide-react';
import { Reveal } from '../Reveal';

export function Calendar() {
  return (
    <section id="calendar" className="border-b border-[#dfded7] py-28 sm:py-36">
      <div className="section-wrap">
        <Reveal className="grid gap-12 lg:grid-cols-[.85fr_1.25fr] lg:items-center lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dedcd1] bg-[#fdfdfa] px-3.5 py-1 text-xs text-[#486551]">
              <CalendarIcon size={13} />
              <span className="font-mono text-[11px] uppercase tracking-wider">01 / Calendar Integration</span>
            </div>

            <h2 className="mt-4 max-w-[380px] text-[clamp(2.5rem,5vw,4.7rem)] font-medium leading-[.94] tracking-[-.07em]">
              Your schedule, <br />
              <span className="display-serif">connected.</span>
            </h2>

            <p className="mt-6 max-w-[340px] text-sm leading-7 text-[#666960]">
              Halberd brings your Google Calendar directly into your new tab space. View your daily flow, upcoming meetings, and focus blocks without opening another crowded calendar tab.
            </p>

            <div className="mt-8 space-y-4 border-t border-[#dfded7] pt-6">
              <div className="flex items-center gap-3 text-xs text-[#52594e]">
                <CheckCircle2 size={16} className="text-[#486551] shrink-0" />
                <span>Bi-directional real-time sync with Google Calendar</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#52594e]">
                <Clock size={16} className="text-[#486551] shrink-0" />
                <span>Automatic 20-minute quiet pre-event notifications</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#52594e]">
                <Globe size={16} className="text-[#486551] shrink-0" />
                <span>Zero background CPU drain and strict local data privacy</span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#hero-waitlist"
                className="btn-arrow inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#486551] uppercase hover:text-[#18211b]"
              >
                <span>Reserve early access</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <Reveal delay="delay-1">
            <div className="group relative overflow-hidden rounded-2xl border border-[#d6d5cc] bg-[#ffffff] p-2 shadow-[0_24px_50px_rgba(20,24,18,0.1)] transition-all hover:shadow-[0_30px_65px_rgba(20,24,18,0.14)]">
              {/* Browser bar */}
              <div className="flex items-center justify-between border-b border-[#ecebe4] px-4 py-2.5 text-xs text-[#7d8479]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#dfded7]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#dfded7]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#dfded7]" />
                  <span className="ml-2 font-mono text-[10px] text-[#868d82]">Halberd - Google Calendar Sync</span>
                </div>
                <span className="rounded-full bg-[#eff4ef] px-2.5 py-0.5 font-mono text-[10px] font-medium text-[#486551]">
                  121 Events Synced
                </span>
              </div>

              {/* Main Calendar Screenshot */}
              <div className="relative overflow-hidden rounded-lg">
                <video
                  src="/Videos/calendar.mp4"
                  className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onLoadedData={(e) => { (e.target as HTMLVideoElement).playbackRate = 2; }}
                />
              </div>
            </div>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
