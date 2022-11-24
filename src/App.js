import React, { Component } from 'react';
import CardStyled from './component/CardStyled';
import AddTaskForm from './component/AddTaskForm';
import './App.css'
import TaskList from './component/TaskList';
import ModalBox from './component/ModalBox';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      erro: '',
      taskName: '',
      priority:'',
      deadline:'',
      taskList: []
    }
  }
  onAddTask = (newText, newDate, newChecked) => {
    if(newText.trim().length === 0) {
      this.setState({erro: 'Please Input Task Name'})
    }else if(+newDate === 0) {
      this.setState({erro: 'please Input Deadline'})
    }
    else {
      this.setState({      
        taskList:[
          ...this.state.taskList,
          {
            taskName: newText,
            deadline: newDate,
            priority: newChecked
          }
        ]
      }, () => {console.log(this.state.taskList)})
    }
  }
  onDeleteItem = (id) => {
    const newTaskList = this.state.taskList.filter((item, index) => {
      return index !== id
    })
    this.setState({taskList: newTaskList})
  }

  hideModalErro = () => {
    this.setState({erro: null})
  }
  
  render() {
    return (
      <div>
      {this.state.erro && <ModalBox erro={this.state.erro} hideModalErro = {this.hideModalErro}/>}
        <CardStyled>
          <h1>Todo</h1>
          <AddTaskForm onAddTask={this.onAddTask} showErr={this.showTaskNameErro} />
        </CardStyled>
        <CardStyled>
          {this.state.taskList.length === 0? <h1>No taskList</h1> : <h1>Task List</h1>}
          {this.state.taskList.map((item, index) => {
            return (
              <div key={index}>
                <TaskList id={index} value={item} OnDeleteItem={this.onDeleteItem}/>
              </div>
            )
          })}
        </CardStyled>
      </div>
    )
  }
}
