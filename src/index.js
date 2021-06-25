import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: 1, name: 'Marina' },
  { id: 2, name: 'Victor' },
  { id: 3, name: 'Valera' },
  { id: 4, name: 'Katya' },
  { id: 5, name: 'Vasay' },
  { id: 6, name: 'Alex' },
  { id: 7, name: 'Sasha' },
  { id: 8, name: 'Sashaazsxdfg' },
];

let messagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How is your' },
  { id: 3, message: 'Hiszdxfcgthyuj' },
  { id: 4, message: 'dcfasdfghjkvgbhnjmasdfgh' },
  { id: 5, message: 'Hiasdhjgs f gdh h h;' },
  { id: 6, message: 'azsxdfghyujikl' },
];

let postsData = [
  { id: 1, message: 'How are you?', likesCount: 10 },
  { id: 2, message: 'Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?', likesCount: 11 },
  { id: 3, message: 'That\'s my first post', likesCount: 33 },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
