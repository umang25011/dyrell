import { SolarObjects } from "./constants"

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
  // journeyThroughSpace()
  visitPlanet("Mars")
}

export const visitPlanet = (planet: keyof typeof SolarObjects) => {
  // Show information about the current planet
  console.log("Visiting " + planet)

  // Update the GUI dropdown to the selected planet
  window.gui.__controllers[0].setValue(planet)

  // Simulate the onChange event manually
  window.params.Camera = planet
  // window.params.onChange(planet)
}
