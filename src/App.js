import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {
  render() {
    return (
      <div className = "container">
      <div className = "addTODO">
  <form className = "adding">
      <button className = "hello" type="button">Add a To Do</button>
      <input type="text" id="ToDo" name="ToDo" placeholder="Type Here!"/>

    </form>
    <div className = "ToDos">
        <ul id = "list">
            
        </ul>
    </div> 
  </div>
  
</div>
    );
  }
}

export default App;
