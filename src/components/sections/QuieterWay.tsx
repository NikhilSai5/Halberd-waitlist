import { Reveal } from '../Reveal';
import { Zap, Target, Clock } from 'lucide-react';

export function QuieterWay() {
  return (
    <section className="border-b border-[#dfded7] bg-[#efeee7] py-16 sm:py-20" aria-label="A quieter way forward">
      <div className="section-wrap grid gap-8 md:grid-cols-[.45fr_1fr_.7fr] md:items-center md:gap-12">
        <p className="eyebrow text-[#486551]">01 / A quieter way forward</p>
        <Reveal><h2 className="max-w-[540px] text-2xl font-medium leading-tight tracking-[-.045em] sm:text-4xl">Your attention is yours.<br /><span className="display-serif">Keep it that way.</span></h2></Reveal>
        <div className="max-w-[340px] space-y-4">
          <p className="text-sm leading-6 text-[#666960]">The first release is for people who want less noise and more intention in the way they move online. Every feature is designed to boost your productivity without adding complexity.</p>
          <div className="flex flex-col gap-3 border-t border-[#dfded7] pt-4">
            <div className="flex items-center gap-2.5 text-xs text-[#52594e]">
              <Zap size={14} className="text-[#486551] shrink-0" />
              <span>Turn every new tab into a productive moment</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#52594e]">
              <Target size={14} className="text-[#486551] shrink-0" />
              <span>Stay focused on what matters most</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#52594e]">
              <Clock size={14} className="text-[#486551] shrink-0" />
              <span>Never lose track of your goals again</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
