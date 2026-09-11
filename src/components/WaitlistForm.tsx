// import { useState, useRef, useEffect, type FormEvent } from 'react';
// import { ArrowRight, Check, Mail, Sparkles } from 'lucide-react';

// type SubmitState = 'idle' | 'loading' | 'error' | 'success';

// export function WaitlistForm({ compact = false, formId }: { compact?: boolean; formId: string }) {
//   const [email, setEmail] = useState('');
//   const [state, setState] = useState<SubmitState>('idle');
//   const [message, setMessage] = useState('');
//   const [expanded, setExpanded] = useState(false);
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (expanded && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [expanded]);

//   const submit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const normalizedEmail = email.trim();
//     const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);
//     if (!valid) {
//       setState('error');
//       setMessage('Please enter a valid email address.');
//       return;
//     }

//     setState('loading');
//     setMessage('');

//     try {
//       const response = await fetch('/api/waitlist', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: normalizedEmail }),
//       });

//       if (response.ok) {
//         const data = (await response.json()) as { message?: string };
//         setState('success');
//         setMessage(data.message ?? 'You\u2019re on the waitlist. We\u2019ll be in touch soon.');
//         return;
//       }
//     } catch {
//       // Fallback for static client environments
//     }

//     try {
//       const existing = JSON.parse(localStorage.getItem('halberd_waitlist') || '[]');
//       if (!existing.includes(normalizedEmail)) {
//         existing.push(normalizedEmail);
//         localStorage.setItem('halberd_waitlist', JSON.stringify(existing));
//       }
//     } catch {
//       // ignore
//     }

//     setTimeout(() => {
//       setState('success');
//       setMessage('You\u2019re in! We reserved your spot in the early access circle.');
//     }, 450);
//   };

//   const locked = state === 'loading' || state === 'success';

//   return (
//     <div className={compact ? 'w-full' : 'w-full max-w-[450px]'}>
//       <form
//         id={formId}
//         onSubmit={submit}
//         className={`waitlist-input group relative flex items-center justify-center border border-[#bbbcb3] bg-[#fdfdfa] rounded-full p-1 transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:border-[#8f968b] shadow-xs ${
//           expanded ? 'max-w-[450px] justify-start' : 'max-w-[170px]'
//         }`}
//         aria-describedby={`${formId}-note ${formId}-message`}
//       >
//         <label htmlFor={`${formId}-email`} className="sr-only">Email address</label>

//         {/* Input area - slides in from left */}
//         <div
//           className={`flex items-center gap-2.5 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
//             expanded
//               ? 'min-w-0 flex-1 max-w-[300px] px-3 sm:px-3.5 opacity-100'
//               : 'min-w-0 flex-1 max-w-0 px-0 opacity-0'
//           }`}
//         >
//           <Mail size={14} strokeWidth={1.5} className="shrink-0 text-[#62655e]" aria-hidden="true" />
//           <input
//             ref={inputRef}
//             id={`${formId}-email`}
//             type="email"
//             value={email}
//             onChange={(event) => {
//               setEmail(event.target.value);
//               if (state !== 'idle') setState('idle');
//             }}
//             placeholder="Enter your email"
//             autoComplete="email"
//             disabled={locked}
//             className="min-w-0 flex-1 bg-transparent py-1.5 sm:py-2 text-xs sm:text-sm text-[#171814] outline-none placeholder:text-[#85877e] disabled:cursor-not-allowed disabled:opacity-60"
//           />
//         </div>

//         <button
//           type={expanded ? 'submit' : 'button'}
//           onClick={expanded ? undefined : () => setExpanded(true)}
//           disabled={locked}
//           className={`btn-arrow flex shrink-0 items-center gap-1 rounded-full bg-[#18211b] px-3.5 py-2 sm:px-4 sm:py-2.5 text-[10px] sm:text-[10.5px] font-medium uppercase tracking-[.1em] text-[#f9f9f7] transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:-translate-y-0.5 hover:bg-[#486551] hover:shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#486551] focus-visible:ring-offset-2 disabled:cursor-default disabled:opacity-80`}
//         >
//           <span>
//             {state === 'loading'
//               ? 'Joining\u2026'
//               : state === 'success'
//               ? 'Joined'
//               : 'Join waitlist'}
//           </span>
//           {state === 'success' ? <Check size={10} className="text-[#a4e1ac]" /> : <ArrowRight size={10} />}
//         </button>
//       </form>

