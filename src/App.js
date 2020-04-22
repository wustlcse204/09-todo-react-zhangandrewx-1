import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';


class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: []
    };
  }
    componentDidMount(){
      var self = this;
  
      var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            //console.log(self);
            if (this.readyState === 4 && this.status === 200) {
                var todosResponse = JSON.parse(this.responseText);
                self.setState({
                  todos: todosResponse
                });
                console.log(todosResponse);
            }
        };
        xhttp.open("GET", "https://cse204.work/todos", true);
        xhttp.setRequestHeader("x-api-key", "e23216-2494fb-240272-d05fb8-584f3d");
        xhttp.send();
    }
  render() {

   
    return (
      <section id="todos">
      <NewTodo  />
      {this.state.todos.map((thisTodo) =>
          <Todo key = {thisTodo.id}
            todoData = {thisTodo}
            completed = {thisTodo.completed}
            text = {thisTodo.text}/>
        )}
    </section>
    );
  }
}

export default App;
