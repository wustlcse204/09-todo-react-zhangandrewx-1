import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
        
       // <div className = "ToDos">
        //<ul id = "list">
        //<li><button>Completed Task</button><button>Delete Task</button>test 2</li>
        //</ul>
    //</div> 
    <article id = "{this.props.id}" className = "ToDos">
          <p>
              <button>Completed Task</button>
              <button>Delete Task</button>
              {this.props.todoData.text}

          </p>
        </article>
    );
  }
}

export default Todo;
