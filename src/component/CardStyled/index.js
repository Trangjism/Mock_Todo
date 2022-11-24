import React, { Component } from 'react'
import './CardStyled.css'

export default class CardStyled extends Component {    
  render() {
    return (
      <div className='card'>{this.props.children}</div>
    )
  }
}
