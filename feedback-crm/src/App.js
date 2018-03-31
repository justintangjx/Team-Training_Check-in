import React, { Component } from "react";
import "./App.css";
import FeedbackBox from "./Components/feedbackBox/feedbackBox";
import { BrowserRouter, Route } from "react-router-dom";
import Navtabs from './Components/navtabs';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>

        <div className="toplayout">
          <Navtabs />
          <Route exact path="/awesome" component={FeedbackBox} />
          <Route exact path="/toimprove" component ={FeedbackBox} />
          <br />
        </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
