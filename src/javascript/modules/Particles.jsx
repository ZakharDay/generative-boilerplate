import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Particles extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sliderValue: this.props.sliderValue
    }
  }

  handleInput = (e) => {
    this.props.setSliderValue(e.target.value)
    this.setState({ sliderValue: e.target.value })
  }

  render() {
    return (
      <div className="Particles">
        <input
          type="range"
          min="0"
          max="255"
          value={this.state.sliderValue}
          onInput={this.handleInput}
        />
      </div>
    )
  }
}
