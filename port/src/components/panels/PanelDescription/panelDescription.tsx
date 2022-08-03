import React from "react"
import ClassName from "classnames"
import "./panelDescription.scss"

interface descriptionProps {
  children?: React.ReactNode
  className?: string
  title: string
  description: string
  leftOffset?: boolean
  rightOffset?: boolean
}

export const PanelDescription = (props: descriptionProps) => {
  const name = ClassName("panel-description", props.className)
  const descriptionName = ClassName("description", {
    offsetLeft: props.leftOffset,
    offsetRight: props.rightOffset,
  })
  return (
    <div className={name}>
      <h1 className="title">{props.title}</h1>
      <div className={descriptionName}>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
