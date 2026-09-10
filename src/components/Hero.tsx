import { WaitlistForm } from './WaitlistForm';

export function Hero() {
  return (
    <section id="top" className="relative min-h-[820px] overflow-hidden border-b border-[#dfded7] pt-[82px] lg:min-h-[980px]">
      <div className="section-wrap relative z-10 flex min-h-[738px] flex-col lg:min-h-[898px]">
        <div className="relative z-0 pt-10 sm:pt-16">
          <div className="max-w-[160px]">
            <p className="eyebrow leading-[1.8]">A more<br />focused<br />internet.</p>
            <div className="mt-5 h-px w-full bg-[#c5c5bc] line-reveal" />
          </div>
        </div>
        <div className="absolute right-0 top-10 max-w-[145px] text-right sm:top-[64%]">
          <p className="eyebrow leading-[1.8]">Small steps.<br />A better you.</p>
          <div className="mt-5 ml-auto h-px w-full bg-[#c5c5bc] line-reveal" />
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <div className="pointer-events-none absolute left-1/2 top-[44%] z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(3.6rem,18vw,17rem)] font-bold leading-[.73] tracking-[-.105em] text-[#111111] fade-up" aria-hidden="true">
            HALBERD
          </div>
          <div className="hero-knight absolute left-1/2 top-[46%] z-10 h-[min(67vw,400px)] w-[min(67vw,400px)] -translate-x-1/2 -translate-y-1/2 sm:top-[42%] sm:h-[min(66vw,650px)] sm:w-[min(66vw,650px)]">
            <img src="/assets/halberd-knight.png" alt="A knight holding a halberd and shield" className="h-full w-full object-contain drop-shadow-[0_22px_17px_rgba(17,19,15,.15)]" />
          </div>
          <div className="absolute bottom-[14%] left-1/2 z-20 h-5 w-[min(55vw,390px)] -translate-x-1/2 rounded-[50%] bg-[#20241f]/10 blur-md" />
        </div>

        <div className="relative z-20 flex justify-center pb-10 sm:pb-12">
          <WaitlistForm formId="hero-waitlist" />
        </div>
      </div>
    </section>
  );
}
