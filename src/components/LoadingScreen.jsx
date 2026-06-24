import React, { useState, useEffect } from 'react';
import loadingVideo from '@/assets/video/Loading_video.mp4';

// Memoized component ensures the video HTML is injected exactly once and NEVER re-renders.
// This prevents the flashing effect while guaranteeing React doesn't strip the raw HTML5 autoplay/muted attributes.
const StaticVideo = React.memo(() => (
  <div
    style={{
      width: '90%',
      maxWidth: '640px', // Roughly 30-40% of typical desktop viewport area
      aspectRatio: '16/9',
      zIndex: 10,
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 30px 60px -15px rgba(0,0,0,0.9), 0 0 40px rgba(184, 94, 28, 0.2)', // Subtle warm glow and deep shadow
      border: '1px solid rgba(241, 234, 214, 0.15)', // Subtle parchment-tinted border
    }}
    dangerouslySetInnerHTML={{
      __html: `
      <video 
        src="${loadingVideo}" 
        autoplay 
        muted 
        loop 
        playsinline 
        preload="auto"
        oncanplay="this.playbackRate = 2.0"
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
        width: '100%',
        height: '100vh',
        zIndex: 9999,
        overflow: 'hidden',
        // Immersive Wild West Background
        backgroundColor: '#120A05',
        backgroundImage: 'radial-gradient(circle at center, rgba(139, 69, 19, 0.25) 0%, rgba(42, 16, 4, 0.85) 65%, #0a0401 100%)',
        opacity: isFadingOut ? 0 : 1,
        transition: 'opacity 0.6s ease-out',
        pointerEvents: isFadingOut ? 'none' : 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px', // Spacing between video and loading indicator
      }}
    >
      {/* Film grain texture overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.15,
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
          zIndex: 1,
          backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\\\'http://www.w3.org/2000/svg\\\' width=\\\'200\\\' height=\\\'200\\\'><filter id=\\\'n\\\'><feTurbulence type=\\\'fractalNoise\\\' baseFrequency=\\\'0.9\\\' numOctaves=\\\'3\\\' stitchTiles=\\\'stitch\\\'/></filter><rect width=\\\'100%\\\' height=\\\'100%\\\' filter=\\\'url(%23n)\\\'/></svg>")'
        }}
      />

      {/* Uninterruptible, raw HTML5 video element */}
      <StaticVideo />

      {/* Loading text below the video */}
      <div
        style={{
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            background: 'rgba(20, 10, 5, 0.5)',
            border: '1px solid rgba(241, 234, 214, 0.1)',
            padding: '16px 32px',
            borderRadius: '8px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.6), inset 0 0 20px rgba(0,0,0,0.4)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              fontFamily: "'Press Start 2P', monospace",
              color: '#F1EAD6',
              fontSize: '14px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 12px rgba(229, 27, 36, 0.3)',
              whiteSpace: 'nowrap',
            }}
          >
            LOADING<span style={{ display: 'inline-block', width: '32px', textAlign: 'left' }}>{loadingDots}</span>
          </div>
        </div>
      </div>

      {/* Darkening pulse overlay (triggers at the very end of the loading sequence) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#0a0401',
          opacity: isDarkening ? 1 : 0,
          transition: 'opacity 0.2s ease-in',
          pointerEvents: 'none',
          zIndex: 20,
        }}
      />
    </div>
  );
};

export default LoadingScreen;
