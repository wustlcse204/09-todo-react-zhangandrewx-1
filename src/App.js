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
    this.deleteButton = this.deleteButton.bind(this);
    this.completeButton = this.completeButton.bind(this);

  }

  componentDidMount() {
    var self = this;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
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
  completeButton(completeData){
    console.log(completeData);
    var self = this;
    let instance= this.state.todos;
    var index = instance.indexOf(completeData);
    if (index !== -1){
      instance.splice(index, 1);
      this.setState({todos: instance});
    }
    var data = {
      completed: true
    }
    var xhttp3 = new XMLHttpRequest();
    xhttp3.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        var todoss = JSON.parse(this.responseText);
        self.setState({
          todos: self.state.todos.concat(todoss)
      })
      }
      else {
      }
    };
    xhttp3.open("PUT", "https://cse204.work/todos/" + completeData.id, true);
    xhttp3.setRequestHeader("Content-type", "application/json");
    xhttp3.setRequestHeader("x-api-key", "adaa8b-ed51bd-543e5a-3a6cb4-21f19b");
    xhttp3.send(JSON.stringify(data));
  }
  deleteButton(deleteData){
    let dataInstance = this.state.todos;
    var index = dataInstance.indexOf(deleteData);
    if (index !== -1){
      dataInstance.splice(index, 1);
      this.setState({todos: dataInstance});
    }
  
    var xhttp2 = new XMLHttpRequest();

        xhttp2.onreadystatechange = function() {

            if (this.readyState === 4 && this.status === 200) {

               

            } else if (this.readyState === 4) {

                console.log(this.responseText);

            }
        };

        xhttp2.open("DELETE", "https://cse204.work/todos/"+deleteData.id, true);

        xhttp2.setRequestHeader("Content-type", "application/json");
        xhttp2.setRequestHeader("x-api-key", "adaa8b-ed51bd-543e5a-3a6cb4-21f19b");
        xhttp2.send();
  }
  newTodoHandler(newToDo) {
     var self = this;
    var data = {
      text: newToDo.text,
    }
    var xhttp3 = new XMLHttpRequest();
    xhttp3.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        var todoss = JSON.parse(this.responseText);
        self.setState({
          todos: self.state.todos.concat(todoss)
      })
      }
      else {
      }
    };
    xhttp3.open("POST", "https://cse204.work/todos", true);
    xhttp3.setRequestHeader("Content-type", "application/json");
    xhttp3.setRequestHeader("x-api-key", "adaa8b-ed51bd-543e5a-3a6cb4-21f19b");
    xhttp3.send(JSON.stringify(data));
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
            text={thisTodo.text} 
            completeButton = {this.completeButton}
            deleteButton = {this.deleteButton} 

            />
        )}
      </section>
    );
  }
}

export default App;
