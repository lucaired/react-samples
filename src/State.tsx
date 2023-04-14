import React from 'react';

const State = () => {
    const [counter, incrementCounter] = React.useState(0);
    const handleCounterClick = () => {
        incrementCounter(counter + 1);
    };

    const [name, setName] = React.useState<String>('John');

    const handleInput = (name: String) => {
        setName(name);
    }

    console.log('State component re-rendered');

    // Will only re-render when counter changes
    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={handleCounterClick}>Increment</button>
            <p>Name: {name}</p>
            <input type="text" onChange={(e) => handleInput(e.target.value)} />
        </div>
    );
}

export default State;