import React, { useEffect, useRef, useState } from "react"
import "./App.css"

function App() {
  const startButtonRef = useRef<HTMLAnchorElement>(null)
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      startButtonRef.current?.click()
    }, 500)

    const intervalId = !pageLoaded
      ? setInterval(() => {
          if (!pageLoaded) {
            const canvasElement = document.getElementsByTagName("canvas")
            if (canvasElement.length > 0) {
              if (intervalId) clearInterval(intervalId)
              setPageLoaded(true)
            }
          }
        }, 100)
      : null

    return () => {
      clearTimeout(timeoutId)
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
