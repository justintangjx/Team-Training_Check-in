import React, { Component } from 'react';
import './App.css';

import FeedbackForm from './Components/feedbackForm/feedbackForm';
import FeedbackBox from './Components/feedbackBox/feedbackBox';


class App extends Component {
  render() {
    return (
      <div className="App">
        <FeedbackForm />
        
        <FeedbackBox />
      </div>
    )
  }
}

export default App;
