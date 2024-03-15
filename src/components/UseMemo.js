import React, { useMemo } from 'react';

function UseMemo() {
  const expensiveCalculation = useMemo(() => {
    // Simulate an expensive calculation
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result;
  }, []);

  return (
    <div>
      <h2>UseMemo Demo</h2>
      <p>Result of expensive calculation: {expensiveCalculation}</p>
    </div>
  );
}

export default UseMemo;
