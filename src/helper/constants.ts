declare global {
  interface Window {
    /**
     * It'll be true when solar system is loaded
     */
    WEB_APP_READY: boolean
    /**
     * Current Select Body
     */
    curBody: string
    /**
     * Set this to next body
     */
    nextBody: string
    initTween: Function
    cameraCopy: Function
    animate: Function
    switchCamera: any
    trackCamera: any
    setTween: (curBody: string, nextBody: string) => void
    tween: any
    gui: any
    params: { Camera: keyof typeof CELESTIAL_BODIES; onChange: (planet: keyof typeof CELESTIAL_BODIES) => void }
    CelestialBody: any
    THREE: any
  }
}

export const SLEEP = (time: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}

export interface MainData {
  modalContent: string
}

export interface ICustomPlanetData {
  name: keyof typeof CELESTIAL_BODIES
  timeToWait: number
  modalContent: string
  funFact: string
}

export const CustomPlanetData: ICustomPlanetData[] = [
  { name: "Sun", timeToWait: 30000, modalContent: "Sun", funFact: "No" },
  { name: "Mercury", timeToWait: 30000, modalContent: "Mercury", funFact: "No" },
  { name: "Venus", timeToWait: 30000, modalContent: "Venus", funFact: "No" },
  { name: "Earth", timeToWait: 30000, modalContent: "Earth", funFact: "No" },
  { name: "Moon", timeToWait: 30000, modalContent: "Moon", funFact: "No" },
  { name: "Mars", timeToWait: 30000, modalContent: "Mars", funFact: "No" },
  { name: "Jupiter", timeToWait: 30000, modalContent: "Jupiter", funFact: "No" },
  { name: "Saturn", timeToWait: 30000, modalContent: "Saturn", funFact: "No" },
  { name: "Uranus", timeToWait: 30000, modalContent: "Uranus", funFact: "No" },
  { name: "Neptune", timeToWait: 30000, modalContent: "Neptune", funFact: "No" },
  { name: "Pluto", timeToWait: 30000, modalContent: "Pluto", funFact: "No" },
]

