// Example
// import React, {useState} from "react";

// const App = () => {
//   const [steps, setSteps] = useState(0);
//   return (
//     <div className="container">
//     <p>Today you walked {steps} steps</p>
//     <button onClick={() => setSteps(steps + 1)}>Click Me</button>
//     </div>
//     );
// };

// export default App;

// Exercise

import React, { useState } from "react";

const App = () => {
  const [isWalking, setIsWalking] = useState(false);
  return (
    <div>
      {isWalking ? <p>You are walking</p> : <p>You are not walking</p>}

      <button onClick={() => setIsWalking(!isWalking)}>Change state</button>
    </div>
  );
};

export default App;
