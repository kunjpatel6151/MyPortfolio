export function smoothScrollTo(targetId: string, setImmediateActive?: (id: string) => void) {
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;

  if (setImmediateActive) {
    setImmediateActive(targetId);
  }

  const navbarOffset = 100; // Matches scroll-padding-top
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;

  // Dynamic duration based on distance: Min 800ms, Max 2000ms
  let duration = Math.abs(distance) * 0.5;
  if (duration < 800) duration = 800;
  if (duration > 2000) duration = 2000;

  let start: number | null = null;

  // Easing function: easeInOutQuart
  // Start -> Accelerate -> Cruise -> Decelerate -> Arrive
  const easeInOutQuart = (t: number) => {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  };

  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const progress = Math.min(timeElapsed / duration, 1);

    const ease = easeInOutQuart(progress);
    window.scrollTo({
      top: startPosition + distance * ease,
      behavior: "auto" // bypasses CSS scroll-behavior: smooth for exact frame control
    });

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
}
