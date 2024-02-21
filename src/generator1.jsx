import './generators.css'

import React from 'react'
import { createRoot } from 'react-dom/client'

import {
  getBackgroundValue,
  setBackgroundValue,
  getParticlesValue,
  setParticlesValue,
  getConfig,
  setConfig
} from './javascript/store.js'

import { initSketch } from './javascript/sketch.js'
import GeneratorContainer from './javascript/GeneratorContainer.jsx'

const config = {
  modules: ['PlainColorBackground', 'Particles']
}

setConfig(config)

const props = {
  backgroundValue: getBackgroundValue(),
  particlesValue: getParticlesValue(),
  config
}

const actions = {
  setBackgroundValue,
  setParticlesValue,
  initSketch
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reactComponentRoot')
  const root = createRoot(container)
  root.render(<GeneratorContainer {...props} {...actions} />)
})
