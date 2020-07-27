import React from 'react';
import './App.css';

let getRandomInt = (max) => {
  let min = Math.ceil(0);
  let maxx = Math.floor(max) - 1;
  let random = Math.floor(Math.random() * (maxx - min + 1)) + min;
  console.log('getting Random number ' + random);
  return random;
};

function App() {
  const [text, setText] = React.useState('abcd');
  const [answer, setAnswer] = React.useState('');
  const [questionIndex, setQuestionIndex] = React.useState(getRandomInt(3));

  const questionsArray = [
    {
      question: "What's the capital of Kazakhstan?",
      answer: 'Astana',
    },
    {
      question: 'Can you divide by zero?',
      answer: 'No',
    },
    {
      question: 'Are we there yet?',
      answer: 'yes',
    },
  ];

  return (
    <div>
      <div>
        {questionsArray[questionIndex]
          ? questionsArray[questionIndex].question
          : ''}
      </div>
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
          answer === questionsArray[questionIndex].answer
            ? alert('Correct!')
            : alert('Incorrect!!!');
          setQuestionIndex(getRandomInt(questionsArray.length));
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
