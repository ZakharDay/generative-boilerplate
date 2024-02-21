import {
  getRandomArbitrary,
  sample,
  shuffle,
  generateHash,
  importAll
} from './utilities.js'

let backgroundValue = 0

let particlesValue = {
  sliderValue: 0,
  particles: []
}

const images = importAll(
  require.context('../images', false, /\.(png|jpe?g|svg)$/)
)

let imageValue = {
  images: images,
  current: sample(Object.keys(images))
}

let config = {}

function getBackgroundValue() {
  return backgroundValue
}

function setBackgroundValue(nextValue) {
  backgroundValue = nextValue
}

function getParticlesValue() {
  return particlesValue
}

function setParticlesValue(nextValue) {
  const particles = []

  for (let index = 0; index < nextValue; index++) {
    particles.push([
      getRandomArbitrary(0, 255),
      getRandomArbitrary(0, 600),
      getRandomArbitrary(0, 600),
      getRandomArbitrary(2, 20)
    ])
  }

  particlesValue.sliderValue = nextValue
  particlesValue.particles = particles
}

function getImageValue() {
  return imageValue
}

function setImageValue() {
  imageValue.current = sample(Object.keys(images))
}

function getConfig() {
  return config
}

function setConfig(nextConfig) {
  config = nextConfig
}

export {
  getBackgroundValue,
  setBackgroundValue,
  getParticlesValue,
  setParticlesValue,
  getImageValue,
  setImageValue,
  getConfig,
  setConfig
}
