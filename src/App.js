import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
    this.newTodoHandler = this.newTodoHandler.bind(this);
  }

  componentDidMount() {
    var self = this;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
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
    xhttp.setRequestHeader("x-api-key", "adaa8b-ed51bd-543e5a-3a6cb4-21f19b");
    xhttp.send();
  }

  
  newTodoHandler(newToDo) {
    // var self = this;
    var data = {
      text: newToDo.text,
    }
    //console.log(data);
    var xhttp3 = new XMLHttpRequest();
    xhttp3.onreadystatechange = function () {
      //console.log(self);
      if (this.readyState === 4 && this.status === 200) {
        //var todo = JSON.parse(this.responseText);
      }
      else {
        //console.log(this.readyState);
      }
    };
    xhttp3.open("POST", "https://cse204.work/todos", true);
    xhttp3.setRequestHeader("Content-type", "application/json");
    xhttp3.setRequestHeader("x-api-key", "adaa8b-ed51bd-543e5a-3a6cb4-21f19b");
    xhttp3.send(JSON.stringify(data));
    this.componentDidMount()
  }
  render() {
    this.state.todos.sort(function (a, b) {
      return a.text.localeCompare(b.text);
    })
    return (

      <section id="todos">
        <NewTodo newTodoHandler={this.newTodoHandler}> </NewTodo>
        {this.state.todos.map((thisTodo) =>
          <Todo key={thisTodo.id}
            todoData={thisTodo}
            completed={thisTodo.completed}
            text={thisTodo.text} />
        )}
      </section>
    );
  }
}

export default App;
