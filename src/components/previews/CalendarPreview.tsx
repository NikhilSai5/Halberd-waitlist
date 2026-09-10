import { useState } from 'react';
import { CalendarDays, CheckCircle2, Circle, ListTodo, Plus } from 'lucide-react';

export function CalendarPreview() {
  const days = ['M', 'T', 'W', 'T', 'F'];
  const dates = ['17', '18', '19', '20', '21'];
  const dayDetails = [
    { title: 'Monday, 17 June', events: [['Morning pages', '08:00 \u2014 08:30'], ['Design review', '10:30 \u2014 11:30']] },
    { title: 'Tuesday, 18 June', events: [['Deep work', '08:30 \u2014 10:00'], ['Walk + lunch', '12:00 \u2014 13:00'], ['Reading hour', '15:00 \u2014 16:00']] },
    { title: 'Wednesday, 19 June', events: [['Research block', '09:00 \u2014 11:00'], ['Call with Mira', '14:00 \u2014 14:30']] },
    { title: 'Thursday, 20 June', events: [['Writing time', '08:30 \u2014 10:00'], ['Gym', '17:00 \u2014 18:00']] },
    { title: 'Friday, 21 June', events: [['Weekly review', '09:00 \u2014 09:45'], ['Leave early', '15:30']] },
  ];
  const [selectedDay, setSelectedDay] = useState(1);
  const [completedTasks, setCompletedTasks] = useState<string[]>(['outline']);
  const detail = dayDetails[selectedDay];
  const tasks = [
    { id: 'outline', label: 'Outline the afternoon brief', meta: 'Today \u00b7 3:00 PM' },
    { id: 'walk', label: 'Take a proper lunch break', meta: 'Today \u00b7 12:00 PM' },
    { id: 'review', label: 'Review tomorrow\u2019s priorities', meta: 'Today \u00b7 4:30 PM' },
  ];

  return (
    <div className="relative overflow-hidden border border-[#d3d2ca] bg-[#f4f3ec] p-5 sm:p-7">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="eyebrow mb-2">This week</p>
          <p className="text-lg font-medium tracking-[-.03em]">{detail.title}</p>
        </div>
        <span aria-hidden="true" className="rounded-full border border-[#bfc1b7] p-2.5 text-[#486551]"><Plus size={16} /></span>
      </div>
      <div className="mb-6 grid grid-cols-5 gap-2 border-y border-[#d3d2ca] py-3">
        {days.map((day, index) => (
          <button key={`${day}-${dates[index]}`} type="button" aria-label={`View ${dayDetails[index].title}`} aria-pressed={selectedDay === index} onClick={() => setSelectedDay(index)} className={`flex flex-col items-center gap-1 py-1 text-[10px] transition-colors ${selectedDay === index ? 'font-semibold text-[#486551]' : 'text-[#888a81] hover:text-[#20221d]'}`}>
            <span className="font-mono text-[9px] uppercase">{day}</span><span className={`flex h-7 w-7 items-center justify-center rounded-full ${selectedDay === index ? 'bg-[#486551] text-[#f9f9f7]' : ''}`}>{dates[index]}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-[40px_1fr] gap-3">
        <div className="flex flex-col justify-between py-1 text-[9px] text-[#8a8b82]"><span>08:00</span><span>10:00</span><span>12:00</span><span>14:00</span><span>16:00</span></div>
        <div className="relative h-[220px] border-l border-[#d2d1c8]">
          <div className="absolute left-0 right-0 top-[18%] h-px bg-[#d9d8d0]" />
          <div className="absolute left-0 right-0 top-[38%] h-px bg-[#d9d8d0]" />
          <div className="absolute left-0 right-0 top-[58%] h-px bg-[#d9d8d0]" />
          <div className="absolute left-0 right-0 top-[78%] h-px bg-[#d9d8d0]" />
          {detail.events.map(([title, time], index) => (
            <div key={title} style={{ top: `${index === 0 ? 8 : index === 1 ? 45 : 80}%`, right: index === 0 ? '1rem' : index === 1 ? '3.5rem' : '2rem' }} className={`absolute left-3 border-l-2 px-3 py-2 ${index === 0 ? 'border-[#486551] bg-[#dce5dd]' : index === 1 ? 'border-[#858980] bg-[#e5e4dc]' : 'border-[#73766d] bg-[#deddd5]'}`}>
              <p className="text-[11px] font-semibold">{title}</p><p className="mt-1 text-[9px] text-[#777970]">{time}</p>
            </div>
          ))}
        </div>
      </div>
       <div className="mt-6 border-t border-[#d3d2ca] pt-5">
         <div className="mb-3 flex items-center justify-between">
           <div className="flex items-center gap-2">
             <ListTodo size={14} className="text-[#486551]" />
             <p className="eyebrow">Today\u2019s next steps</p>
           </div>
           <span className="font-mono text-[9px] text-[#85877e]">{completedTasks.length}/3 done</span>
         </div>
         <div className="grid gap-2 sm:grid-cols-3">
           {tasks.map((task) => {
             const complete = completedTasks.includes(task.id);
             return (
               <button
                 key={task.id}
                 type="button"
                 aria-pressed={complete}
                 onClick={() => setCompletedTasks((current) => complete ? current.filter((id) => id !== task.id) : [...current, task.id])}
                 className={`flex min-h-[62px] items-start gap-2 border p-2.5 text-left transition-colors ${complete ? 'border-[#b8c9bb] bg-[#e3ebe3]' : 'border-[#d5d4cb] bg-[#f8f7f2] hover:border-[#9eafa0]'}`}
               >
                 {complete ? <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#486551]" /> : <Circle size={14} className="mt-0.5 shrink-0 text-[#96988e]" />}
                 <span className="min-w-0">
                   <span className={`block text-[10px] leading-4 ${complete ? 'text-[#526257] line-through' : 'text-[#252821]'}`}>{task.label}</span>
                   <span className="mt-1 block font-mono text-[8px] uppercase tracking-[.08em] text-[#85877e]">{task.meta}</span>
                 </span>
               </button>
             );
           })}
         </div>
       </div>
      <div className="mt-6 flex items-center gap-3 border-t border-[#d3d2ca] pt-4 text-[10px] text-[#73766d]"><CalendarDays size={14} className="text-[#486551]" /> Your intentions, given a place to live.</div>
    </div>
  );
}
