import React from "react"
import "./floatingHeader.scss"
import Bird from "../../images/smallbird"
import Linkedin from "../../images/linkedinIcon"
import Github from "../../images/githubIcon"
import Facebook from "../../images/facebookIcon"
import { motion } from "framer-motion"


export const FloatingHeader = () => {
  return (
    <div className="floating-header color-primary">
      <div>
        <a
          href="/">
          <motion.div whileHover={{
            scale: 2,
            rotate: 360,
            transition: { duration: 0.5 },
          }}>
            <Bird />
          </motion.div>
        </a>
      </div>
      <div className="socials">
        <motion.a
          whileHover={{
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.5 },
          }}
          href="https://www.linkedin.com/in/chris-dirks/">
          <Linkedin />
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.5 },
          }}
          href="https://github.com/ChrisDirksDev">
          <Github />
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.5 },
          }}
          href="https://www.facebook.com/chrisdirks89">
          <Facebook />
        </motion.a>
      </div>
    </div>
  )
}
