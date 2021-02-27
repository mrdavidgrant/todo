import React, { useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'

const InputTask = props => {
  const [inputText, setInputText] = useState({
    title: "",
  })

  const onChange = e => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (inputText.title.trim()) {
      props.addTask(inputText.title)
      setInputText({
        title: '',
      })
    } else {
      alert("Please write item")
    }
  }

  
  return (
    <form onSubmit={handleSubmit} className="form-container">
        <input 
          type="text" 
          placeholder="Add Task..." 
          value={inputText.title}
          onChange={onChange}
          name="title"
          className="input-text"
        />
        <button className="input-submit"><FaPlusCircle /></button>
      </form>
  )
}

export default InputTask