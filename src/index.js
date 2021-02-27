import React from 'react';
import ReactDOM from 'react-dom';
import "./functionBased/App.css";
import { BrowserRouter as Router } from 'react-router-dom'

import TaskContainer from './functionBased/components/TaskContainer';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TaskContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);