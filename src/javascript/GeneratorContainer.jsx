import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import PlainColorBackground from './modules/PlainColorBackground.jsx'
import Particles from './modules/Particles.jsx'
import Image from './modules/Image.jsx'

export default class GeneratorContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.initSketch('sketch')
  }

  renderModules() {
    const {
      moduleList,
      plainColorBackground,
      particles,
      image,
      setPlainColorBackgroundStore,
      setParticlesStore,
      setImageStore
    } = this.props

    const modules = []

    moduleList.forEach((moduleName, index) => {
      if (moduleName == 'PlainColorBackground') {
        modules.push(
          <PlainColorBackground
            sliderValue={plainColorBackground.sliderValue}
            setSliderValue={setPlainColorBackgroundStore}
            key={index}
          />
        )
      }

      if (moduleName == 'Particles') {
        modules.push(
          <Particles
            sliderValue={particles.sliderValue}
            setSliderValue={setParticlesStore}
            key={index}
          />
        )
      }

      if (moduleName == 'Image') {
        modules.push(<Image setImageValue={setImageStore} key={index} />)
      }
    })

    return modules
  }

  render() {
    return (
      <div className="GeneratorContainer">
        <div className="sketch" id="sketch"></div>
        {this.renderModules()}
      </div>
    )
  }
}
