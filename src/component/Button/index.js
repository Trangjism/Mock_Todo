import React, { Component } from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'

export default class Button extends Component {
    handleButtonClick = () => {
        this.props.onClick()
    }
  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick} className={clsx(styles.button, {
            [styles.addButton]: this.props.addButton
        }, {[styles.deleteButton]: this.props.deleteButton}
        )}>{this.props.children}</button>
      </div>
    )
  }
}
