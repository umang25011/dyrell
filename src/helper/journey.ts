import { CELESTIAL_BODIES, CustomPlanetData, MainData, SLEEP } from "./constants"

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
  for (let index = 0; index < CustomPlanetData.length; index++) {
    const element = CustomPlanetData[index]
    visitPlanet(element.name)

    // wait for users to read the content
    await SLEEP(element.timeToWait)
  }
}


export const visitPlanet = (planet: keyof typeof CELESTIAL_BODIES) => {
  // Show information about the current planet
  console.log("Visiting " + planet)

  // Update the GUI dropdown to the selected planet
  window.gui.__controllers[0].setValue(planet)

  // Simulate the onChange event manually
  window.params.Camera = planet
}
