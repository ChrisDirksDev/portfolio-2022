import React from "react"
import ClassName from "classnames"
import "./panel.scss"

interface panelProps {
  children: React.ReactNode
  className?: string
}

export const Panel = (props: panelProps) => {
  const name = ClassName("panel-full", props.className)
  return <div className={name}>{props.children}</div>
}
