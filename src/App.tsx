import React from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <div>
      <div id="container">
        <div id="prompt">
          <img src="res/loading/splash.png" width="60%" />
          <h3>PALE DOTS</h3>
          <p>A mesmerizing journey around the solar system</p>
          <p className="small">This splash screen comes from screenshots of the project</p>
          <a id="control" href="#" className="progress">
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
