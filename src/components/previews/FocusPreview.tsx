import { useEffect, useState } from 'react';
import { Pause, Play } from 'lucide-react';

export function FocusPreview() {
  const sessionLength = 45 * 60;
  const [remaining, setRemaining] = useState(24 * 60 + 18);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (!running || remaining <= 0) return;
    const timer = window.setInterval(() => setRemaining((current) => Math.max(0, current - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [running, remaining]);
  const minutes = Math.floor(remaining / 60).toString().padStart(2, '0');
  const seconds = (remaining % 60).toString().padStart(2, '0');
  const progress = Math.round(((sessionLength - remaining) / sessionLength) * 100);

  return (
    <div className="relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden border border-[#3b493e] bg-[#1b261e] px-5 py-8 text-center text-[#eff0e9]">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(221,230,218,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(221,230,218,.12) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />
      <p className="relative z-10 eyebrow text-[#a9b9aa]">Focus session / 04</p>
      <div className="focus-ring relative z-10 mt-4 flex h-40 w-40 items-center justify-center rounded-full border border-[#718a74]">
        <div className="absolute inset-3 rounded-full border border-[#718a74]/50" />
        <div className="relative">
          <p className="font-mono text-3xl tracking-[-.06em]">{minutes}:{seconds}</p>
          <p className="mt-2 text-[9px] uppercase tracking-[.2em] text-[#a9b9aa]">{running ? 'Stay with it' : 'Ready when you are'}</p>
        </div>
      </div>
      <div className="relative z-10 mt-5 flex items-center gap-3 text-[10px] text-[#a9b9aa]">
        <button type="button" aria-label={running ? 'Pause focus session' : 'Start focus session'} onClick={() => setRunning((current) => !current)} className="flex items-center gap-2 border-b border-[#718a74] pb-1 text-[#d9e4da] transition-colors hover:border-[#f0f3ea] hover:text-white">
          {running ? <Pause size={12} /> : <Play size={12} />} {running ? 'Pause' : 'Start session'}
        </button>
        <span aria-hidden="true">{'\u00b7'}</span><span>{progress}% complete</span>
      </div>
    </div>
  );
}
