import React from 'react';
import './App.css';

function App() {
  const [text, setText] = React.useState('abcd');
  const [answer, setAnswer] = React.useState('');

  return (
    <div>
      <div>What's the capital of Kazakhstan?</div>
      <input
        value={text}
        onChange={(event) => {
          setText(event.target.value);
          setAnswer(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setText('');
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          answer === 'Astana' ? alert('Correct!') : alert('Incorrect!!!');
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
