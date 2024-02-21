let sliderValue = 0

function getSliderValue() {
  return sliderValue
}

function setSliderValue(nextValue) {
  sliderValue = nextValue
  console.log('setSliderValue', sliderValue)
}

export { getSliderValue, setSliderValue }
