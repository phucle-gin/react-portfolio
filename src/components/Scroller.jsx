import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Scroller = () => {
  const ballRef = useRef(null);
  const yRef = useRef(0);

  useEffect(() => {
    const ballElement = ballRef.current;

    const animateBall = () => {
      yRef.current = yRef.current === 0 ? 8 : 0;
      ballElement.style.transform = `translateY(${yRef.current}px)`;
    };
    const animationId = setInterval(animateBall, 2000);
    return () => {
      clearInterval(animationId);
    };
  }, []);

  return (
    <div id="scroller" className="app__scroller-container">
      <a href="#about">
        <div className="app__scroller">
          <motion.div
            ref={ballRef}
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
            }}
            className="app__scroller-ball"
          />
        </div>
      </a>
    </div>
  );
};

export default Scroller;
