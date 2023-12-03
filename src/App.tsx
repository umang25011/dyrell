import React, { useEffect, useRef } from "react"
import "./App.css"

function App() {
  const startButtonRef = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      startButtonRef.current?.click()
    }, 500)

    return () => clearTimeout(timeoutId)
  })
  return (
    <div>
      <div id="container">
        <div id="prompt">
          <img src="res/loading/earth.jpg" width="60%" />
          <h3>Buckle Up for a Thrilling Space Adventure Through My Portfolio!</h3>
          <a ref={startButtonRef} id="control" href="#" className="progress">
            Start
          </a>
        </div>
      </div>
      <div>
        <audio id="promptSound" src="res/prompt/ding.wav" />
      </div>
    </div>
  )
}

export default App
