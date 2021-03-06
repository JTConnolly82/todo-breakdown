import React, {Component} from 'react';
import './App.css';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import uuid from 'uuid';

class App extends Component {

  state = {
    todos: [
      {
        title: 'first one',
        id: uuid.v4(),
        completed: false
      },
      {
        title: 'another thing todo',
        id: uuid.v4(),
        completed: false
      },
    ]
  }

  handleChange = (id) => {
    this.setState({todos: this.state.todos.map(
        todo => {
          if(todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }
    )})
   
  }

  handleClick = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => 
              todo.id !== id)]
    });
  }

  handleSubmit = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos,
        newTodo]})
  }

  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <AddTodo handleSubmit={this.handleSubmit}/>
        <Todos todos={this.state.todos} 
        handleChange={this.handleChange} 
        handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
