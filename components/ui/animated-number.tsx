// File: components/ui/animated-number.tsx

"use client";

import { useEffect, useState } from 'react';

// Fungsi easing untuk animasi yang lebih halus (optional, tapi direkomendasikan)
const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

const AnimatedNumber = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1500; // durasi animasi dalam milidetik

    const animationFrame = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }
      
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeOutQuint(progress);

      setDisplayValue(Math.floor(easedProgress * value));

      if (elapsedTime < duration) {
        requestAnimationFrame(animationFrame);
      } else {
        setDisplayValue(value); // Pastikan nilai akhir tepat
      }
    };

    requestAnimationFrame(animationFrame);
    
    // Cleanup function
    return () => {
      startTime = null;
    }
  }, [value]);

  return <>{displayValue}</>;
};

export default AnimatedNumber;