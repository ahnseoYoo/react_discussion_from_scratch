import React from 'react';
import './App.css';
import Posts from './posts';


function App() {
  return (
    <div className='outerWrapper'>
      <span className= "Title">
        Some Discussion
      </span>
      <div className="App">
        <Posts />
      </div>
    </div>


  );
}

export default App;
