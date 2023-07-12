import React, { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, useInView, spring } from 'framer-motion';

const AnimatedNumbers = ({ value }) => {
  const numRef = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(numRef, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (numRef.current && latest.toFixed(0) <= value) {
        numRef.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value]);

  return <span ref={numRef}></span>
}

export default AnimatedNumbers