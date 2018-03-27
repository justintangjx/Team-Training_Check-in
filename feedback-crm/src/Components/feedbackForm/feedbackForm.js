import React, { Component } from "react";

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Feedback was submitted :) ");
    event.preventDefault();
  }

  render() {
    return (
      <form className="feedback-form" onSubmit={this.handleSubmit.bind(this)}>
        <label> Based on the following action: </label>
        <textarea
          className="form-control"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <label> Please continue to: </label>
        <div className="feedback-form-fields">
          <textarea
            className="form-control"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="feedback-form-actions">
          <button className="btn btn-primary">Submit feedback!</button>
        </div>
        
      </form>
    );
  }
}

export default FeedbackForm;
