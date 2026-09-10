import { Reveal } from '../Reveal';

export function QuieterWay() {
  return (
    <section className="border-b border-[#dfded7] bg-[#efeee7] py-16 sm:py-20" aria-label="A quieter way forward">
      <div className="section-wrap grid gap-8 md:grid-cols-[.45fr_1fr_.7fr] md:items-center md:gap-12">
        <p className="eyebrow text-[#486551]">01 / A quieter way forward</p>
        <Reveal><h2 className="max-w-[540px] text-2xl font-medium leading-tight tracking-[-.045em] sm:text-4xl">Your attention is yours.<br /><span className="display-serif">Keep it that way.</span></h2></Reveal>
        <p className="max-w-[300px] text-sm leading-6 text-[#666960]">The first release is for people who want less noise and more intention in the way they move online.</p>
      </div>
    </section>
  );
}