export const CELESTIAL_BODIES = {
  Sun: {
    name: "Sun",
    star: true,
    parent: "Sun",
    radius: 200,
    shineColor: 0xffeeaa,
    orbit: {
      semiMajorAxis: 0,
    },
    rotation: {
      period: 2500,
      inclination: 0,
    },
    material: {
      type: "basic",
      diffuse: { map: "res/sol/diffuse.png" },
    },
    atmosphere: {
      cloud: {
        map: "res/sol/overlay.png",
        height: 1,
        speed: 1,
      },
    },
    halo: {
      color: new window.THREE.Vector3(1.0, 0.8, 0.4),
      radius: 500,
    },
  },
  Mercury: {
    name: "Mercury",
    radius: 3.8256,
    parent: "Sun",
    shineColor: 0x9999ff,
    orbit: {
      period: 1.204,
      semiMajorAxis: 387.1,
      eccentricity: 0.2056,
      inclination: 7.0049,
    },
    rotation: {
      period: 1407.509405,
      inclination: 28.55,
      meridianAngle: 0,
      offset: 0,
    },
    material: {
      type: "lambert",
      diffuse: { map: "res/mercury/diffuse.jpg" },
      bump: { map: "res/mercury/bump.jpg", height: 0 },
    },
  },
  Venus: {
    name: "Venus",
    radius: 9.488,
    parent: "Sun",
    shineColor: 0x9999ff,
    orbit: {
      period: 3.076,
      semiMajorAxis: 723.3,
      eccentricity: 0.0068,
      inclination: 3.3947,
    },
    rotation: {
      period: 5832.443616,
      inclination: 157.16,
      meridianAngle: 0,
      offset: 0,
    },
    material: {
      type: "lambert",
      diffuse: { map: "res/venus/diffuse.jpg" },
      bump: { map: "res/venus/bump.jpg", height: 0 },
    },
    atmosphere: {
      cloud: {
        map: "res/venus/clouds.jpg",
        height: 0.5,
        speed: 0.02,
      },
    },
  },
  Earth: {
    name: "Earth",
    radius: 10,
    parent: "Sun",
    shineColor: 0x6666ff,
    orbit: {
      period: 5,
      semiMajorAxis: 1000,
      eccentricity: 0.0167,
      inclination: 0.0001,
    },
    rotation: {
      period: 23.93447117,
      inclination: -23.4392911,
      meridianAngle: 280.147,
      offset: 0,
    },
    material: {
      type: "phong",
      diffuse: { map: "res/earth/diffuse.jpg" },
      specular: { map: "res/earth/spec.jpg", color: 0x243232, shininess: 25 },
      bump: { map: "res/earth/bump.jpg", height: 0.05 },
      night: { map: "res/earth/night.png" },
    },
    atmosphere: {
      cloud: {
        map: "res/earth/clouds.png",
        height: 0.1,
        speed: 0.02,
      },
      scattering: true,
      atmosphereColor: new window.THREE.Vector3(0.5, 0.7, 0.8),
      sunsetColor: new window.THREE.Vector3(0.8, 0.7, 0.6),
      atmosphereStrength: 1.5,
      sunsetStrength: 1.0,
    },
  },
  Comet: {
    name: "Comet",
    parent: "Sun",
    radius: 0,
    spherical: false,
    isComet: true,
    orbit: {
      period: 3.5,
      semiMajorAxis: 3000,
      eccentricity: 0.5,
      inclination: 10,
    },
  },
  Ship: {
    name: "Ship",
    parent: "Earth",
    radius: 0.2,
    spherical: false,
    obj: {
      path: "res/space/",
      objPath: "tiangong.obj",
      mtlPath: "tiangong.mtl",
      angle: -30,
      scale: 0.008,
    },
    orbit: {
      period: 1.0,
      semiMajorAxis: 15,
      inclination: 30,
    },
    rotation: {
      period: 100.0,
      inclination: 0,
    },
  },
  Astronaut: {
    name: "Astronaut",
    parent: "Earth",
    radius: 0.05,
    spherical: false,
    obj: {
      path: "res/space/",
      objPath: "man.obj",
      mtlPath: null,
      scale: 0.008,
      angle: 235,
      x: 0.04,
      y: 0.02,
      z: 0.01,
    },
    orbit: {
      period: 1.0,
      semiMajorAxis: 15,
      inclination: 30,
    },
    rotation: {
      period: 100.0,
      inclination: 0,
    },
  },
  Moon: {
    name: "Moon",
    radius: 2.7243,
    parent: "Earth",
    shineColor: 0xff9988,
    orbit: {
      period: 2.0749,
      semiMajorAxis: 25,
      eccentricity: 0.0549,
      inclination: 5.15,
    },
    rotation: {
      period: 655.2,
      inclination: 23.4608,
      meridianAngle: 0,
      offset: 0,
    },
    material: {
      type: "lambert",
      diffuse: { map: "res/moon/diffuse.jpg" },
      bump: { map: "res/moon/bump.jpg", height: 0.1 },
    },
  },
  Mars: {
    name: "Mars",
    radius: 5.3226,
    parent: "Sun",
    shineColor: 0xff9988,
    orbit: {
      period: 9.4095,
      semiMajorAxis: 1523.7,
      eccentricity: 0.0934,
      inclination: 1.8506,
    },
    rotation: {
      period: 24.622962156,
      inclination: 37.1135,
      meridianAngle: 0,
      offset: 0,
    },
    material: {
      type: "lambert",
      diffuse: { map: "res/mars/diffuse.jpg" },
      bump: { map: "res/mars/bump.jpg", height: 1 },
    },
    atmosphere: {
      scattering: true,
      atmosphereColor: new window.THREE.Vector3(0.9, 0.8, 0.6),
      sunsetColor: new window.THREE.Vector3(0.4, 0.5, 0.7),
      atmosphereStrength: 1.0,
      sunsetStrength: 0.9,
    },
  },
  Phobos: {
    name: "Phobos",
    radius: 1,
    parent: "Mars",
    shineColor: 0xff9988,
    orbit: {
      period: 1.5945,
      semiMajorAxis: 20,
      eccentricity: 0.0151,
      inclination: 1.082,
    },
    rotation: {
      period: 100,
      inclination: 37.1,
      meridianAngle: 0,
      offset: 0,
    },
    material: {
      type: "lambert",
      diffuse: { map: "res/phobos/diffuse.jpg" },
      bump: { map: "res/phobos/bump.jpg", height: 10 },
    },
  },
  Deimos: {
    name: "Deimos",
    radius: 0.5,
    parent: "Mars",
    shineColor: 0xff9988,
    orbit: {
      period: 6.3122,
      semiMajorAxis: 30,
      eccentricity: 0.00033,
      inclination: 1.791,
    },
    rotation: {
      period: 150,
      inclination: 36.48,
      meridianAngle: 0,
      offset: 0,
    },
    material: {
      type: "lambert",
      diffuse: { map: "res/deimos/diffuse.jpg" },
      bump: { map: "res/deimos/bump.jpg", height: 10 },
    },
  },
  Jupiter: {
    name: "Jupiter",
    radius: 112.09,
    parent: "Sun",
    shineColor: 0x9999ff,
    orbit: {
      period: 59.3,
      semiMajorAxis: 2000,
      eccentricity: 0.0484,
      inclination: 1.3053,
    },
    rotation: {
      period: 238.23,
      inclination: 2.22,
      meridianAngle: 0,
      offset: 0,
    },
    material: {
      type: "lambert",
      diffuse: { map: "res/jupiter/diffuse.jpg" },
    },
    atmosphere: {
      cloud: {
        map: "res/jupiter/clouds.png",
        height: 0.3,
        speed: 0.02,
      },
      scattering: true,
      atmosphereColor: new window.THREE.Vector3(1.0, 0.8, 0.7),
      sunsetColor: new window.THREE.Vector3(0.7, 0.7, 0.8),
      atmosphereStrength: 1.8,
      sunsetStrength: 0.6,
    },
  },
  Callisto: {
    name: "Callisto",
    radius: 4.0,
    parent: "Jupiter",
    shineColor: 0xff9988,
    orbit: {
      period: 2.49,
      semiMajorAxis: 200,
      eccentricity: 0.0045045,
      inclination: 0.384285,
    },
    rotation: {
      period: 100,
      inclination: 25.51,
      meridianAngle: 0,
      offset: 0,
    },
    material: {
      type: "lambert",
      diffuse: { map: "res/callisto/diffuse.jpg" },
    },
  },
  Europa: {
    name: "Europa",
    radius: 3.0,
    parent: "Jupiter",
    shineColor: 0xff9988,
    orbit: {
      period: 17.76,
      semiMajorAxis: 160,
      eccentricity: 0.0101,
      inclination: 0.47,
    },
    rotation: {
      period: 150,
      inclination: 25.49,
      meridianAngle: 0,
      offset: 0,
    },
    material: {
      type: "lambert",
      diffuse: { map: "res/europa/diffuse.jpg" },
    },
  },
  Io: {
    name: "Io",
    radius: 3.0,
    parent: "Jupiter",
    shineColor: 0xff9988,
    orbit: {
      period: 8.85,
      semiMajorAxis: 100,
      eccentricity: 0.0041,
      inclination: 0.04,
    },
    rotation: {
      period: 100,
      inclination: 25.5,
      meridianAngle: 0,
      offset: 0,
    },
    material: {
      type: "lambert",
      diffuse: { map: "res/io/diffuse.png" },
    },
  },
  Saturn: {
    name: "Saturn",
    radius: 94.49,
    parent: "Sun",
    shineColor: 0x9999ff,
    orbit: {
      period: 40.0,
      semiMajorAxis: 2500,
      eccentricity: 0.0542,
      inclination: 2.4845,
    },
    rotation: {
      period: 255.75,
      inclination: 28.052,
      meridianAngle: 0,
      offset: 0,
    },
    material: {
      type: "lambert",
      diffuse: { map: "res/saturn/diffuse.png" },
      bump: { map: "res/saturn/bump.png" },
    },
    atmosphere: {
      cloud: {
        map: "res/saturn/clouds.png",
        height: 0.5,
        speed: 0.05,
      },
      scattering: true,
      atmosphereColor: new window.THREE.Vector3(0.8, 0.7, 0.5),
      sunsetColor: new window.THREE.Vector3(0.7, 0.7, 0.8),
      atmosphereStrength: 1.5,
      sunsetStrength: 0.8,
    },
    ring: {
      map: "res/saturn/ring.png",
      lower: 5,
      higher: 80,
    },
  },
  Dione: {
    name: "Dione",
    radius: 5.0,
    parent: "Saturn",
    shineColor: 0xff9988,
    orbit: {
      period: 3.0,
      semiMajorAxis: 200,
      eccentricity: 0.05,
      inclination: 0.0049,
    },
    rotation: {
      period: 130,
      inclination: 22.9,
      meridianAngle: 0,
      offset: 0,
    },
    material: {
      type: "lambert",
      diffuse: { map: "res/dione/diffuse.jpg" },
    },
  },
  Titan: {
    name: "Titan",
    radius: 6.0,
    parent: "Saturn",
    shineColor: 0xff9988,
    orbit: {
      period: 4.0,
      semiMajorAxis: 150,
      eccentricity: 0.05,
      inclination: 0.0049,
    },
    rotation: {
      period: 120,
      inclination: 1.53,
      meridianAngle: 0,
      offset: 0,
    },
    material: {
      type: "lambert",
      diffuse: { map: "res/titan/diffuse.jpg" },
    },
  },
  Uranus: {
    name: "Uranus",
    radius: 40.07,
    parent: "Sun",
    shineColor: 0x9999ff,
    orbit: {
      period: 420.069,
      semiMajorAxis: 3000,
      eccentricity: 0.0472,
      inclination: 0.7699,
    },
    rotation: {
      period: 413.76,
      inclination: 97.722,
      meridianAngle: 0,
      offset: 0,
    },
    material: {
      type: "lambert",
      diffuse: { map: "res/uranus/diffuse.jpg" },
    },
    ring: {
      map: "res/uranus/ring.png",
      lower: 10,
      higher: 20,
    },
    atmosphere: {
      scattering: true,
      atmosphereColor: new window.THREE.Vector3(0.5, 0.9, 0.7),
      sunsetColor: new window.THREE.Vector3(0.7, 0.9, 0.8),
      atmosphereStrength: 0.2,
      sunsetStrength: 0.7,
    },
  },
  Neptune: {
    name: "Neptune",
    radius: 38.83,
    parent: "Sun",
    shineColor: 0x9999ff,
    orbit: {
      period: 823.965,
      semiMajorAxis: 3500,
      eccentricity: 0.0097,
      inclination: 1.7692,
    },
    rotation: {
      period: 386.64,
      inclination: 28.03,
      meridianAngle: 0,
      offset: 0,
    },
    material: {
      type: "lambert",
      diffuse: { map: "res/neptune/diffuse.jpg" },
    },
    ring: {
      map: "res/neptune/ring.png",
      lower: 10,
      higher: 20,
    },
  },
  Pluto: {
    name: "Pluto",
    radius: 15,
    parent: "Sun",
    shineColor: 0x9999ff,
    orbit: {
      period: 32.0,
      semiMajorAxis: 4000,
      eccentricity: 0.2482,
      inclination: 17.1449,
    },
    rotation: {
      period: 153.292944,
      inclination: 115.6,
      meridianAngle: 0,
      offset: 0,
    },
    material: {
      type: "lambert",
      diffuse: { map: "res/pluto/diffuse.jpg" },
    },
  },
}

export {}
