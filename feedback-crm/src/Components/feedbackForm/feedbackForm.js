import React, { Component } from "react";

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actionValue: "",
      improvementValue: ""
    };
    this.handleChangeForActionInput = this.handleChangeForActionInput.bind(
      this
    );
    this.handleChangeForImprovementInput = this.handleChangeForImprovementInput.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeForActionInput(event) {
    this.setState({ actionValue: event.target.value });
  }

  handleChangeForImprovementInput(event) {
    this.setState({ improvementValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addFeedback(this.state.actionValue, this.state.improvementValue);
  }

  render() {
    return (
      <form className="feedback-form" onSubmit={this.handleSubmit.bind(this)}>
        <label> Based on the following action: </label>
        <textarea
          className="form-control"
          value={this.state.actionValue}
          onChange={this.handleChangeForActionInput}
        />
        <label> Please continue to: </label>
        <div className="feedback-form-fields">
          <textarea
            className="form-control"
            value={this.state.improvementValue}
            onChange={this.handleChangeForImprovementInput}
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
