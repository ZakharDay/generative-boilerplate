import './generators.css'

import React from 'react'
import { createRoot } from 'react-dom/client'

import {
  initStore,
  getModuleList,
  getPlainColorBackgroundStore,
  setPlainColorBackgroundStore,
  getParticlesStore,
  setParticlesStore,
  getImageStore,
  setImageStore
} from './javascript/store.js'

import { initSketch } from './javascript/sketch.js'
import GeneratorContainer from './javascript/GeneratorContainer.jsx'

import * as generator1 from './generators/generator1.js'
import * as generator2 from './generators/generator2.js'
import * as generator3 from './generators/generator3.js'

const generators = {
  generator1,
  generator2,
  generator3
}

const actions = {
  setPlainColorBackgroundStore,
  setParticlesStore,
  setImageStore,
  initSketch
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reactComponentRoot')
  const generatorName = container.dataset.generator
  const config = generators[generatorName]

  initStore(generatorName)

  const props = {
    moduleList: getModuleList()
  }

  config.modules.forEach((moduleName) => {
    if (moduleName == 'PlainColorBackground') {
      props.plainColorBackground = getPlainColorBackgroundStore()
    }

    if (moduleName == 'Particles') {
      props.particles = getParticlesStore()
    }

    if (moduleName == 'Image') {
      props.image = getImageStore()
    }
  })

  const root = createRoot(container)
  root.render(<GeneratorContainer {...props} {...actions} />)
})
