import React from "react"
import ClassNames from "classnames"
import { SplitPanel, PanelDescription } from "../../index"
import RightArrow from "../../../../images/right-arrow.svg"

export const PortfolioPanel = ({ className }) => {
  const name = ClassNames("portfolio-panel", className)
  const description = (
    <PanelDescription
      className="portfolio-description"
      title="Interested in my work? Check out some of the things I've been involved with."
      description="Comming soon :)"
      leftOffset
    />
  )

  const image = <img src={RightArrow} />
  return (
    <SplitPanel
      className={name}
      leftContent={description}
      rightContent={image}
    />
  )
}
