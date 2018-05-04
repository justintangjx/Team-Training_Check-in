import React, { Component } from "react";
import "./App.css";
import FeedbackBox from "./Components/feedbackBox/feedbackBox";
import { BrowserRouter, Route } from "react-router-dom";
import Navtabs from './Components/navtabs';
import teamBarChart from './Components/teamTemp/teamTemp';
import FeedbackBoxImprov from './Components/feedbackBox/feedbackBoxImprov';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
        <div className="toplayout">
          <Navtabs />
          <Route exact path="/awesome" component={FeedbackBox} />
          <Route exact path="/toimprove" component ={FeedbackBoxImprov} />
          <Route exact path="/manager" component = {teamBarChart} />
          <br />
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
