import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from '../Reveal';

const faqs = [
  ['What is Halberd?', 'Halberd is a productivity and focus-oriented browser extension for building better digital habits. It brings your plans, focus sessions, and gentle browsing support into one calm place.'],
  ['When will Halberd launch?', 'We are shaping the first release now. Join the waitlist and we will let you know when the doors open.'],
  ['What platforms will Halberd support?', 'Halberd is being designed for modern desktop browsers first, with more platforms considered as the product grows.'],
  ['Is Halberd free?', 'The launch plan is still taking shape. Waitlist members will be the first to hear about access and pricing.'],
  ['How does the waitlist work?', 'Add your email above and we will contact you when there is news. There is no marketing sequence and no spam.'],
  ['Will my data be private?', 'Privacy is a product principle, not a feature to add later. Halberd will collect only what it needs to work and make that clear at every step.'],
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="border-b border-[#dfded7] py-28 sm:py-36">
      <div className="section-wrap grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
        <Reveal><p className="eyebrow mb-5">03 / Questions, answered</p><h2 className="max-w-[330px] text-[clamp(2.5rem,5vw,4.7rem)] font-medium leading-[.93] tracking-[-.07em]">No mystery.<br /><span className="display-serif">Just clarity.</span></h2></Reveal>
        <div>
          {faqs.map(([question, answer], index) => {
            const isOpen = open === index;
            return (
              <Reveal key={question} delay={index < 3 ? `delay-${index + 1}` : ''} className="border-t border-[#d3d2ca]">
                <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : index)} className="flex w-full items-center justify-between gap-5 py-6 text-left text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#486551]">
                  <span>{question}</span><ChevronDown size={18} className={`shrink-0 text-[#486551] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`faq-content ${isOpen ? 'open' : ''}`}><div><p className="max-w-[580px] pb-6 pr-10 text-sm leading-7 text-[#6a6d64]">{answer}</p></div></div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
