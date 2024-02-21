import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Image extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.setImageValue()
  }

  render() {
    return (
      <div className="Image">
        <div className="Button" onClick={this.handleClick}>
          Random
        </div>
      </div>
    )
  }
}
