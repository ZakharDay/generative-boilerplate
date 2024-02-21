import p5 from 'p5'
import { getSliderValue, getConfig } from './store.js'

const canvasSize = 600
let config = {}
let canvasContainerId = ''

function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(canvasSize, canvasSize)
    canvas.parent(canvasContainerId)
    p.frameRate(60)
    p.noFill()
    // p.fill(141)
  }

  p.draw = () => {
    const sliderValue = getSliderValue()

    if (config.modules.includes('PlainColorBackground')) {
      p.background(parseInt(sliderValue))
    } else {
      p.background(0)
    }
  }
}

function initSketch(id) {
  canvasContainerId = id
  config = getConfig()
  new p5(sketch)
}

export { initSketch }
