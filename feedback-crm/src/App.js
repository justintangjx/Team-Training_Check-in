import React, { Component } from 'react';
import './App.css';


import FeedbackBox from './Components/feedbackBox/feedbackBox';


class App extends Component {
  render() {
    return (
      <div className="App">
      <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="/" className="nav-link active">What was AWESOME</a>
        </li>
        <li className="nav-item">
        <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">What to work on</a>
        </li>
        </ul>
        <p />
        <FeedbackBox />
        
      </div>
    )
  }
}

export default App;
