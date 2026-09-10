import { useState } from 'react';

export function PetPreview() {
  const [grown, setGrown] = useState(false);
  const growth = grown ? 84 : 72;
  return (
    <div className="relative min-h-[320px] overflow-hidden border border-[#d3d2ca] bg-[#e7e5dc] p-6">
      <div className="flex items-start justify-between">
        <div><p className="eyebrow mb-2">Your companion</p><p className="text-lg font-medium tracking-[-.03em]">Alder is growing</p></div>
        <p className="font-mono text-[11px] text-[#486551]">{grown ? 'day 15' : 'day 14'}</p>
      </div>
      <div className="pet-breathe absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="relative h-32 w-40 rounded-[48%_48%_42%_42%] border border-[#555b4e] bg-[#7e8872] shadow-[inset_0_-15px_25px_rgba(29,39,27,.2)]">
          <div className="absolute left-8 top-9 h-3 w-3 rounded-full bg-[#273127]" /><div className="absolute right-8 top-9 h-3 w-3 rounded-full bg-[#273127]" />
          <div className="absolute bottom-8 left-1/2 h-1.5 w-6 -translate-x-1/2 rounded-full border-b border-[#273127]" />
          <div className="absolute -top-6 left-6 h-9 w-7 -rotate-12 rounded-t-full border border-[#555b4e] bg-[#7e8872]" />
          <div className="absolute -top-6 right-6 h-9 w-7 rotate-12 rounded-t-full border border-[#555b4e] bg-[#7e8872]" />
        </div>
        <div className="mx-auto mt-4 h-2 w-36 rounded-full bg-[#c7c6ba]"><div className="h-full rounded-full bg-[#486551] transition-all" style={{ width: `${growth}%` }} /></div>
      </div>
      <div className="absolute bottom-6 right-6 text-right text-[10px] text-[#74776d]">{grown ? '8 focused days' : '7 focused days'}<br /><button type="button" aria-pressed={grown} onClick={() => setGrown((current) => !current)} className="border-b border-[#486551] text-[#486551]">{grown ? 'Marked today.' : 'Complete today'}</button></div>
    </div>
  );
}
