import { useEffect, useState, useMemo, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import heroSlide1 from "@/assets/image/Hero Section 1.png";
import heroSlide2 from "@/assets/image/Hero Section 2.png";
import heroSlide3 from "@/assets/image/Hero Section 3.png";

const desktopSlides = [heroSlide1, heroSlide2, heroSlide3];
const SLIDE_DURATION = 7200;

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Automated scene-to-scene transition
  const advance = useCallback(() => {
    setCurrent((v) => (v + 1) % desktopSlides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(advance, SLIDE_DURATION);
    return () => clearInterval(t);
  }, [advance]);

  // Memoize dust particles
  const dustParticles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => (
      <div
        key={i}
        className="dust-particle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 15 + 10}s`,
          opacity: Math.random() * 0.6 + 0.2
        }}
      />
    ));
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden bg-[#0A0401] film-grain"
    >
      {/* Background ambient sunset glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,69,19,0.25)_0%,transparent_70%)]" />

      {/* Atmospheric Haze Layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#E51B24]/5 via-[#1A0A05]/20 to-transparent haze-pulse pointer-events-none" />

      {/* Dust Particles Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {dustParticles}
      </div>

      {/* Hero Artwork - Scene Slider Wrapper */}
      <div className={`absolute inset-0 z-0 overflow-hidden ${isLoaded ? '' : 'opacity-0'}`}>
        
        {/* Synchronized Fast Slide Panels with Cinematic Blur */}
        {desktopSlides.map((src, idx) => {
          const isCurrent = idx === current;
          const isPrevious = idx === (current - 1 + desktopSlides.length) % desktopSlides.length;
          
          let outerClasses = "";
          if (isCurrent) {
            // Active slide: centered, no blur
            outerClasses = "translate-x-0 blur-none transition-all duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)] z-10";
          } else if (isPrevious) {
            // Previous slide exiting left: blurred
            outerClasses = "-translate-x-[100vw] blur-[6px] transition-all duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)] z-10";
          } else {
            // Next slides instantly wait on the right (already blurred)
            outerClasses = "translate-x-[100vw] blur-[6px] transition-none z-0";
          }

          return (
            <div
              key={idx}
              className={`absolute inset-0 ${outerClasses}`}
            >
              {/* Inner Container: 100vw wide to show full height without artificial cropping */}
              <div className={`absolute top-0 left-0 h-full w-full ${isCurrent ? 'cinematic-zoom-pan' : ''}`}>
                <img
                  src={src}
                  alt="Kunj Patel - Rockstar of Code"
                  // object-cover with top-anchoring guarantees faces/hats are NOT cropped
                  className="w-full h-full object-cover drop-shadow-[0_0_50px_rgba(0,0,0,0.9)]" 
                  style={{ objectPosition: 'center top' }}
                />
              </div>
            </div>
          );
        })}

      </div>

      {/* Dynamic Sunset Light Bloom */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(229,27,36,0.12)_0%,transparent_60%)] bloom-pulse pointer-events-none z-10" />

      {/* Vignette & Cinematic Dark Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,4,1,0.85)_100%)] pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0401] via-[#0A0401]/60 to-transparent pointer-events-none z-10" />

      {/* Hero Content - Sequential Fade Up Animation */}
      <div className="relative z-20 h-full flex flex-col justify-end pb-24 sm:pb-32 px-6 sm:px-12 max-w-7xl mx-auto">
        <p className={`font-telegraph text-[#E51B24] tracking-[0.4em] text-xs sm:text-sm mb-4 uppercase hero-content-hide ${isLoaded ? 'hero-fade-up-1' : ''}`}>
          ★ A Rockstar Of Code ★
        </p>
        <h1 className={`font-western text-[#F1EAD6] text-5xl sm:text-7xl lg:text-8xl leading-[0.95] drop-shadow-[0_6px_24px_rgba(0,0,0,0.8)] hero-content-hide ${isLoaded ? 'hero-fade-up-2' : ''}`}>
          Kunj Patel
        </h1>
        <p className={`mt-6 max-w-xl font-serif text-base sm:text-lg text-[#F1EAD6]/85 italic leading-relaxed hero-content-hide ${isLoaded ? 'hero-fade-up-3' : ''}`}>
          Software outlaw forging full-stack frontiers — riding the line between
          frontend artistry and backend grit since the early days of the gold rush.
        </p>
        <div className={`mt-10 flex flex-wrap gap-4 hero-content-hide ${isLoaded ? 'hero-fade-up-4' : ''}`}>
          <a
            href="#projects"
            className="group relative font-western tracking-wide text-sm bg-[#E51B24] text-[#F1EAD6] px-8 py-4 border-2 border-[#F1EAD6]/20 hover:bg-[#F1EAD6] hover:text-[#1A1A1A] transition-all duration-300 shadow-[0_8px_30px_rgba(229,27,36,0.45)]"
          >
            View The Bounties
          </a>
          <a
            href="#contact"
            className="font-western tracking-wide text-sm border-2 border-[#F1EAD6]/60 text-[#F1EAD6] px-8 py-4 hover:bg-[#F1EAD6] hover:text-[#1A1A1A] transition-all duration-300"
          >
            Send A Telegram
          </a>
        </div>
      </div>

      {/* Scroll indicator - Gentle Pulse */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-[#F1EAD6]/70 flex flex-col items-center gap-2">
        <span className="font-telegraph text-[10px] tracking-[0.3em] opacity-80">RIDE ON</span>
        <ChevronDown className="haze-pulse" size={20} />
      </div>
    </section>
  );
}
