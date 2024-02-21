import './generators.css'

import React from 'react'
import { createRoot } from 'react-dom/client'

import {
  getBackgroundValue,
  setBackgroundValue,
  getParticlesValue,
  setParticlesValue,
  getImageValue,
  setImageValue,
  getConfig,
  setConfig
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

const props = {
  backgroundValue: getBackgroundValue(),
  particlesValue: getParticlesValue()
}

const actions = {
  setBackgroundValue,
  setParticlesValue,
  setImageValue,
  initSketch
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reactComponentRoot')
  const config = generators[container.dataset.generator]

  props.config = config
  setConfig(config)

  const root = createRoot(container)
  root.render(<GeneratorContainer {...props} {...actions} />)
})
