import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props){
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
    this.completedTask = this.completedTask.bind(this);
  }
  deleteTask(event){
    event.preventDefault();
    var datas = this.props.todoData;
    this.props.deleteButton(datas);
  }
  completedTask(event){
    event.preventDefault();
    var datas = this.props.todoData;
    this.props.completeButton(datas);
  }
  render() {
    var completed = this.props.completed;
    var liness;

    if(completed){
      liness = "strikethrough";
    }
    else{
      liness = "";
    }
    return (
 
    <article id = "{this.props.id}" className = "ToDos">
          <ul>
            <li className = {liness}>
              <button onClick={this.completedTask}> Completed Task</button>
              <button onClick={this.deleteTask}> Delete Task</button>
              {this.props.todoData.text}
              </li>
          </ul>
        </article>
    );
  }
}

export default Todo;
