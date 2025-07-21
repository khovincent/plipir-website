// File: components/ui/meteors.tsx

"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface MeteorsProps {
  number?: number;
  className?: string;
}

const Meteors = ({ number = 20, className }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * (1400 - -400) + -400) + "px",
      animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <motion.span
          key={"meteor" + idx}
          style={style}
          className={clsx(
            "pointer-events-none absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            className
          )}
        ></motion.span>
      ))}
    </>
  );
};

export default Meteors;