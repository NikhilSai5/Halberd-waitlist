import { useState } from 'react';
import { CheckSquare, CheckCircle2, ListFilter, PlusCircle, ArrowRight } from 'lucide-react';
import { Reveal } from '../Reveal';

export function Todo() {
  const [interactiveTasks, setInteractiveTasks] = useState([
    { id: 1, text: 'Review quarter roadmap draft', done: true, tag: 'Strategy' },
    { id: 2, text: 'Complete Halberd deep focus sprint', done: false, tag: 'Focus' },
    { id: 3, text: 'Afternoon walk & hydration', done: false, tag: 'Habit' },
  ]);

  const toggleTask = (id: number) => {
    setInteractiveTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <section id="todo" className="border-b border-[#dfded7] py-28 sm:py-36">
      <div className="section-wrap">
        <Reveal className="grid gap-12 lg:grid-cols-[1.25fr_.85fr] lg:items-center lg:gap-20">
          {/* Main Screenshot Window */}
          <div className="order-2 lg:order-1">
            <div className="group relative overflow-hidden rounded-2xl border border-[#d6d5cc] bg-[#ffffff] p-2 shadow-[0_24px_50px_rgba(20,24,18,0.1)] transition-all hover:shadow-[0_30px_65px_rgba(20,24,18,0.14)]">
              {/* Browser bar */}
              <div className="flex items-center justify-between border-b border-[#ecebe4] px-4 py-2.5 text-xs text-[#7d8479]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#dfded7]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#dfded7]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#dfded7]" />
                  <span className="ml-2 font-mono text-[10px] text-[#868d82]">Halberd - Google Tasks Stream</span>
                </div>
                <span className="rounded-full bg-[#eff4ef] px-2.5 py-0.5 font-mono text-[10px] font-medium text-[#486551]">
                  Context: Office / Today
                </span>
              </div>

              {/* Main Todo Screenshot */}
              <div className="relative overflow-hidden rounded-lg">
                <video
                  src="/Videos/todo.mp4"
                  className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onLoadedData={(e) => { (e.target as HTMLVideoElement).playbackRate = 2; }}
                />
              </div>

              {/* Interactive micro-demo bar */}
              <div className="mt-2 border-t border-[#f0eee6] bg-[#fcfbfa] p-3">
                <div className="mb-2 flex items-center justify-between text-[11px] text-[#71776d]">
                  <span className="font-mono uppercase tracking-wider">Interactive Task Preview</span>
                  <span>Click circle to check off</span>
                </div>
                <div className="space-y-1.5">
                  {interactiveTasks.map((task) => (
                    <div
                      key={task.id}
                      onClick={() => toggleTask(task.id)}
                      className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-1.5 text-xs transition-colors ${
                        task.done ? 'bg-[#f4f3ec] text-[#8b9186]' : 'bg-white text-[#191c17] hover:bg-[#f6f5ee]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors ${
                            task.done
                              ? 'border-[#486551] bg-[#486551] text-white'
                              : 'border-[#b5b8af] hover:border-[#486551]'
                          }`}
                        >
                          {task.done && '✓'}
                        </span>
                        <span className={task.done ? 'line-through' : ''}>{task.text}</span>
                      </div>
                      <span className="font-mono text-[10px] text-[#7f857a]">{task.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section Narrative Copy */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dedcd1] bg-[#fdfdfa] px-3.5 py-1 text-xs text-[#486551]">
              <CheckSquare size={13} />
              <span className="font-mono text-[11px] uppercase tracking-wider">03 / Intentional Tasks</span>
            </div>

            <h2 className="mt-4 max-w-[380px] text-[clamp(2.5rem,5vw,4.7rem)] font-medium leading-[.94] tracking-[-.07em]">
              Your tasks, <br />
              <span className="display-serif">connected.</span>
            </h2>

            <p className="mt-6 max-w-[340px] text-sm leading-7 text-[#666960]">
              Say goodbye to juggling five different to-do apps. Halberd synchronizes with Google Tasks, presenting your most pressing actions directly on your new tab with effortless ease.
            </p>

            <div className="mt-8 space-y-4 border-t border-[#dfded7] pt-6">
              <div className="flex items-center gap-3 text-xs text-[#52594e]">
                <CheckCircle2 size={16} className="text-[#486551] shrink-0" />
                <span>One-click Google Tasks two-way sync</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#52594e]">
                <ListFilter size={16} className="text-[#486551] shrink-0" />
                <span>Filtered views by workspace: Office, Personal, Deep Work</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#52594e]">
                <PlusCircle size={16} className="text-[#486551] shrink-0" />
                <span>Quick-capture tasks in less than two seconds</span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#hero-waitlist"
                className="btn-arrow inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#486551] uppercase hover:text-[#18211b]"
              >
                <span>Join the waitlist</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
