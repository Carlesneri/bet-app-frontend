import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons"
import "./UpArrow.css"

export default function UpArrow() {
  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className="up-arrow" onClick={handleClick}>
      <FontAwesomeIcon icon={faAngleDoubleUp} />
    </div>
  )
}

