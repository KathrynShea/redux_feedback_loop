import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

import Feeling from '../Questions/Feeling';
import Understanding from '../Questions/Understanding';
import Support from '../Questions/Support';
import Comments from '../Questions/Comments';
import Review from '../Review/Review';
import Success from '../Review/Success';

function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Route path="/feeling">
          <Feeling />
      </Route>
      <Route path="/understanding">
          <Understanding />
      </Route>
      <Route path="/support">
          <Support />
      </Route>
      <Route path="/comments">
          <Comments />
      </Route>
      <Route path="/review">
          <Review />
      </Route>
      <Route path="/success">
          <Success />
      </Route>
    </div>
    </Router>
  );
}

export default App;
