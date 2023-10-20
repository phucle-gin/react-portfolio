import React, { memo  } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
const MotionWrap = (Component, className) => {
  const MemoizedComponent = memo(Component);
  const HOC = () => (
    
    <LazyMotion features={domAnimation}>
      <m.div
        className={`${className} app__flex`}
      >
        <MemoizedComponent />
      </m.div>
  </LazyMotion>
  );

  return HOC;
};

export default MotionWrap;