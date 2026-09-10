import { ShieldCheck } from 'lucide-react';
import { Reveal } from '../Reveal';

export function Philosophy() {
  return (
    <section className="overflow-hidden bg-[#111111] py-28 text-[#f5f4ed] sm:py-40">
      <div className="section-wrap">
        <Reveal className="grid gap-14 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
          <h2 className="max-w-[800px] text-[clamp(3.4rem,9vw,9.5rem)] font-medium leading-[.82] tracking-[-.09em]">The internet<br /><span className="display-serif text-[#b6c7b8]">should work</span><br />for you.</h2>
          <div className="border-l border-[#5b6d5f] pl-6 lg:mb-3">
            <p className="eyebrow text-[#a9b9aa]">A quiet product philosophy</p>
            <p className="mt-6 max-w-[260px] text-sm leading-7 text-[#c3cec3]">Halberd is built on a simple belief: attention is not something to optimize. It is something worth protecting.</p>
            <div className="mt-9 flex items-center gap-3 text-xs text-[#a9b9aa]"><ShieldCheck size={15} /> Private by default. Human by design.</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
