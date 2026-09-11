import { useMemo, useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

interface FloatingCircleWidgetProps {
  mode?: 'circle' | 'pill' | 'timer' | 'flame';
  emoji?: string;
  label?: string;
  detail?: string;
  timer?: string;
  progress?: number;
  size?: number;
}

export function FloatingCircleWidget({
  mode = 'circle',
  emoji = '✨',
  label,
  detail,
  timer,
  progress = 60,
  size = 44,
}: FloatingCircleWidgetProps) {
  const strokeW = 2.5;
  const outerR = (size + 8) / 2;
  const innerR = outerR - strokeW;
  const circumference = useMemo(() => 2 * Math.PI * innerR, [innerR]);
  const dashOffset = circumference * (1 - progress / 100);

  const flameContainerRef = useRef<HTMLDivElement>(null);
  const [isFlameHovered, setIsFlameHovered] = useState(false);
  useEffect(() => {
    if (!flameContainerRef.current) return;
    const anim = lottie.loadAnimation({
      container: flameContainerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/lottie.json',
    });
    return () => anim.destroy();
  }, []);

  if (mode === 'flame') {
    return (
      <>
        <style>{`
          @keyframes fw-flame-glow {
            0%, 100% { box-shadow: 0 0 0 0 rgba(72,101,81,0), 0 0 8px rgba(255,100,20,0.25); }
            50% { box-shadow: 0 0 0 3px rgba(72,101,81,0.12), 0 0 18px rgba(255,100,20,0.45); }
          }
        `}</style>
        <div
          onMouseEnter={() => setIsFlameHovered(true)}
          onMouseLeave={() => setIsFlameHovered(false)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isFlameHovered && label ? 10 : 0,
            paddingLeft: 4,
            paddingRight: isFlameHovered && label ? 16 : 4,
            height: size + 8,
            minWidth: size + 8,
            borderRadius: 999,
            border: '2px solid rgba(72,101,81,0.3)',
            background: '#fdfdfa',
            cursor: 'pointer',
            transition: 'gap 0.3s ease, padding 0.3s ease, min-width 0.3s ease',
            animation: 'fw-flame-glow 2.5s ease-in-out infinite',
            userSelect: 'none',
            WebkitUserSelect: 'none',
          }}
        >
          <div
            ref={flameContainerRef}
            style={{
              width: size * 0.72,
              height: size * 0.72,
              flexShrink: 0,
            }}
          />
          {label && (
            <span
              style={{
                maxWidth: isFlameHovered ? 200 : 0,
                opacity: isFlameHovered ? 1 : 0,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                transition: 'max-width 0.3s ease, opacity 0.25s ease',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                color: '#1a1c17',
              }}
            >
              {label}
            </span>
          )}
        </div>
      </>
    );
  }

  if (mode === 'pill') {
    return (
      <>
        <style>{`
          @keyframes fw-pill-glow {
            0%, 100% { box-shadow: 0 0 0 0 rgba(72,101,81,0), 0 2px 6px rgba(20,24,18,0.1); }
            50% { box-shadow: 0 0 0 4px rgba(72,101,81,0.08), 0 4px 12px rgba(20,24,18,0.12); }
          }
          @keyframes fw-pill-badge-pulse {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.15); opacity: 1; }
          }
        `}</style>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '10px 20px 10px 12px',
            borderRadius: size / 2 + 10,
            background: '#fdfdfa',
            border: '1.5px solid rgba(72,101,81,0.22)',
            boxShadow: '0 4px 16px rgba(20,24,18,0.1), 0 1px 3px rgba(20,24,18,0.06)',
            animation: 'fw-pill-glow 4s ease-in-out infinite',
            userSelect: 'none',
          }}
        >
          <div
            style={{
              width: size,
              height: size,
              borderRadius: '50%',
              background: '#486551',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 0 0 2.5px #fdfdfa, 0 0 0 4px rgba(72,101,81,0.18)',
            }}
          >
            <span style={{ fontSize: size * 0.46, lineHeight: 1 }}>{emoji}</span>
          </div>
          {(label || detail) && (
            <div style={{ minWidth: 0 }}>
              {label && (
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase' as const,
                    color: '#486551',
                    lineHeight: 1,
                    marginBottom: 3,
                  }}
                >
                  {label}
                </div>
              )}
              {detail && (
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: '#1a1c17',
                    lineHeight: 1.3,
                    whiteSpace: 'nowrap' as const,
                  }}
                >
                  {detail}
                </div>
              )}
            </div>
          )}
          {/* subtle notification badge */}
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#486551',
              marginLeft: 4,
              alignSelf: 'flex-start',
              marginTop: 3,
              flexShrink: 0,
              animation: 'fw-pill-badge-pulse 3s ease-in-out infinite',
            }}
          />
        </div>
      </>
    );
  }

  const circleNode = (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: '#486551',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 0 0 2.5px #fdfdfa, 0 0 0 4px rgba(72,101,81,0.18)',
        position: 'relative' as const,
      }}
    >
      <span style={{ fontSize: size * 0.46, lineHeight: 1 }}>{emoji}</span>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes fw-circle-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(72,101,81,0), 0 1px 3px rgba(20,24,18,0.08); }
          50% { box-shadow: 0 0 0 3px rgba(72,101,81,0.07), 0 2px 8px rgba(20,24,18,0.1); }
        }
        @keyframes fw-ring-spin {
          from { transform: rotate(-90deg); }
          to { transform: rotate(270deg); }
        }
      `}</style>
      <div
        style={{
          position: 'relative' as const,
          display: 'inline-flex',
          flexDirection: 'column' as const,
          alignItems: 'center',
          gap: 8,
          animation: 'fw-circle-glow 4s ease-in-out infinite',
          userSelect: 'none',
        }}
      >
        <div style={{ position: 'relative' as const }}>
          {mode === 'timer' && (
            <svg
              width={size + 8}
              height={size + 8}
              style={{
                position: 'absolute' as const,
                top: -4,
                left: -4,
                transform: 'rotate(-90deg)',
              }}
            >
              <circle
                cx={(size + 8) / 2}
                cy={(size + 8) / 2}
                r={innerR}
                fill="none"
                stroke="rgba(72,101,81,0.14)"
                strokeWidth={strokeW}
              />
              <circle
                cx={(size + 8) / 2}
                cy={(size + 8) / 2}
                r={innerR}
                fill="none"
                stroke="#486551"
                strokeWidth={strokeW}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                style={{
                  transition: 'stroke-dashoffset 0.4s ease',
                }}
              />
            </svg>
          )}
          {circleNode}
        </div>
        {timer && (
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              fontWeight: 500,
              color: '#486551',
              letterSpacing: '0.02em',
            }}
          >
            {timer}
          </span>
        )}
      </div>
    </>
  );
}
