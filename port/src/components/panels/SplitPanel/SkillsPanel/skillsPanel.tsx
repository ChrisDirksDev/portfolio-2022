import React from "react"
import ClassNames from "classnames"
import { SplitPanel, PanelDescription } from "../../index"
import reactIcon from "../../../../images/React-icon.svg"
import { motion } from 'framer-motion'

export const SkillsPanel = ({ className }) => {
  const name = ClassNames("skills-panel", className)
  const description = (
    <PanelDescription
      className="skills-description color-primary"
      title="I tend to work with anything JavaScript but I do have my favorites."
      description="For Programming languages I work with: JavaScript, TypeScript, Java, HTML5, CSS3, SASS, and C#. Libraries: React, Angular, JQuery. Frameworks: MaterialUI, Redux, React Router, Styled Componenets. Automation/Testing: Chai, Enzyme, Jest, and Cypress."
      leftOffset
    />
  )
  const image = <motion.img animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 10, ease: "linear" }} src={reactIcon} />

  return (
    <SplitPanel
      className={name}
      rightContent={description}
      leftContent={image}
    />
  )
}
