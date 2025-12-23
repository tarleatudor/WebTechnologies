import React, { useReducer } from 'react';

const initialstate ={count: 0, history:[0]}

const reducer =(state, action) =>{
    switch(action.type){
        case "increment":
            return {
                count: state.count +1, 
                history: [...state.history, state.count +1]
            };
        case "decrement":
            return {
                count: state.count -1, 
                history: [...state.history, state.count -1]
            };
        case "reset":
            return initialstate;
        default:
            throw new Error();
    }
}

const Tasks = () => {
    const [state, dispatch] = useReducer(reducer, initialstate);
    console.log("state :>>" , state);
    return (
        <>
            <p>Welcome to the Tasks Page</p>
            <button>
                Increment
                <button onClick={() => dispatch({type: "increment"})}>+</button>
            </button>
            <button>
                Decrement
                <button onClick={() => dispatch({type: "decrement"})}>-</button>
            </button>
            <p>Count: {state.count}</p>
            <p>History: {state.history.join(", ")}</p>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        </>
    );
};

export default Tasks;