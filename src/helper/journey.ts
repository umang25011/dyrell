import { CELESTIAL_BODIES, MainData, SLEEP } from "./constants"

export const journeyThroughSpace = () => {
  window.nextBody = "Earth"
  window.initTween()
  window.cameraCopy(window.switchCamera, window.trackCamera[window.curBody])
  window.setTween(window.curBody, window.nextBody)
  window.tween.start()
  // @ts-ignore

  // @ts-ignore
  // window.gui.domElement.children[1].children[3].onchange('Ea')
}

export const startMain = (setMainData: React.Dispatch<React.SetStateAction<MainData>>) => {
  console.log("Journey Started-------------------")

  startTheJourney(setMainData)
}

const startTheJourney = async (setMainData: React.Dispatch<React.SetStateAction<MainData>>) => {
  // objects will be visited in this order
  const FlowOfVisit: (keyof typeof CELESTIAL_BODIES)[] = ["Sun", "Mercury", "Venus", "Earth"]
  for (let index = 0; index < FlowOfVisit.length; index++) {
    const element = FlowOfVisit[index]
    visitPlanet(element)

    // show the modal
    displayModal(CELESTIAL_BODIES[element].content, setMainData)

    // wait for users to read the content
    await SLEEP(CELESTIAL_BODIES[element].timeToWait)
    hideModal(setMainData)
  }
}

const displayModal = (content: string, setMainData: React.Dispatch<React.SetStateAction<MainData>>) => {
  setTimeout(
    () =>
      setMainData((value) => {
        value.modalContent = content
        return { ...value }
      }),
    3000
  )
}

const hideModal = (setMainData: React.Dispatch<React.SetStateAction<MainData>>) => {
  setMainData((value) => {
    value.modalContent = ""
    return { ...value }
  })
}

export const visitPlanet = (planet: keyof typeof CELESTIAL_BODIES) => {
  // Show information about the current planet
  console.log("Visiting " + planet)

  // Update the GUI dropdown to the selected planet
  window.gui.__controllers[0].setValue(planet)

  // Simulate the onChange event manually
  window.params.Camera = planet
  // window.params.onChange(planet)
}
