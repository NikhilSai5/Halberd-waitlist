import { Reveal } from '../Reveal';

export function DigitalPet() {
  return (
    <section className="border-b border-[#dfded7] py-28 sm:py-36">
      <div className="section-wrap">
        <Reveal className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal delay="delay-1">
            <img
              src="/only cat.png"
              alt="Halberd digital pet cat"
              className="w-full rounded-lg"
            />
          </Reveal>
          <div>
            <p className="eyebrow mb-5">04 / Digital Pet</p>
            <h2 className="max-w-[380px] text-[clamp(2.5rem,5vw,4.7rem)] font-medium leading-[.94] tracking-[-.07em]">
              Your productivity <span className="display-serif">companion.</span>
            </h2>
            <p className="mt-7 max-w-[310px] text-sm leading-6 text-[#666960]">
              A digital pet cat that stays with you while you work.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
