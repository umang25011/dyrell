import React, { useEffect, useRef, useState } from "react"
import "./App.css"

function App() {
  const startButtonRef = useRef<HTMLAnchorElement>(null)
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    const intervalId = !pageLoaded
      ? setInterval(() => {
          if (!pageLoaded) {
            if (window.WEB_APP_READY) {
              if (intervalId) clearInterval(intervalId)
              setPageLoaded(true)
            }
          }
        }, 100)
      : null

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  })

  useEffect(() => {
    if (pageLoaded) {
      console.log("Boom")
    }
  }, [pageLoaded])
  return (
    <div>
      <div id="container">
        <div id="prompt">
          <img src="res/loading/earth.jpg" width="60%" />
          <h3>Buckle Up for a Thrilling Space Adventure Through My Portfolio!</h3>
          <a ref={startButtonRef} id="control" href="#" className="progress">
            Ready?
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
