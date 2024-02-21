import {
  getRandomArbitrary,
  sample,
  shuffle,
  generateHash,
  importAll
} from './utilities.js'

import * as generator1 from '../generators/generator1.js'
import * as generator2 from '../generators/generator2.js'
import * as generator3 from '../generators/generator3.js'

const generators = {
  generator1,
  generator2,
  generator3
}

let moduleList,
  modulePlainColorBackgroundStore,
  moduleParticlesStore,
  moduleImageStore

function initStore(generatorName) {
  moduleList = generators[generatorName].modules

  moduleList.forEach((moduleName) => {
    if (moduleName == 'PlainColorBackground') {
      modulePlainColorBackgroundStore =
        generators[generatorName].preset['PlainColorBackground']
    }

    if (moduleName == 'Particles') {
      moduleParticlesStore = initParticles(
        generators[generatorName].preset['Particles']
      )
    }

    if (moduleName == 'Image') {
      // moduleImageStore = generators[generatorName].preset['Image']
      moduleImageStore = initImages()
    }
  })
}

function initParticles(preset) {
  return {
    sliderValue: preset.sliderValue,
    particles: generateParticles(preset.sliderValue)
  }
}

function generateParticles(quantity) {
  const particles = []

  for (let index = 0; index < quantity; index++) {
    particles.push([
      getRandomArbitrary(0, 255),
      getRandomArbitrary(0, 600),
      getRandomArbitrary(0, 600),
      getRandomArbitrary(2, 20)
    ])
  }

  return particles
}

function initImages() {
  const images = importAll(
    require.context('../images', false, /\.(png|jpe?g|svg)$/)
  )

  return {
    images: images,
    current: sample(Object.keys(images))
  }
}

function getModuleList() {
  return moduleList
}

function getPlainColorBackgroundStore() {
  return modulePlainColorBackgroundStore
}

function setPlainColorBackgroundStore(nextSliderValue) {
  modulePlainColorBackgroundStore.sliderValue = nextSliderValue
}

function getParticlesStore() {
  return moduleParticlesStore
}

function setParticlesStore(nextSliderValue) {
  moduleParticlesStore = {
    sliderValue: nextSliderValue,
    particles: generateParticles(nextSliderValue)
  }
}

function getImageStore() {
  return moduleImageStore
}

function setImageStore() {
  moduleImageStore.current = sample(Object.keys(moduleImageStore.images))
}

export {
  initStore,
  getModuleList,
  getPlainColorBackgroundStore,
  setPlainColorBackgroundStore,
  getParticlesStore,
  setParticlesStore,
  getImageStore,
  setImageStore
}
