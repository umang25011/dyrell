import React, { useEffect, useRef, useState } from "react"
import { startMain } from "./helper/journey"
import { MainData } from "./helper/constants"

function App() {
  const startButtonRef = useRef<HTMLAnchorElement>(null)
  const [pageLoaded, setPageLoaded] = useState(false)
  const [mainData, setMainData] = useState<MainData>({ modalContent: "" })

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
    let timeoutID: NodeJS.Timeout
    if (pageLoaded) {
      timeoutID = setTimeout(() => {
        startMain(setMainData)
      }, 3000)
    }
    return () => {
      if (timeoutID) clearTimeout(timeoutID)
    }
  }, [pageLoaded])
  return (
    <div>
      <div id="container">
        <div id="prompt">
          <img src="res/loading/earth.jpg" alt="Earth" width="60%" />
          <h3>Buckle Up for a Thrilling Space Adventure!</h3>
          <span ref={startButtonRef} id="control" className="progress">
            Ready?
          </span>
        </div>
      </div>
      <div>
        <audio id="promptSound" src="res/prompt/ding.wav" />
      </div>
    </div>
  )
}

export default App
