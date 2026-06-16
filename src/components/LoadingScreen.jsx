import React, { useState, useEffect } from 'react';

// Memoized component ensures the video HTML is injected exactly once and NEVER re-renders.
// This prevents the flashing effect while guaranteeing React doesn't strip the raw HTML5 autoplay/muted attributes.
const StaticVideo = React.memo(() => (
  <div 
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 2,
    }}
    dangerouslySetInnerHTML={{ __html: `
      <video 
        src="/videos/loading-loop.mp4" 
        autoplay 
        muted 
        loop 
        playsinline 
        preload="auto"
        style="width: 100%; height: 100%; object-fit: cover; display: block; border: none; margin: 0; padding: 0;"
      ></video>
    `}}
  />
));

const LoadingScreen = ({ onComplete }) => {
  const [dotCount, setDotCount] = useState(0);
  const [isDarkening, setIsDarkening] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Animated loading dots
  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDotCount(c => (c + 1) % 4);
    }, 400);
    return () => clearInterval(dotInterval);
  }, []);

  // 8-second loading timer
  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      if (progress >= 100) {
        clearInterval(interval);
        setIsDarkening(true);
        setTimeout(() => {
          setIsFadingOut(true);
        }, 200);
        setTimeout(() => {
          onComplete();
        }, 800);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  const loadingDots = '.'.repeat(dotCount);

  return (
    <div
      role="status"
      aria-label="Loading site"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        overflow: 'hidden',
        backgroundColor: '#1A1A1A',
        opacity: isFadingOut ? 0 : 1,
        transition: 'opacity 0.6s ease-out',
        pointerEvents: isFadingOut ? 'none' : 'auto',
      }}
    >
      {/* Uninterruptible, raw HTML5 video element */}
      <StaticVideo />

      {/* Vignette overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(26,26,26,0.5) 80%, rgba(26,26,26,0.85) 100%)',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      />

      {/* Darkening pulse overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(26,26,26,0.6)',
          opacity: isDarkening ? 1 : 0,
          transition: 'opacity 0.2s ease-in',
          pointerEvents: 'none',
          zIndex: 4,
        }}
      />

      {/* Loading text + bar overlaid on lower third of the video */}
      <div
        style={{
          position: 'absolute',
          bottom: '12%',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        <div
          style={{
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            background: 'rgba(0,0,0,0.15)',
            padding: '12px 24px',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              fontFamily: "'Press Start 2P', monospace",
              color: '#F1EAD6',
              fontSize: '16px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              textShadow: '0 2px 8px rgba(0,0,0,0.7)',
              whiteSpace: 'nowrap',
            }}
          >
            LOADING<span style={{ display: 'inline-block', width: '36px', textAlign: 'left' }}>{loadingDots}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
