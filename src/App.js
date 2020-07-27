import React from 'react';
import './App.css';

let getRandomInt = (max) => {
  let min = Math.ceil(0);
  let maxx = Math.floor(max) - 1;
  let random = Math.floor(Math.random() * (maxx - min + 1)) + min;
  return random;
};

function App() {
  const [text, setText] = React.useState('abcd');
  const [answer, setAnswer] = React.useState('');
  const [questionIndex, setQuestionIndex] = React.useState(getRandomInt(3));
  const [feedback, setFeedback] = React.useState('');

  const questionsArray = [
    {
      question: "What's the capital of Kazakhstan?",
      answer: 'Astana',
      openEnded: true, // openEnded
    },
    {
      question: 'Can you divide by zero?',
      openEnded: false,
      answerOptions: ['Yes', 'No'],
      answer: 'No',
    },
    {
      question: 'Are we there yet?',
      openEnded: false,
      answerOptions: ['no', 'yes', 'maybe', 'who knows?'],
      answer: 'yes',
    },
  ];

  let renderInput = () => (
    <>
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
    </>
  );

  let makeOption = (option) => <option key={option}>{option}</option>;

  let wrapSelect = () => (
    <select
      id="answers"
      onChange={(event) => {
        setAnswer(event.target.value);
      }}
    >
      {questionsArray[questionIndex].answerOptions.map(makeOption)}
    </select>
  );

  return (
    <div>
      <div>
        {questionsArray[questionIndex]
          ? questionsArray[questionIndex].question
          : ''}
      </div>
      {questionsArray[questionIndex] && questionsArray[questionIndex].openEnded
        ? renderInput()
        : ''}
      {questionsArray[questionIndex] && !questionsArray[questionIndex].openEnded
        ? wrapSelect()
        : ''}
      <button
        onClick={() => {
          answer === questionsArray[questionIndex].answer
            ? setFeedback('Your answer ' + answer + ' was correct!')
            : setFeedback('Your answer was NOT correct!');
          setQuestionIndex(getRandomInt(questionsArray.length));
        }}
      >
        Submit
      </button>
      <h1>{feedback}</h1>
    </div>
  );
}

export default App;
