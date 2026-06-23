import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    // also observe direct children with .reveal so groups reveal too
    el.querySelectorAll<HTMLElement>(".reveal-child").forEach((c) => {
      c.classList.add("reveal");
      io.observe(c);
    });
    return () => io.disconnect();
  }, []);
  return ref;
}
