import React, {useState} from "react";

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);
    return (<>
        <h1>counter:{count}</h1>
        <button onClick={() => setCount(count => count + 1)}>+</button>
    </>)
};

export default Counter