//       {/* Subtext - fades in below */}
//       <div
//         className={`mt-2 flex items-center justify-between px-2 text-[10.5px] leading-4 text-[#777970] transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
//           expanded ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
//         }`}
//       >
//         <span id={`${formId}-note`}>No marketing spam. Private by design.</span>
//         <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[#525f50] text-[10px]">
//           <Sparkles size={9} className="text-[#486551]" />
//           1,480+ in waitlist
//         </span>
//       </div>

//       <div id={`${formId}-message`} aria-live="polite" className="min-h-5 px-2 pt-0.5 text-xs">
//         {state === 'error' && <p className="text-[#8c4d40] text-[11px]">{message}</p>}
//         {state === 'success' && (
//           <p className="flex items-center gap-1.5 font-medium text-[#3b6645] text-[11px]">
//             <Check size={12} /> {message}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }


import { useState, useRef, useEffect, type FormEvent } from 'react';
import {
  ArrowRight,
  Check,
  Mail,
} from 'lucide-react';
import { supabase } from '../lib/supabase';

type SubmitState = 'idle' | 'loading' | 'error' | 'success';

export function WaitlistForm({
  compact = false,
  formId,
}: {
  compact?: boolean;
  formId: string;
}) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<SubmitState>('idle');
  const [message, setMessage] = useState('');
  const [expanded, setExpanded] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const locked = state === 'loading' || state === 'success';

  useEffect(() => {
    if (expanded && !locked) {
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [expanded, locked]);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = email.trim();

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      normalizedEmail
    );

    if (!valid) {
      setState('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setState('loading');
    setMessage('');

    // Primary path: save to Supabase. Duplicate emails are silently skipped
    // thanks to the unique(email) constraint + ignoreDuplicates upsert.
    try {
      const { error } = await supabase
        .from('waitlist')
        .upsert(
          { email: normalizedEmail },
          { onConflict: 'email', ignoreDuplicates: true },
        );

      if (error) {
        throw error;
      }

      setState('success');
      setEmail('');
      setMessage('You’re in! We reserved your spot in the early access circle.');
      return;
    } catch (err) {
      console.error('[WaitlistForm] Supabase upsert failed:', err);
      setState('error');
      setMessage(
        'Something went wrong saving your email. Please try again later.'
      );
      return;
    }
  };

  const handleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    if (locked) return;

    setExpanded(true);
    setState('idle');
    setMessage('');
  };

  return (
    <div
      className={`
        flex
        w-full
        flex-col
        items-center
        ${compact ? '' : 'max-w-[460px]'}
      `}
    >
      {/* =========================================
          WAITLIST FORM
      ========================================== */}
      <form
        id={formId}
        onSubmit={submit}
        className={`
          group
          relative
          flex
          items-center
          rounded-full
          border
          bg-[#fdfdfa]
          p-1

          transition-all
          duration-300
          ease-[cubic-bezier(0.25,0.8,0.25,1)]

          ${
            state === 'error'
              ? 'border-[#b77868] shadow-[0_0_0_3px_rgba(183,120,104,0.08)]'
              : state === 'success'
                ? 'border-[#718c77] shadow-[0_0_0_3px_rgba(72,101,81,0.07)]'
                : expanded
                  ? 'border-[#7d877d] shadow-[0_0_0_3px_rgba(72,101,81,0.06),0_4px_16px_rgba(24,33,27,0.05)]'
                  : 'border-[#bbbcb3] shadow-xs hover:border-[#8f968b] hover:shadow-[0_3px_12px_rgba(24,33,27,0.06)]'
          }

          ${
            expanded
              ? 'w-full max-w-[460px]'
              : 'w-fit'
          }
        `}
        aria-describedby={`${formId}-message`}
      >
        {/* Accessible label */}
        <label
          htmlFor={`${formId}-email`}
          className="sr-only"
        >
          Email address
        </label>

        {/* =========================================
            EMAIL INPUT
        ========================================== */}
        <div
          className={`
            flex
            min-w-0
            items-center
            gap-2.5
            overflow-hidden

            transition-all
            duration-300
            ease-[cubic-bezier(0.25,0.8,0.25,1)]

            ${
              expanded
                ? 'max-w-none flex-1 px-3 opacity-100 sm:px-3.5'
                : 'max-w-0 px-0 opacity-0'
            }
          `}
        >
          <Mail
            size={15}
            strokeWidth={1.5}
            className="shrink-0 text-[#62655e]"
            aria-hidden="true"
          />

          <input
            ref={inputRef}
            id={`${formId}-email`}
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);

              if (state === 'error') {
                setState('idle');
                setMessage('');
              }
            }}
            placeholder="Enter your email"
            autoComplete="email"
            disabled={locked}
            className="
              min-w-0
              w-full
              flex-1
              bg-transparent
              py-2

              text-xs
              text-[#171814]

              outline-none

              placeholder:text-[#92948b]

              disabled:cursor-not-allowed
              disabled:opacity-60

              sm:text-sm
            "
          />
        </div>

        {/* =========================================
            CTA BUTTON
        ========================================== */}
        <button
          type={expanded ? 'submit' : 'button'}
          onClick={!expanded ? (e) => handleExpand(e) : undefined}
          disabled={locked}
          className="
            flex
            shrink-0
            items-center
            justify-center
            gap-2

            rounded-full
            bg-[#18211b]

            px-4
            py-2.5

            text-[10px]
            font-medium
            uppercase
            tracking-[0.11em]

            text-[#f9f9f7]

            transition-all
            duration-300
            ease-[cubic-bezier(0.25,0.8,0.25,1)]

            hover:-translate-y-0.5
            hover:bg-[#486551]
            hover:shadow-[0_4px_12px_rgba(24,33,27,0.15)]

            active:translate-y-0

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#486551]
            focus-visible:ring-offset-2

            disabled:cursor-default
            disabled:opacity-90

            sm:px-4.5
          "
        >
          <span>
            {state === 'loading'
              ? 'Joining…'
              : state === 'success'
                ? 'Joined'
                : expanded
                  ? 'Join waitlist'
                  : 'Interested'}
          </span>

          {/* Loading indicator */}
          {state === 'loading' && (
            <span
              className="
                h-2.5
                w-2.5
                animate-spin
                rounded-full
                border
                border-[#f9f9f7]/30
                border-t-[#f9f9f7]
              "
            />
          )}

          {/* Success icon */}
          {state === 'success' && (
            <Check
              size={11}
              strokeWidth={2}
              className="text-[#a4e1ac]"
            />
          )}

          {/* Default arrow - only when collapsed */}
          {!expanded && state !== 'loading' && state !== 'success' && (
            <ArrowRight
              size={11}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-200
                group-hover:translate-x-0.5
              "
            />
          )}
        </button>
      </form>

      {/* =========================================
          STATUS MESSAGE
      ========================================== */}
      <div
        id={`${formId}-message`}
        aria-live="polite"
        className={`
          flex
          w-full
          justify-center
          px-3
          pt-1.5
          text-[11px]

          transition-all
          duration-200

          ${
            state === 'idle' || state === 'loading'
              ? 'min-h-5'
              : 'min-h-7'
          }
        `}
      >
        {/* Error */}
        {expanded && state === 'error' && (
          <p className="text-center text-[#8c4d40]">
            {message}
          </p>
        )}

        {/* Success */}
        {state === 'success' && (
          <p
            className="
              flex
              items-center
              gap-1.5
              text-center
              font-medium
              text-[#3b6645]
            "
          >
            <Check
              size={12}
              strokeWidth={2}
            />

            {message}
          </p>
        )}
      </div>
    </div>
  );
}