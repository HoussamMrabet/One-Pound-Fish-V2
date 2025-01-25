import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { About } from './components/About';
import { Tokenomics } from './components/Tokenomics';
import { FloatingFish } from './components/FloatingFish';
import { SoundboardSection } from './components/sections/SoundboardSection';
import { MemeSection } from './components/sections/MemeSection';
import { GameSection } from './components/sections/GameSection';
import { ViralSection } from './components/sections/ViralSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying] = useState(false);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const audio = new Audio('/sounds/market-ambience.mp3');
    audio.loop = true;

    if (isPlaying && !isMuted) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => audio.pause();
  }, [isPlaying, isMuted]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsMuted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#1A232E] text-white relative overflow-hidden">
      <FloatingFish />

      {/* Ticker Tape */}
      <div className="bg-blue-500 text-white py-2 whitespace-nowrap overflow-hidden">
        <div className="animate-marquee inline-block">
          VERY VERY GOOD, VERY VERY CHEAP • ONE POUND FISH • COME ON LADIES, COME ON LADIES •
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center"
        ref={heroSectionRef}
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted={isMuted}
            className="w-full h-full object-cover opacity-50"
            src="/vid.mp4"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-7xl font-bold mb-6 font-market">ONE POUND FISH</h1>
          <p className="text-2xl mb-8">$FISH Token</p>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-400 transition-colors"
          >
            {isMuted ? <VolumeX className="inline mr-2" /> : <Volume2 className="inline mr-2" />}
            {isMuted ? 'Unmute' : 'Mute'} The Legend
          </button>
        </div>
      </section>

      <About />
      <ViralSection />
      <Tokenomics />
      {/* <CalculatorSection /> */}
      <SoundboardSection />
      <MemeSection />
      <GameSection />
      <ContactSection />
      <Footer />
    </div>
  );
}