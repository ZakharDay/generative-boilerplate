import './generators.css'

import React from 'react'
import { createRoot } from 'react-dom/client'

import { getSliderValue, setSliderValue } from './javascript/store.js'
import { initSketch } from './javascript/sketch.js'

import GeneratorContainer from './javascript/GeneratorContainer.jsx'

const props = {
  sliderValue: getSliderValue()
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
