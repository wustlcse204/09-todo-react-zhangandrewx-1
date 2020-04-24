import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  constructor(props){
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(event) {
    event.preventDefault();
    let newToDoObject = {
      text: event.target.userInput.value,
      completed: false
    };
    this.props.newTodoHandler(newToDoObject);
  }
  render() {
    return (
      <div>
        <form className = "adding" onSubmit={this.addTodo}>
        <button className = "hello" type="button">Add a To Do</button>
        <input type="text" id="ToDo" name="userInput"  placeholder="Type Here!"/>
      </form>
      </div>
    );
  }
}

export default NewTodo;
