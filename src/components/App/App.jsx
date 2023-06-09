import React from "react";
import axios from "axios";
import "./App.css";
import "./bootstrap.css";
import { HashRouter as Router, Route, useHistory } from "react-router-dom";

import Feeling from "../Questions/Feeling";
import Understanding from "../Questions/Understanding";
import Support from "../Questions/Support";
import Comments from "../Questions/Comments";
import Review from "../Review/Review";
import Success from "../Review/Success";
import StartPage from "./StartPage";
import Admin from "./Admin";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback</h1>
          <h6>Don't forget it!</h6>
        </header>

        <Route path="/" exact>
          <StartPage />
        </Route>
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
        <Route path="/admin">
          <Admin />
        </Route>
      </div>
    </Router>
  );
}

export default App;
