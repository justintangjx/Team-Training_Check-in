import React, { Component } from "react";
import "./App.css";
import FeedbackBox from "./Components/feedbackBox/feedbackBox";
import { BrowserRouter, Route } from "react-router-dom";
import Navtabs from "./Components/navtabs";
import teamBarChart from "./Components/teamTemp/teamTemp";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="toplayout">
            <Navtabs />
            <Route
              exact
              path="/awesome"
              render={() => <FeedbackBox message="Well done!" />}
            />
            <Route
              exact
              path="/toimprove"
              render={() => <FeedbackBox message="Keep improving!" />}
            />
            <Route exact path="/manager" component={teamBarChart} />
            <br />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
