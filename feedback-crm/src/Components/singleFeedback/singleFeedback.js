import React, { Component } from "react";

class DisplaySingleFeedback extends Component {
  render() {
    return (
      <div className="feedback">
        <p className="feedback-header">{this.props.feedback.action}</p>
        <p className="feedback-body">{this.props.feedback.improvement}</p>
        <div className="feedback-footer" />
      </div>
    );
  }
}

export default DisplaySingleFeedback;