import React, { Component } from 'react'
import Button from '../Button'
import './TaskList.css'

export default class TaskList extends Component {
 
  handleDeleteItem = () => {
    this.props.OnDeleteItem(this.props.id)
  }
  render() {
    return (
        <div>           
            <div className='task-list'>
                <p>{this.props.id + 1}</p>
                <p>{this.props.value.taskName}</p>
                <p>{this.props.value.deadline}</p>
                <p>{this.props.value.priority}</p>
                <Button deleteButton onClick={this.handleDeleteItem}>Delete</Button>
            </div>
            <hr></hr>
        </div>
    )
  }
}
