import React from 'react';
import axios from 'axios';
import './App.css';

import Feeling from '../Questions/Feeling';
import Understanding from '../Questions/Understanding';
import Support from '../Questions/Support';
import Comments from '../Questions/Comments';
import Review from '../Review/Review';
import Success from '../Review/Success';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Feeling />
      <Understanding />
      <Support />
      <Comments />
      <Review />
      <Success />
    </div>
  );
}

export default App;
