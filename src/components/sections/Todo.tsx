import { Reveal } from '../Reveal';

export function Todo() {
  return (
    <section className="border-b border-[#dfded7] py-28 sm:py-36">
      <div className="section-wrap">
        <Reveal className="grid gap-10 lg:grid-cols-[.8fr_1.3fr] lg:gap-28">
          <div>
            <p className="eyebrow mb-5">03 / Todo</p>
            <h2 className="max-w-[340px] text-[clamp(2.5rem,5vw,4.7rem)] font-medium leading-[.94] tracking-[-.07em]">
              Your tasks, <span className="display-serif">connected.</span>
            </h2>
            <p className="mt-7 max-w-[310px] text-sm leading-6 text-[#666960]">
              Connect Google Tasks and keep your tasks within your productivity space.
            </p>
          </div>
          <Reveal delay="delay-1">
            <img
              src="/todo.png"
              alt="Halberd todo connected to Google Tasks"
              className="w-full rounded-lg"
            />
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
