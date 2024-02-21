import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import PlainColorBackground from './modules/PlainColorBackground.jsx'

export default class GeneratorContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.initSketch('sketch')
  }

  renderModules() {
    if (this.props.config.modules.includes('PlainColorBackground')) {
      return <PlainColorBackground setSliderValue={this.props.setSliderValue} />
    }
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
