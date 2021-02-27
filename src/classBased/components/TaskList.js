import React from 'react'
import Task from './Task'

class TaskList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map(task => (
          <Task 
            key={task.key} 
            task={task} 
            handleChangeProps={this.props.handleChangeProps}
            deleteTaskProp={this.props.deleteTaskProp}
            postTaskProp={this.props.postTaskProp}
          />
        ))}
      </ul>
    )
  }
}

export default TaskList