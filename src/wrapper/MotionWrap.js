import React, { memo } from 'react';
import { motion } from 'framer-motion';

const MotionWrap = (Component, className) => {
  const MemoizedComponent = memo(Component);

  const HOC = () => (
    <motion.div
      initial={{opacity:0}}
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`${className} app__flex`}
    >
      <MemoizedComponent />
    </motion.div>
  );

  return HOC;
};

export default MotionWrap;