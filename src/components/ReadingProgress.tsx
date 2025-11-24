import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setProgress(latest * 100);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
      style={{ scaleX: scrollYProgress }}
      initial={{ scaleX: 0 }}
    />
  );
};

export default ReadingProgress;
