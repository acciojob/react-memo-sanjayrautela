import React from 'react';

const ReactMemo = React.memo(({ tasks }) => {
  console.log('Rendering ReactMemo');
  return (
    <div>
      <h2>React.memo Demo</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemo;
