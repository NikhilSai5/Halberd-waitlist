import { useState, type FormEvent } from 'react';
import { ArrowRight, Check, Mail } from 'lucide-react';

type SubmitState = 'idle' | 'loading' | 'error' | 'success';

export function WaitlistForm({ compact = false, formId }: { compact?: boolean; formId: string }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<SubmitState>('idle');
  const [message, setMessage] = useState('');

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedEmail = email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);
    if (!valid) {
      setState('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setState('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: normalizedEmail }),
      });
      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setState('error');
        setMessage(data.error ?? 'We couldn\u2019t add you to the waitlist. Please try again.');
        return;
      }

      setState('success');
      setMessage(data.message ?? 'You\u2019re on the waitlist. We\u2019ll be in touch.');
    } catch {
      setState('error');
      setMessage('We couldn\u2019t reach the waitlist. Please check your connection and try again.');
    }
  };

  const locked = state === 'loading' || state === 'success';
  return (
    <div className={compact ? 'w-full' : 'w-full max-w-[520px]'}>
      <form
        id={formId}
        onSubmit={submit}
        className={`waitlist-input group flex border border-[#bbbcb3] bg-[#fdfdfa] transition-all ${compact ? 'rounded-2xl p-1.5 sm:rounded-full' : 'rounded-full p-1.5'}`}
        aria-describedby={`${formId}-note ${formId}-message`}
      >
        <label htmlFor={`${formId}-email`} className="sr-only">Email address</label>
        <div className="flex min-w-0 flex-1 items-center gap-3 px-4">
          <Mail size={16} strokeWidth={1.5} className="shrink-0 text-[#62655e]" aria-hidden="true" />
          <input
            id={`${formId}-email`}
            type="email"
            value={email}
            onChange={(event) => { setEmail(event.target.value); if (state !== 'idle') setState('idle'); }}
            placeholder="Enter your email"
            autoComplete="email"
            disabled={locked}
            className="min-w-0 flex-1 bg-transparent py-3 text-sm text-[#171814] outline-none placeholder:text-[#85877e] disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>
        <button
          type="submit"
          disabled={locked}
          className="btn-arrow flex shrink-0 items-center gap-3 rounded-full bg-[#18211b] px-5 py-3 text-[11px] font-medium uppercase tracking-[.12em] text-[#f9f9f7] transition-all hover:-translate-y-0.5 hover:bg-[#486551] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#486551] focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-60 sm:px-6"
        >
          <span>{state === 'loading' ? 'Joining\u2026' : state === 'success' ? 'Joined' : 'Join waitlist'}</span>
          {state === 'success' ? <Check size={14} /> : <ArrowRight size={14} />}
        </button>
      </form>
      <p id={`${formId}-note`} className="mt-3 px-2 text-[11px] leading-5 text-[#777970]">
        Be the first to know when Halberd launches. No spam, ever.
      </p>
      <div id={`${formId}-message`} aria-live="polite" className="min-h-6 px-2 pt-1 text-xs">
        {state === 'error' && <p className="text-[#8c4d40]">{message}</p>}
        {state === 'success' && <p className="text-[#486551]">{message}</p>}
      </div>
    </div>
  );
}
