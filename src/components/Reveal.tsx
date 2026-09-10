import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = { children: ReactNode; className?: string; delay?: string };

export function Reveal({ children, className = '', delay = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${visible ? 'fade-up' : 'opacity-0'} ${delay} ${className}`}>
      {children}
    </div>
  );
}
