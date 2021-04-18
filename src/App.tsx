import React from 'react';
import './App.css';
import Header from './components/header';
import Tasks from './components/Tasks';

import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'task1',
      day: '2020.02.12 2:30AM',
      reminder: true,
    },
    {
      id: 2,
      text: 'task2',
      day: '2020.02.12 2:30AM',
      reminder: true,
    },
    {
      id: 3,
      text: 'task3',
      day: '2020.02.12 2:30AM',
      reminder: true,
    },
    {
      id: 4,
      text: 'task4',
      day: '2020.02.12 2:30AM',
      reminder: true,
    },
  ]);

  return (
    <div className="container">
      <Header title="Task Traker" />
      <Tasks />
    </div>
  );
}

export default App;
