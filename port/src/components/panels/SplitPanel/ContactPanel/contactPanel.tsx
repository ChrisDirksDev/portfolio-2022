import React from "react"
import ClassNames from "classnames"
import { SplitPanel, PanelDescription } from "../../index"
import Cooperation from '../../../../images/cooperation.svg'

export const ContactPanel = ({ className }) => {
  const name = ClassNames("contact-panel", className)
  const description = (
    <PanelDescription
      className="contact-description color-primary"
      title="If your interested in contacting me, you can reach out on linkedin"
      description=""
      leftOffset
    />
  )
  const image = <img src={Cooperation} />
  return (
    <SplitPanel
      className={name}
      rightContent={description}
      leftContent={image}
    />
  )
}
