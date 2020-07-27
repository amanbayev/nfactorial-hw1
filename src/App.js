import React from 'react';
import './App.css';

function App() {
  const [text, setText] = React.useState('abcd');

  return (
    <div>
      <div>Some question</div>
      <input
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setText('');
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
