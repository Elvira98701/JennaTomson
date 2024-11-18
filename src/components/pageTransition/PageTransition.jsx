import { motion } from "framer-motion";

import "./pageTransition.scss";

const PageTransition = () => (
  <>
    <motion.div
      className="slide-in"
      initial={{ y: 0 }}
      animate={{ y: "100%" }}
      exit={{ y: "100%" }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
    />
    <motion.div
      className="slide-out"
      initial={{ y: 0 }}
      animate={{ y: "100%" }}
      exit={{ y: "100%" }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.1, 1] }}
    />
  </>
);

export default PageTransition;
