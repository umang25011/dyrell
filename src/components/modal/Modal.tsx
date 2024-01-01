import { useState } from "react"
import "./modalStyle.css"

export default function Modal(props: { content: string }) {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="modal-container">
      <div id="modal-body" style={{ opacity: props.content ? 1 : 0 }}>
        <div id="modal-content" className={props.content ? "show" : ""}></div>
        <div id="modal-background"></div>
        <div id="modal-text">{props.content}</div>
      </div>
    </div>
  )
}
