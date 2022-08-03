import React from "react"
import ClassNames from "classnames"
import { Panel } from "../index"
import "./splitPanel.scss"
import Fade from "react-reveal/Fade"

interface splitPanelProps {
  className?: string
  leftContent?: React.ReactNode
  rightContent?: React.ReactNode
}

export const SplitPanel = (props: splitPanelProps) => {
  const name = ClassNames("split-panel", props.className)
  return (
    <Panel className={name}>
      <Fade bottom>
        <div className="left-side">{props.leftContent}</div>
        <div className="right-side">{props.rightContent}</div>
      </Fade>
    </Panel>
  )
}
