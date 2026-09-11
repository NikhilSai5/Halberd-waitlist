import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import { WaitlistForm } from './WaitlistForm';
import './parallax-hero.css';

export function Hero() {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const parallax_el = container.querySelectorAll<HTMLElement>('.parallax');
    const hide_el = container.querySelectorAll<HTMLElement>('.hide');
    const textH1 = container.querySelector<HTMLElement>('.text h1');
    const textH2 = container.querySelector<HTMLElement>('.text h2');
    const interactiveOverlay = container.querySelector<HTMLElement>('.hero-interactive-overlay');

    let xValue = 0;
    let yValue = 0;
    let rotateDegree = 0;

    const update = (cursorPosition: number) => {
      parallax_el.forEach((el) => {
        const speedx = parseFloat(el.dataset.speedx || '0');
        const speedy = parseFloat(el.dataset.speedy || '0');
        const speedz = parseFloat(el.dataset.speedz || '0');
        const rotateSpeed = parseFloat(el.dataset.rotation || '0');

        const leftPos = parseFloat(getComputedStyle(el).left);
        const isInLeft = leftPos < window.innerWidth / 2 ? 1 : -1;
        const zValue = (cursorPosition - leftPos) * isInLeft * 0.1;

        el.style.transform = `perspective(2300px) translateZ(${
          zValue * speedz
        }px) rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${
          -xValue * speedx
        }px)) translateY(calc(-50% + ${yValue * speedy}px))`;
      });
    };

    update(window.innerWidth / 2);

    const timeline = gsap.timeline();

    Array.from(parallax_el)
      .filter((el) => !el.classList.contains('text'))
      .forEach((el) => {
        const distance = parseFloat(el.dataset.distance || '0');
        const offset = (el.offsetHeight || 500) / 2 + distance;
        timeline.from(
          el,
          {
            top: `${offset}px`,
            duration: 3.5,
            ease: 'power3.out',
          },
          '1'
        );
      });

    if (textH1) {
      const topPos = textH1.getBoundingClientRect().top || 200;
      timeline.from(
        textH1,
        {
          y: window.innerHeight - topPos + 200,
          duration: 2,
        },
        '2.5'
      );
    }

    if (textH2) {
      timeline.from(
        textH2,
        {
          y: -150,
          opacity: 0,
          duration: 1.5,
        },
        '3'
      );
    }

    if (hide_el.length > 0) {
      timeline.from(
        hide_el,
        {
          opacity: 0,
          duration: 1.5,
        },
        '3'
      );
    }

    if (interactiveOverlay) {
      timeline.from(
        interactiveOverlay,
        {
          opacity: 0,
          y: 30,
          duration: 1.5,
          ease: 'power2.out',
        },
        '3.2'
      );
    }

    const transitionTimer = setTimeout(() => {
      parallax_el.forEach((el) => {
        el.style.transition = '0.45s cubic-bezier(0.2, 0.49, 0.32, 0.99)';
      });
    }, timeline.endTime() * 1000);

    const handleMouseMove = (e: MouseEvent) => {
      if (timeline.isActive()) return;
      xValue = e.clientX - window.innerWidth / 2;
      yValue = e.clientY - window.innerHeight / 2;
      rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
      update(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (timeline.isActive()) return;
      const touch = e.touches[0];
      if (touch) {
        xValue = touch.clientX - window.innerWidth / 2;
        yValue = touch.clientY - window.innerHeight / 2;
        rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
        update(touch.clientX);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      clearTimeout(transitionTimer);
      timeline.kill();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <section id="top" ref={containerRef} className="parallax-hero">
      <div className="vignette hide" />

      <img
        src="/img/background.png"
        data-speedx="0.3"
        data-speedy="0.38"
        data-speedz="0"
        data-rotation="0"
        data-distance="-200"
        className="parallax bg-img"
        alt="Background scenery"
      />

      <img
        src="/img/fog_7.png"
        data-speedx="0.27"
        data-speedy="0.32"
        data-speedz="0"
        data-rotation="0"
        data-distance="850"
        className="parallax fog-1"
        alt="Atmospheric fog"
      />

      <img
        src="/img/mountain_10.png"
        data-speedx="0.195"
        data-speedy="0.305"
        data-speedz="0"
        data-rotation="0"
        data-distance="1100"
        className="parallax mountain-10"
        alt="Distant mountain 10"
      />

      <img
        src="/img/fog_6.png"
        data-speedx="0.25"
        data-speedy="0.28"
        data-speedz="0"
        data-rotation="0"
        data-distance="1400"
        className="parallax fog-2"
        alt="Atmospheric fog 2"
      />

      <img
        src="/img/mountain_9.png"
        data-speedx="0.125"
        data-speedy="0.155"
        data-speedz="0.15"
        data-rotation="0.02"
        data-distance="1700"
        className="parallax mountain-9"
        alt="Mountain 9"
      />

      <img
        src="/img/mountain_8.png"
        data-speedx="0.1"
        data-speedy="0.11"
        data-speedz="0"
        data-rotation="0.02"
        data-distance="1800"
        className="parallax mountain-8"
        alt="Mountain 8"
      />

      <img
        src="/img/fog_5.png"
        data-speedx="0.16"
        data-speedy="0.105"
        data-speedz="0"
        data-rotation="0"
        data-distance="1900"
        className="parallax fog-3"
        alt="Atmospheric fog 3"
      />

      <img
        src="/img/mountain_7.png"
        data-speedx="0.1"
        data-speedy="0.1"
        data-speedz="0"
        data-rotation="0.09"
        data-distance="2000"
        className="parallax mountain-7"
        alt="Mountain 7"
      />

      <div
        className="text parallax"
        data-speedx="0.07"
        data-speedy="0.07"
        data-speedz="0"
        data-rotation="0.11"
      >
        <h2>China</h2>
        <h1>Zhangjiajie</h1>
      </div>

      <img
        src="/img/mountain_6.png"
        data-speedx="0.065"
        data-speedy="0.05"
        data-speedz="0.05"
        data-rotation="0.12"
        data-distance="2300"
        className="parallax mountain-6"
        alt="Mountain 6"
      />

      <img
        src="/img/fog_4.png"
        data-speedx="0.135"
        data-speedy="0.04"
        data-speedz="0"
        data-rotation="0"
        data-distance="2400"
        className="parallax fog-4"
        alt="Atmospheric fog 4"
      />

      <img
        src="/img/mountain_5.png"
        data-speedx="0.08"
        data-speedy="0.03"
        data-speedz="0.13"
        data-rotation="0.1"
        data-distance="2550"
        className="parallax mountain-5"
        alt="Mountain 5"
      />

      <img
        src="/img/fog_3.png"
        data-speedx="0.11"
        data-speedy="0.018"
        data-speedz="0"
        data-rotation="0"
        data-distance="2800"
        className="parallax fog-5"
        alt="Atmospheric fog 5"
      />

      <img
        src="/img/mountain_4.png"
        data-speedx="0.059"
        data-speedy="0.024"
        data-speedz="0.35"
        data-rotation="0.14"
        data-distance="3200"
        className="parallax mountain-4"
        alt="Mountain 4"
      />

      <img
        src="/img/mountain_3.png"
        data-speedx="0.04"
        data-speedy="0.018"
        data-speedz="0.32"
        data-rotation="0.05"
        data-distance="3400"
        className="parallax mountain-3"
        alt="Mountain 3"
      />

      <img
        src="/img/fog_2.png"
        data-speedx="0.15"
        data-speedy="0.0115"
        data-speedz="0"
        data-rotation="0"
        data-distance="3600"
        className="parallax fog-6"
        alt="Atmospheric fog 6"
      />

      <img
        src="/img/mountain_2.png"
        data-speedx="0.0235"
        data-speedy="0.013"
        data-speedz="0.42"
        data-rotation="0.15"
        data-distance="3800"
        className="parallax mountain-2"
        alt="Mountain 2"
      />

      <img
        src="/img/mountain_1.png"
        data-speedx="0.027"
        data-speedy="0.018"
        data-speedz="0.53"
        data-rotation="0.2"
        data-distance="4000"
        className="parallax mountain-1"
        alt="Mountain 1"
      />

      <img src="/img/sun_rays.png" className="sun-rays hide" alt="" />
      <img src="/img/black_shadow.png" className="black-shadow hide" alt="" />

      <img
        src="/img/fog_1.png"
        data-speedx="0.12"
        data-speedy="0.01"
        data-speedz="0"
        data-rotation="0"
        data-distance="4200"
        className="parallax fog-7"
        alt="Atmospheric foreground fog"
      />

      {/* Interactive CTA & navigation overlay */}
      <div className="hero-interactive-overlay">
        <WaitlistForm formId="hero-waitlist" />

        <a
          href="#features"
          className="hero-arrow group -mt-1 flex items-center justify-center rounded-full p-2.5 text-white/90 transition-opacity duration-300 hover:text-white hover:opacity-80"
          aria-label="Explore features"
        >
          <ChevronDown size={22} />
        </a>
      </div>
    </section>
  );
}