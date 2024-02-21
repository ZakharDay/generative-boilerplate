import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class PlainColorBackground extends Component {
  constructor(props) {
    super(props)
  }

  handleInput = (e) => {
    this.props.setSliderValue(e.target.value)
  }

  render() {
    return (
      <div className="PlainColorBackground">
        <input type="range" min="0" max="255" onInput={this.handleInput} />
      </div>
    )
  }
}
