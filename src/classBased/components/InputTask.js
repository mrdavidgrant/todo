import React, { Component } from 'react'

class InputTask extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      // use the array when there are multiple inputs of same type
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.title.trim()) {
      this.props.addTask(this.state.title)
      this.setState({
        title: ''
      })
    } else {
      alert('Please write item');
    }
  }
    
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input 
          type="text" 
          placeholder="Add Task..." 
          value={this.state.title}
          onChange={this.onChange}
          name="title"
          className="input-text"
        />
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}

export default InputTask