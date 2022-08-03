import React from "react"
import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};
const transition = {
  default: { duration: 3, ease: "easeInOut" },
  fill: { duration: 3, ease: [1, 0, 0.8, 1] }
};

const HeroBird = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="200"
      height="90"
      viewBox="0 0 200 90"
      className="bird-icon"
    >
      <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="a2IucPW2gk"
        d="M75.4 4.01c-4-1.73-19.05 28.02-19.08 32.29-.02 2.84 8.68 17.96 26.09 45.36l39.58.26C93.6 31.13 78.07 5.16 75.4 4.01z"
      ></motion.path>
      <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="a1SoHFmbdP"
        d="M39.47 57.72c-.13-1.03 4.13-6.76 12.78-17.19l9.96 18.01c-15.02.49-22.6.21-22.74-.82z"
      ></motion.path>
      <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="aZOxYHDNf"
        d="M160.35 40.13c-1.73-1.1-18.96 1.64-51.68 8.21l18.71 32.81c23.71-26.24 34.7-39.91 32.97-41.02z"
      ></motion.path>
    </motion.svg>
  )
}

export default HeroBird
