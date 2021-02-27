import React from 'react'
import Task from './Task'

const TaskList = props => {

  return (
    <ul>
      {props.tasks.map(task => (
        <Task 
          key={task.key} 
          task={task} 
          handleChangeProps={props.handleChangeProps}
          deleteTaskProp={props.deleteTaskProp}
          postTaskProp={props.postTaskProp}
        />
      ))}
    </ul>
  )
}

export default TaskList