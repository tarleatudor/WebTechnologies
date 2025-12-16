//Example
import React, { useState, useEffect} from "react";

// function App2() {

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div className="container">
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }

// Exercise

function App2() {
    const [isOnline, setIsOnline] = useState(false);
    //Effect runs only on first render
    useEffect(() => {
        console.log("Component mounted");
    }, []);

    return (
        <div>
            {isOnline ? <p>You are online</p> : <p>You are offline</p>}
            <button onClick={() => setIsOnline(!isOnline)}>Change status</button>
        </div>
    );
}

export default App2;
