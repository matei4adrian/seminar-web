import React, { useState, useEffect } from "react";

function App() {
  // const [steps, setSteps] = useState(0);
  const [initialCountValue, setInitialCountValue] = useState(0);
  const [count, setCount] = useState(initialCountValue);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    alert(`You will start from ${initialCountValue} count`);
  }, [initialCountValue]);

  return (
    <div className="container">
      {/* <p>Today you`ve taken {steps} steps!</p>
      <button onClick={() => setSteps(steps + 1)}>Increase steps</button> */}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
