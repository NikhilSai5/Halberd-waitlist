import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { QuieterWay } from '@/components/sections/QuieterWay';
import { Showcase } from '@/components/sections/Showcase';
import { Calendar } from '@/components/sections/Calendar';
import { FloatingCircle } from '@/components/sections/FloatingCircle';
import { Todo } from '@/components/sections/Todo';
import { DigitalPet } from '@/components/sections/DigitalPet';
import { Method } from '@/components/sections/Method';
import { Philosophy } from '@/components/sections/Philosophy';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="grain min-h-[100dvh] overflow-x-hidden">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <QuieterWay />
        <Showcase />
        <Calendar />
        <FloatingCircle />
        <Todo />
        <DigitalPet />
        <Method />
        <Philosophy />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
