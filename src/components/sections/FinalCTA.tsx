import { Reveal } from '../Reveal';
import { WaitlistForm } from '../WaitlistForm';

export function FinalCTA() {
  return (
    <section id="waitlist" className="relative overflow-hidden bg-[#efeee7] py-28 sm:py-40">
      <div className="section-wrap relative z-10 grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
        <Reveal>
          <p className="eyebrow mb-6 text-[#486551]">The first step is small</p>
          <h2 className="max-w-[690px] text-[clamp(3.1rem,8vw,8.5rem)] font-medium leading-[.84] tracking-[-.09em]">Ready to take back<br /><span className="display-serif">your attention?</span></h2>
        </Reveal>
        <Reveal delay="delay-2" className="lg:pb-2">
          <p className="mb-7 max-w-[350px] text-sm leading-7 text-[#526257]">Join the Halberd waitlist and be among the first to experience a more focused internet.</p>
          <WaitlistForm formId="final-waitlist" compact />
        </Reveal>
      </div>
      <div className="pointer-events-none absolute -bottom-16 -right-20 hidden opacity-[.09] lg:block"><img src="/assets/halberd-knight.png" alt="" className="h-[580px] w-[580px] object-contain grayscale" /></div>
    </section>
  );
}
