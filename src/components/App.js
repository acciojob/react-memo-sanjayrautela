/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */

import React, { useState } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

function App() {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3']);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState('');

  const addTodo = () => {
    setTasks([...tasks, 'New todo']);
  };

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const handleCustomTaskChange = (event) => {
    setCustomTask(event.target.value);
  };

  const submitCustomTask = () => {
    if (customTask.length > 5) {
      setTasks([...tasks, customTask]);
      setCustomTask('');
    } else {
      alert('Custom task must be more than 5 characters');
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <button onClick={addTodo}>Add todo</button>
      <button onClick={incrementCounter}>Increment counter</button>
      <UseMemo />
      <ReactMemo tasks={tasks} />
      <input type="text" value={customTask} onChange={handleCustomTaskChange} />
      <button onClick={submitCustomTask}>Submit custom task</button>
    </div>
  );
}

export default App;


