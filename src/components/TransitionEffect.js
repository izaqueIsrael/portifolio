import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TransitionEffect = () => {
  const [firstAnimationComplete, setFirstAnimationComplete] = useState(false);
  const [secondAnimationComplete, setSecondAnimationComplete] = useState(false);
  const [thirdAnimationComplete, setThirdAnimationComplete] = useState(false);
  const location = useLocation();

  const handleFirstAnimationComplete = () => {
    setFirstAnimationComplete(true);
  };
  const handleSecondAnimationComplete = () => {
    setSecondAnimationComplete(true);
  };
  const handleThirdAnimationComplete = () => {
    setThirdAnimationComplete(true);
  };

  useEffect(() => {
    setFirstAnimationComplete(false);
    setSecondAnimationComplete(false);
    setThirdAnimationComplete(false);
  }, [location.pathname]);

  return (
    <>
      {!firstAnimationComplete && (
        <motion.div
          className='transition__first'
          initial={{ x: '0%', opacity: 1 }}
          animate={{ x: '-100%', opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
            delay: 0.6,
            // repeat: 1,
            // repeatType: 'reverse',
            // repeatDelay: 0.2,
            onComplete: handleFirstAnimationComplete,
            exit: { opacity: 0, transition: { duration: 0.2 } },
          }}
        />
      )}

      {!secondAnimationComplete && (
        <motion.div
          className='transition__second'
          initial={{ x: '0%', opacity: 1 }}
          animate={{ x: '-100%', opacity: 1 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delay: 0.6,
            // repeat: 1,
            // repeatType: 'reverse',
            // repeatDelay: 0.2,
            onComplete: handleSecondAnimationComplete,
            exit: { opacity: 0, transition: { duration: 0.2 } },
          }}
        />
      )}

      {!thirdAnimationComplete && (
        <motion.div
          className='transition__third'
          initial={{ x: '0%', opacity: 1 }}
          animate={{ x: '-100%', opacity: 1 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delay: 0.8,
            // repeat: 1,
            // repeatType: 'reverse',
            // repeatDelay: 0.2,
            onComplete: handleThirdAnimationComplete,
            exit: { opacity: 0, transition: { duration: 0.2 } },
          }}
        />
      )}
    </>
  );
};

export default TransitionEffect;
