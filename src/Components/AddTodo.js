import React, {Component} from 'react';

class AddTodo extends Component {


  render() {
    return (
      <form style={{display: 'flex'}}>
        <input 
        type='text' 
        name='title' 
        placeholder='add todo'
        style={{flex: '10', padding: '5px'}}
        />
        <input 
        type='submit' 
        value='submit' 
        style={{flex: '1.3', borderRadius: '5%'}}
        />
      </form>
    )
  }
}

export default AddTodo;