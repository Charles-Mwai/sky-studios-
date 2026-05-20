import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 15 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const transition = {
  type: "tween",
  ease: [0.16, 1, 0.3, 1], // Custom cinematic bezier curve
  duration: 0.8,
};

export const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={transition}
      className="flex-grow flex flex-col"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
