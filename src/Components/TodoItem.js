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
            <input type='checkbox' 
                   onChange={this.props.handleChange.bind(this, this.props.todo.id)} />{' '}
            {this.props.todo.title}
            <button onClick={this.props.handleClick.bind(this, this.props.todo.id)} style={btnStyle}>delete</button>
          </h3>
        </div>
    );
  }
}


let btnStyle = {
  background: 'red',
  color: 'white',
  border: 'none',
  padding: '5px',
  borderRadius: '20%',
  float: 'right'
}



export default TodoItem;