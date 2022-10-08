import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './posts';
import dummyTweets from "./data.js";
import agoraStatesDiscussions from './data.js';

function App() {
  return (
    <div className="App">
      <Posts />
    </div>

  );
}

export default App;
