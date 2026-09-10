import { Reveal } from '../Reveal';

export function Calendar() {
  return (
    <section className="border-b border-[#dfded7] py-28 sm:py-36">
      <div className="section-wrap">
        <Reveal className="grid gap-10 lg:grid-cols-[.8fr_1.3fr] lg:gap-28">
          <div>
            <p className="eyebrow mb-5">01 / Calendar</p>
            <h2 className="max-w-[340px] text-[clamp(2.5rem,5vw,4.7rem)] font-medium leading-[.94] tracking-[-.07em]">
              Your schedule, <span className="display-serif">connected.</span>
            </h2>
            <p className="mt-7 max-w-[310px] text-sm leading-6 text-[#666960]">
              Connect Google Calendar and keep your schedule within your productivity space.
            </p>
          </div>
          <Reveal delay="delay-1">
            <img
              src="/calendar.png"
              alt="Halberd calendar connected to Google Calendar"
              className="w-full rounded-lg"
            />
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
