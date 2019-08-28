import React, {Component} from 'react';

class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px black dotted',
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
    }
  }


  render() {
    return (
        <div style={this.getStyle()}>
          <h3>
            {this.props.todo.title}
          </h3>
        </div>
    );
  }
}

export default TodoItem;