import React, { Component } from 'react'

export default class RadioCheck extends Component {
    handleRadioChange = () => {
        this.props.onClick(this.props.title)
    }
  render() {
    return (
      <div>        
        <label>
        <input
        type='radio'
        name='priority'
        onClick={this.handleRadioChange}
        checked={this.props.checked}/>
        {this.props.title}
        </label>
      </div>
    )
  }
}
