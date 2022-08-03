import React from "react"
import ClassNames from "classnames"
import { SplitPanel, PanelDescription } from "../../index"
import Computer from "../../../../images/technology.svg"

export const SummaryPanel = ({ className }) => {
  const name = ClassNames("summary-panel", className)
  const title =
    "I'm a Full-Stack Developer with a targeted interest in responsive, fluid, and motion UX."
  const desc =
    "I love turning whats old and busted into something that is shiney and new, or churning out an exact responsive replica of a mockup I've been given. I also enjoy taking a blank slate and allowing styles and design to spring forth naturally from a few key requirements. Most of all, however, I enjoy making experiances that are fun and easy to use."
  const description = (
    <PanelDescription
      className="summary-description"
      title={title}
      description={desc}
      leftOffset
    />
  )

  const image = <img src={Computer} />
  return (
    <SplitPanel
      className={name}
      leftContent={description}
      rightContent={image}
    />
  )
}
