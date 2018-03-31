import React, { Component } from "react";

class DisplaySingleFeedback extends Component {
  render() {
    return (
      <div className="card" style={{ width: "20rem", display: "inline-block" }}>
        <div className="card-body">
          <p className="feedback-header">{this.props.feedback.action}</p>
          <p className="feedback-body">{this.props.feedback.improvement}</p>
          <p className="text-right">
            <button
              className="btn btn-secondary btn-sm"
              onClick={this.props.handleDelete}
            >
              Delete
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default DisplaySingleFeedback;
