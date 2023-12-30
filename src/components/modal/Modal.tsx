import { useState } from "react"
import "./modalStyle.css"

export default function Modal() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="modal-container">
      <div id="modal-body">
        <div id="modal-content" className="show"></div>
        <div id="modal-background"></div>
        <div id="modal-text">Hello</div>
      </div>
    </div>
  )
}
