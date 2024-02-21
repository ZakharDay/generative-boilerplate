let sliderValue = 0
let config = {}

function getSliderValue() {
  return sliderValue
}

function setSliderValue(nextValue) {
  sliderValue = nextValue
  console.log('setSliderValue', sliderValue)
}

function getConfig() {
  return config
}

function setConfig(nextConfig) {
  config = nextConfig
}

export { getSliderValue, setSliderValue, getConfig, setConfig }
