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
    params: { Camera: keyof typeof SolarObjects; onChange: (planet: keyof typeof SolarObjects) => void }
    CelestialBody: any
    THREE: any
  }
}

export const SolarObjects = {
  Galaxy: { name: "Galaxy" },
  Sun: { name: "Sun" },
  Comet: { name: "Comet" },
  Ship: { name: "Ship" },
  Mercury: { name: "Mercury" },
  Venus: { name: "Venus" },
  Earth: { name: "Earth" },
  Mars: { name: "Mars" },
  Jupiter: { name: "Jupiter" },
  Saturn: { name: "Saturn" },
  Uranus: { name: "Uranus" },
  Neptune: { name: "Neptune" },
  Pluto: { name: "Pluto" },
}

export const celestialBodies = {
  Sun: new window.CelestialBody({
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
  }),
  Mercury: new window.CelestialBody({
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
  }),
  Venus: new window.CelestialBody({
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
  }),
  Earth: new window.CelestialBody({
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
  }),
  Comet: new window.CelestialBody({
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
  }),
  Ship: new window.CelestialBody({
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
  }),
  Astronaut: new window.CelestialBody({
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
  }),
  Moon: new window.CelestialBody({
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
  }),
  Mars: new window.CelestialBody({
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
  }),
  Phobos: new window.CelestialBody({
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
  }),
  Deimos: new window.CelestialBody({
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
  }),
  Jupiter: new window.CelestialBody({
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
  }),
  Callisto: new window.CelestialBody({
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
  }),
  Europa: new window.CelestialBody({
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
  }),
  Io: new window.CelestialBody({
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
  }),
  Saturn: new window.CelestialBody({
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
  }),
  Dione: new window.CelestialBody({
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
  }),
  Titan: new window.CelestialBody({
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
  }),
  Uranus: new window.CelestialBody({
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
  }),
  Neptune: new window.CelestialBody({
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
  }),
  Pluto: new window.CelestialBody({
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
  }),
}

export {}
