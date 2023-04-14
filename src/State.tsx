import React from 'react';

const State = () => {
    const [counter, incrementCounter] = React.useState(0);
    const handleCounterClick = () => {
        incrementCounter(counter + 1);
    };

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={handleCounterClick}>Increment</button>
        </div>
    );
}

export default State;