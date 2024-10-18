import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

const MetricCounter = ({ from, to }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: 1.2,
        onUpdate(value) {
          ref.current.textContent = value.toFixed();
        },
      });
      return () => controls.stop();
    }
  }, [from, to, isInView]);

  return <span ref={ref} />;
};

export default MetricCounter;
