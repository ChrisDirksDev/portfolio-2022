import React from "react"
import "./footer.scss"

export const Footer = () => {
  return (
    <div className="footer inverted">
      <div className="svg-container"></div>
      <div className="footer-content">
        <span>Copyright © {new Date().getFullYear()} Chris Dirks </span>
      </div>
    </div>
  )
}
