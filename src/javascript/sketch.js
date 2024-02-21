import p5 from 'p5'
import { getSliderValue } from './store.js'

const canvasSize = 600
let canvasContainerId = ''

function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(canvasSize, canvasSize)
    canvas.parent(canvasContainerId)
    p.frameRate(6)
    p.stroke(121, 255, 57)
    p.noFill()
    // p.fill(141)
  }

  p.draw = () => {
    const sliderValue = getSliderValue()
    p.background(0)
    p.fill(255)
    p.rect(sliderValue, sliderValue, 50, 50)
  }
}

function initSketch(id) {
  canvasContainerId = id
  new p5(sketch)
}

export { initSketch }
