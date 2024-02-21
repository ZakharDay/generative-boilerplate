import p5 from 'p5'

import {
  getBackgroundValue,
  setBackgroundValue,
  getParticlesValue,
  setParticlesValue,
  getImageValue,
  setImageValue,
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
let images = {}

function sketch(p) {
  p.preload = () => {
    const imageFiles = getImageValue().images

    Object.keys(imageFiles).forEach((key) => {
      images = Object.assign({}, images, {
        [`${key}`]: p.loadImage(imageFiles[key])
      })
    })
  }

  p.setup = () => {
    const canvas = p.createCanvas(canvasSize, canvasSize)
    canvas.parent(canvasContainerId)
    p.frameRate(60)
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

    if (config.modules.includes('Image')) {
      const { current } = getImageValue()
      const image = images[current]

      p.image(
        image,
        (canvasSize - image.width / 2) / 2,
        (canvasSize - image.height / 2) / 2,
        image.width / 2,
        image.height / 2,
        0,
        0,
        image.width,
        image.height,
        p.CONTAIN
      )
    }
  }
}

function initSketch(id) {
  canvasContainerId = id
  config = getConfig()
  new p5(sketch)
}

export { initSketch }
