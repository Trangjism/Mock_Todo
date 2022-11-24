import React, { Component } from 'react';
import './AddTaskForm.scss';
import RadioCheck from '../RadioCheck';
import Button from '../Button'



export default class AddTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      taskText:'',
      date: '',
      check:''
    }
  }
  handleInputChange = (e) => {
    this.setState({
      taskText: e.target.value
    }, () => {console.log(this.state.taskText)})
  }
  handleDateChange = (e) => {
    this.setState({
      date: e.target.value
    })
  }
  handleRadioChange = (newChecked) => {
    this.setState({
      check: newChecked
    })
  }
  handleTaskAdd = () => {
    this.props.onAddTask(this.state.taskText, this.state.date, this.state.check, this.state.erro )
  }
  render() {
    return (
      <div className='form'>        
        <div className='form-group' >
          <label htmlFor='name'>Task Name</label>
          <input id='name' type='text' onChange={this.handleInputChange}/>
          
        </div>
        <div className='form-group'>
          <label htmlFor='date'>Date</label>
          <input id='date' type='date' onChange={this.handleDateChange}/>
        </div>
        <p>Priority</p>
        <RadioCheck onClick={this.handleRadioChange} title='High'/>        
        <RadioCheck onClick={this.handleRadioChange} title='Medium'/>        
        <RadioCheck onClick={this.handleRadioChange} title='Low'/> 
        <Button addButton onClick={this.handleTaskAdd}>Add Task</Button>       
      </div>
    )
  }
}

