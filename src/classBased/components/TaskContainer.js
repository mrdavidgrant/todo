import React from 'react';
import TaskList from './TaskList';
import Header from './Header';
import InputTask from './InputTask';
import { v4 as uuidv4 } from 'uuid';

class TaskContainer extends React.Component {
  state = {
    tasks: []
   };

  handleChange = (id) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      }),
    }))
  }

  postTask = (update, id) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => {
        if (task.id === id) {
          task.title = update
        }
        return task
      })
    }))
  }

  delTask = (id) => {
    this.setState({
      tasks: [
        ...this.state.tasks.filter(task => {
          return task.id !== id
        })
      ]
    })
  }

  addTaskItem = title => {
    const newTask = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  componentDidMount() {
    const temp = localStorage.getItem("tasks")
    const loadedTodos = JSON.parse(temp)
    if (loadedTodos) {
      this.setState({
        tasks: loadedTodos
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      const temp = JSON.stringify(this.state.tasks)
      localStorage.setItem("tasks", temp)
    }
  }
  
  render() {
    return (
        <div className="container">
          <div className="inner">
            <React.Fragment>
              <Header />
              <InputTask 
                addTask={this.addTaskItem}
              />
              <TaskList 
                tasks={this.state.tasks} 
                handleChangeProps={this.handleChange}
                deleteTaskProp={this.delTask}
                postTaskProp={this.postTask}
              />
            </React.Fragment>
          </div>
        </div>
    )
  }
}

export default TaskContainer;