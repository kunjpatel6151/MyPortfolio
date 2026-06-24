import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], defaultSection: string = "home") {
  const [activeSection, setActiveSection] = useState<string>(defaultSection);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is intersecting the most or the first one intersecting
        let visibleSection = "";
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              visibleSection = entry.target.id;
            }
          }
        });

        if (visibleSection) {
          setActiveSection(visibleSection);
        }
      },
      {
        rootMargin: "-100px 0px -40% 0px", // Accounts for navbar offset
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1], // Fine-grained tracking
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return { activeSection, setActiveSection };
}
