import p5 from 'p5'

import {
  getModuleList,
  getPlainColorBackgroundStore,
  getParticlesStore,
  getImageStore
} from './store.js'

import {
  getRandomArbitrary,
  sample,
  shuffle,
  generateHash
} from './utilities.js'

const canvasSize = 600
let moduleList = {}
let canvasContainerId = ''
let images = {}

function sketch(p) {
  p.preload = () => {
    if (moduleList.includes('Image')) {
      const imageFiles = getImageStore().images

      Object.keys(imageFiles).forEach((key) => {
        images = Object.assign({}, images, {
          [`${key}`]: p.loadImage(imageFiles[key])
        })
      })
    }
  }

  p.setup = () => {
    const canvas = p.createCanvas(canvasSize, canvasSize)
    canvas.parent(canvasContainerId)
    p.frameRate(60)
  }

  p.draw = () => {
    if (moduleList.includes('PlainColorBackground')) {
      const plainColorBackground = getPlainColorBackgroundStore()
      p.background(parseInt(plainColorBackground.sliderValue))
    } else {
      p.background(0)
    }

    if (moduleList.includes('Particles')) {
      const particles = getParticlesStore()

      for (let index = 0; index < particles.sliderValue; index++) {
        p.fill(particles.particles[index][0])

        p.ellipse(
          particles.particles[index][1],
          particles.particles[index][2],
          particles.particles[index][3]
        )
      }
    }

    if (moduleList.includes('Image')) {
      const { current } = getImageStore()
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
  moduleList = getModuleList()
  new p5(sketch)
}

export { initSketch }
