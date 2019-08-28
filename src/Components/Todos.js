import React, {Component} from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {


  handleChange = (e) => {
    e.preventDefault();

  }


  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} handleChange={this.props.handleChange} />
    ));
  }
}

export default Todos;