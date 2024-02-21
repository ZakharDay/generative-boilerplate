import p5 from 'p5'

import {
  getBackgroundValue,
  setBackgroundValue,
  getParticlesValue,
  setParticlesValue,
  getConfig,
  setConfig
} from './store.js'

import {
  getRandomArbitrary,
  sample,
  shuffle,
  generateHash
} from './utilities.js'

const canvasSize = 600
let config = {}
let canvasContainerId = ''

function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(canvasSize, canvasSize)
    canvas.parent(canvasContainerId)
    p.frameRate(60)
    // p.noFill()
    // p.fill(141)
  }

  p.draw = () => {
    const backgroundValue = getBackgroundValue()
    const particlesValue = getParticlesValue()

    if (config.modules.includes('PlainColorBackground')) {
      p.background(parseInt(backgroundValue))
    } else {
      p.background(0)
    }

    if (config.modules.includes('Particles')) {
      for (let index = 0; index < particlesValue.sliderValue; index++) {
        p.fill(particlesValue.particles[index][0])

        p.ellipse(
          particlesValue.particles[index][1],
          particlesValue.particles[index][2],
          particlesValue.particles[index][3]
        )
      }
    }
  }
}

function initSketch(id) {
  canvasContainerId = id
  config = getConfig()
  new p5(sketch)
}

export { initSketch }
