import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
      <div>
        <form className = "adding" onSubmit={this.props.addTodo}>
        <button className = "hello" type="button">Add a To Do</button>
        <input type="text" id="ToDo" name="ToDo" placeholder="Type Here!"/>
      </form>
      </div>
    );
  }
}

export default NewTodo;
