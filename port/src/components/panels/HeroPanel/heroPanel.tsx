import React from "react"
import { Panel } from "../index"
import Bird from "../../../images/herobird"
import ClassNames from "classnames"
import "./heroPanel.scss"

import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1 },
  show: {
    transition: {
      delayChildren: 1.5,
      staggerChildren: 1.5
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 }
}

export const HeroPanel = ({ className }) => {
  const name = ClassNames("hero-panel", className)
  return (
    <Panel className={name}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="noselect hero-text-container">
        <motion.h1 variants={item}>Hi</motion.h1>
        <motion.h1 variants={item}>I'm Chris</motion.h1>
      </motion.div>
      <div className="hero-image">
        <Bird />
      </div>
    </Panel>
  )
}
