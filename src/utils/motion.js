

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const animateWithDelay = (duration, delay = 0) => ({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay },
});

export const animateRotation = (duration, delay = 0, from = -20, to = 5) => ({
  initial: { opacity: 0, rotate: from },
  animate: { opacity: 1, rotate: to },
  transition: { duration, delay },
});
export const textVariants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      ease: 'easeIn',
      duration: 1.5,
    },
  },
};
export const dropDown = {
  hidden: { y: -100 },
  show: {
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 1.5,
    },
  },
};
export const goUp = {
  hidden: { y: 100, opacity:0},
  show: {
    opacity:1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 1.5,
    },
  },
};
export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type ,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});
export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
};
