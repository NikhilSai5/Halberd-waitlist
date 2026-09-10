import { Reveal } from '../Reveal';

const features = [
  {
    number: '01 — Reminders',
    title: 'Stay ahead of what matters.',
    description: 'Get gentle nudges for what needs your attention.',
    image: '/floating_circle_calendar_notification.png',
  },
  {
    number: '02 — Focus Mode',
    title: 'Create space for focused work.',
    description: 'Minimize distractions and stay in the zone.',
    image: '/floating_circle_focus_mode.png',
  },
  {
    number: '03 — Habits',
    title: 'Build habits that stick.',
    description: 'Track and maintain your daily routines.',
    image: '/floating_circle_habit remainder.png',
  },
  {
    number: '04 — Pomodoro',
    title: 'Work in focused intervals.',
    description: 'Structured work sessions with built-in breaks.',
    image: '/floating_circle_pomodoro.png',
  },
];

export function FloatingCircle() {
  return (
    <section className="border-b border-[#dfded7] py-28 sm:py-36">
      <div className="section-wrap">
        <Reveal className="mb-16">
          <p className="eyebrow mb-5">02 / Floating Circle</p>
          <h2 className="max-w-[480px] text-[clamp(2.5rem,5vw,4.7rem)] font-medium leading-[.94] tracking-[-.07em]">
            Your productivity tools, <span className="display-serif">always within reach.</span>
          </h2>
          <p className="mt-7 max-w-[400px] text-sm leading-6 text-[#666960]">
            A single floating circle gives you quick access to the tools you need throughout your day.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature, index) => (
            <Reveal key={feature.number} delay={`delay-${index + 1}`}>
              <div className="rounded-lg border border-[#dfded7] p-6">
                <p className="eyebrow mb-3 text-[#486551]">{feature.number}</p>
                <h3 className="text-xl font-medium tracking-[-.05em]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#666960]">{feature.description}</p>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="mt-4 w-full rounded"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
