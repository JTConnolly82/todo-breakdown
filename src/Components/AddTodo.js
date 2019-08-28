import React, {Component} from 'react';

class AddTodo extends Component {
  state = {
    title: '',
  }

  onChange = (e) => {
    this.setState({title: e.target.value})
  }

  render() {
    return (
      <form style={{display: 'flex'}}>
        <input 
        type='text' 
        name='title' 
        placeholder='add todo'
        style={{flex: '10', padding: '5px'}}
        value={this.state.title}
        onChange={this.onChange}
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