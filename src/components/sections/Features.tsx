import { Reveal } from '../Reveal';
import { CalendarPreview } from '../previews/CalendarPreview';
import { FocusPreview } from '../previews/FocusPreview';
import { PetPreview } from '../previews/PetPreview';

const minor = [
  ['Task management', 'Turn good intentions into the next clear action, then give it a time and a place.'],
  ['Considered browsing', 'Gentle friction when a detour is not what you meant, without taking control away from you.'],
  ['Progress, quietly', 'See the pattern of your attention without turning your life into a score.'],
];

export function Features() {
  return (
    <section id="features" className="border-b border-[#dfded7] py-28 sm:py-36">
      <div className="section-wrap">
        <Reveal className="grid gap-10 lg:grid-cols-[.8fr_1.3fr] lg:gap-28">
          <div>
            <p className="eyebrow mb-5">01 / The toolkit</p>
            <h2 className="max-w-[340px] text-[clamp(2.5rem,5vw,4.7rem)] font-medium leading-[.94] tracking-[-.07em]">Built for a more <span className="display-serif">focused</span> internet.</h2>
            <p className="mt-7 max-w-[310px] text-sm leading-6 text-[#666960]">Halberd brings the pieces of a focused day into one calm browser extension: plan what matters, stay with it, and make progress feel worth returning to.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <p className="eyebrow mb-2 text-[#486551]">01 / Calendar + todo lists</p>
                  <h3 className="text-2xl font-medium tracking-[-.05em]">Turn intentions into a day you can actually see.</h3>
                </div>
                <p className="max-w-[270px] text-sm leading-6 text-[#696c63]">Your schedule and your next actions live together, so planning does not become another task to manage.</p>
              </div>
              <CalendarPreview />
            </div>
            <div>
              <div className="mb-4">
                <p className="eyebrow mb-2 text-[#486551]">02 / Floating focus circle</p>
                <h3 className="text-2xl font-medium tracking-[-.05em]">A quiet signal to come back to what matters.</h3>
                <p className="mt-3 max-w-[310px] text-sm leading-6 text-[#696c63]">Start a session from anywhere. The floating circle keeps time, marks progress, and stays present without filling your screen with noise.</p>
              </div>
              <FocusPreview />
            </div>
            <div>
              <div className="mb-4">
                <p className="eyebrow mb-2 text-[#486551]">03 / Digital pets</p>
                <h3 className="text-2xl font-medium tracking-[-.05em]">Let consistency become something you can care for.</h3>
                <p className="mt-3 max-w-[310px] text-sm leading-6 text-[#696c63]">Your companion grows with the focused days you complete. It is a gentle reminder of momentum, not another score to chase.</p>
              </div>
              <PetPreview />
            </div>
          </div>
        </Reveal>
        <div className="mt-20 grid border-t border-[#d3d2ca] md:grid-cols-3">
          {minor.map(([title, body], index) => (
            <Reveal key={title} delay={`delay-${index + 1}`} className={`feature-rule py-7 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 ${index === 0 ? '' : ''}`}>
              <p className="eyebrow mb-6">0{index + 4}</p>
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-3 max-w-[240px] text-sm leading-6 text-[#696c63]">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
