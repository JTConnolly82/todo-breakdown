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

  handleChange = (e) => {

  }


  render() {
    return (
        <div style={this.getStyle()}>
          <h3>
            <input type='checkbox' 
                   onChange={this.props.handleChange} />{' '}
            {this.props.todo.title}
          </h3>
        </div>
    );
  }
}

export default TodoItem;