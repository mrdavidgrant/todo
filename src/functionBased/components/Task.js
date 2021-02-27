import React, { useState, useEffect } from 'react'
import styles from "./Task.module.css"
import { FaTrash } from 'react-icons/fa'

const Task = props => {
  const [editing, setEditing] = useState(false)
  
  const handleEditing = () => {
    setEditing(true);
  }

  const handleUpdateDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  }

  useEffect(() => {
    return () => {
      console.log("cleaning up...")
    }
  }, [])

  const { completed, id, title } = props.task

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  let viewMode = {}
  let editMode = {}

  editing ? viewMode.display = "none" : editMode.display = "none"

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input 
          type="checkbox" 
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button 
            onClick={() => props.deleteTaskProp(id)}>
          <FaTrash style={{ color: "orangered", fontSize: "16px"}}/>
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
          props.postTaskProp(e.target.value, id)
        }}
        onKeyDown={handleUpdateDone}
      />
    </li>
  )
}

export default Task