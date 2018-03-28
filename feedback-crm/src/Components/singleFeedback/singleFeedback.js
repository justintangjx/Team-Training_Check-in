import React, { Component } from "react";

class DisplaySingleFeedback extends Component {
  render() {
    return (
      <div className="feedback">
        <div className="card" style={{ width: "25rem", textAlign: "center" }}>
          <div className="card-body">
            <p className="feedback-header">{this.props.feedback.action}</p>
            <p className="feedback-body">{this.props.feedback.improvement}</p>
            <button
              className="btn btn-secondary btn-sm"
              onClick={this.props.handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplaySingleFeedback;
