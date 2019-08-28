import React, {Component} from 'react';
import './App.css';
import Todos from './Components/Todos';
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
  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
