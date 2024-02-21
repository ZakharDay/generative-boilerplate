import './generators.css'

import React from 'react'
import { createRoot } from 'react-dom/client'

import {
  getSliderValue,
  setSliderValue,
  setConfig
} from './javascript/store.js'

import { initSketch } from './javascript/sketch.js'

import GeneratorContainer from './javascript/GeneratorContainer.jsx'

const config = {
  modules: ['PlainColorBackground']
}

setConfig(config)

const props = {
  sliderValue: getSliderValue(),
  config
}

const actions = {
  setSliderValue,
  initSketch
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reactComponentRoot')
  const root = createRoot(container)
  root.render(<GeneratorContainer {...props} {...actions} />)
})
