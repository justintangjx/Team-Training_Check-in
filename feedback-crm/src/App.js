import React, { Component } from 'react';
import './App.css';

import FeedbackForm from './Components/feedbackForm/feedbackForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <FeedbackForm />
      </div>
    )
  }
}

export default App;
