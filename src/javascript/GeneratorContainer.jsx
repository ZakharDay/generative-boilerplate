import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import PlainColorBackground from './modules/PlainColorBackground.jsx'
import Particles from './modules/Particles.jsx'

export default class GeneratorContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.initSketch('sketch')
  }

  renderModules() {
    const modules = []

    this.props.config.modules.forEach((moduleName, index) => {
      if (moduleName == 'PlainColorBackground') {
        modules.push(
          <PlainColorBackground
            sliderValue={this.props.backgroundValue}
            setBackgroundValue={this.props.setBackgroundValue}
            key={index}
          />
        )
      }

      if (moduleName == 'Particles') {
        modules.push(
          <Particles
            sliderValue={this.props.particlesValue.sliderValue}
            setParticlesValue={this.props.setParticlesValue}
            key={index}
          />
        )
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
