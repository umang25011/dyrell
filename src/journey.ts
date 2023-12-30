import { CELESTIAL_BODIES, SLEEP } from "./constants"

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

export const startMain = () => {
  console.log("Journey Started-------------------")

  startTheJourney()
}

const startTheJourney = async () => {
  // objects will be visited in this order
  const FlowOfVisit: (keyof typeof CELESTIAL_BODIES)[] = ["Sun", "Mercury", "Venus", "Earth"]
  for (let index = 0; index < FlowOfVisit.length; index++) {
    const element = FlowOfVisit[index]
    visitPlanet(element)
    await SLEEP(CELESTIAL_BODIES[element].timeToWait)
  }
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
