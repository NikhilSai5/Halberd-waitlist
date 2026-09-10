import { Reveal } from '../Reveal';

const steps = [
  ['01', 'Organize', 'Bring your tasks, schedule and intentions together.'],
  ['02', 'Focus', 'Halberd helps you stay with what matters, one session at a time.'],
  ['03', 'Grow', 'Build consistency through small wins and visible progress.'],
];

export function Method() {
  return (
    <section id="method" className="bg-[#ebeae2] py-28 sm:py-36">
      <div className="section-wrap">
        <Reveal className="flex flex-col justify-between gap-10 border-b border-[#d0d0c6] pb-12 md:flex-row md:items-end">
          <div><p className="eyebrow mb-5">02 / The method</p><h2 className="max-w-[490px] text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[.92] tracking-[-.075em]">Make room for the <span className="display-serif">important</span> things.</h2></div>
          <p className="max-w-[235px] text-sm leading-6 text-[#656960]">Progress is not a performance. It is a place you return to.</p>
        </Reveal>
        <div className="grid md:grid-cols-3">
          {steps.map(([number, title, body], index) => (
            <Reveal key={number} delay={`delay-${index + 1}`} className="border-b border-[#d0d0c6] py-9 md:border-b-0 md:border-r md:px-9 md:first:pl-0 md:last:border-r-0">
              <p className="font-mono text-4xl tracking-[-.08em] text-[#486551]">{number}</p>
              <h3 className="mt-12 text-lg font-medium">{title}</h3>
              <p className="mt-3 max-w-[220px] text-sm leading-6 text-[#656960]">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
