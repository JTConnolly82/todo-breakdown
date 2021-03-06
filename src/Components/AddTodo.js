import React, {Component} from 'react';

class AddTodo extends Component {
  state = {
    title: '',
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.title);
    this.setState({title: ''});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
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