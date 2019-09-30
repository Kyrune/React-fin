import React from 'react';

const Counter = ({ count, clicks, addCount, onDecrement, onIncrement, onInput, onInputNumber }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <h3>Times the increment/decrement buttons have been clicked: {clicks}</h3>
          <input type="number" onChange={event => onInput(event.target.value)} value={addCount}/>
          <button onClick={onInputNumber}>Change Count Number</button>
        </div>
      </div>
    );
}


export default Counter;