import React from 'react'
import styles from "./Task.module.css"

class Task extends React.Component {
  state = {
    editing: false,
  }
  
  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }

  handleUpdateDone = (event) => {
    if (event.key === "Enter") {
      this.setState({editing: false})
    }
  }

  componentWillUnmount() {
    console.log('Cleaning up...')
  }
  
  render() {
    const { completed, id, title } = this.props.task

    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    let viewMode = {}
    let editMode = {}

    this.state.editing ? viewMode.display = "none" : editMode.display = "none"

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input 
            type="checkbox" 
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.deleteTaskProp(id)}>
            Delete
          </button>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input 
          type="text" 
          className={styles.textInput} 
          style={editMode}
          value={title}
          onChange={e => {
            this.props.postTaskProp(e.target.value, id)
          }}
          onKeyDown={this.handleUpdateDone}
        />
      </li>
    )
  }
}

export default Task