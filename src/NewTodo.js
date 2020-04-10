import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
        <form className = "adding">
        <button className = "hello" type="button">Add a To Do</button>
        <input type="text" id="ToDo" name="ToDo" placeholder="Type Here!"/>
      </form>
    );
  }
}

export default NewTodo;
