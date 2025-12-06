import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate progress bar width based on scroll
      gsap.to(progressBarRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
          onUpdate: (self) => {
            setProgress(Math.round(self.progress * 100));
          }
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
        <div
          ref={progressBarRef}
          className="h-full bg-primary origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {/* Floating progress indicator */}
      <div
        ref={progressTextRef}
        className={`fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 text-xs font-medium transition-opacity duration-300 ${progress > 5 && progress < 95 ? "opacity-100" : "opacity-0"
          }`}
      >
        {progress}%
      </div>
    </>
  );
};

export default ReadingProgress;