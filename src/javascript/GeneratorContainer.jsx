import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class GeneratorContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.initSketch('sketch')
  }

  handleSliderInput = (e) => {
    this.props.setSliderValue(e.target.value)
  }

  render() {
    return (
      <div className="GeneratorContainer">
        <input
          type="range"
          min="0"
          max="600"
          onInput={this.handleSliderInput}
        />

        <div className="sketch" id="sketch"></div>
      </div>
    )
  }
}
