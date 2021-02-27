import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import Header from './Header';
import InputTask from './InputTask';
import { v4 as uuidv4 } from 'uuid';
import { Route, Switch } from 'react-router-dom'
import About from '../pages/About'
import NotMatch from '../pages/NotMatch'
import Navbar from './Navbar'

const TaskContainer = () => {
  const [tasks, setTasks] = useState(getInitialTasks())

  const handleChange = (id) => {
    setTasks(prevState => 
      prevState.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      }),
    )
  }
  
  const delTask = (id) => {
    setTasks([
      ...tasks.filter(task => {
        return task.id !== id
      })
    ])
  }
  
  const addTaskItem = title => {
    const newTask = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    setTasks([...tasks, newTask])
  }
    
  const postTask = (update, id) => {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          task.title = update
        }
        return task
      })
    )
  }

  function getInitialTasks() {
    const temp = localStorage.getItem("tasks")
    const savedTasks = JSON.parse(temp)
    return savedTasks || []
  }

  useEffect(() => {
    const temp = JSON.stringify(tasks)
    localStorage.setItem("tasks", temp)
  }, [tasks])
  
  return (
    
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
                <Header />
                <InputTask 
                  addTask={addTaskItem}
                />
                <TaskList 
                  tasks={tasks} 
                  handleChangeProps={handleChange}
                  deleteTaskProp={delTask}
                  postTaskProp={postTask}
                />
            </div>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </React.Fragment>
  )
}

export default TaskContainer