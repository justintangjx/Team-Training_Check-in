import React, { Component } from "react";
import PropTypes from 'prop-types';

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
        <p className="text-primary">
          <strong> Based on the following action: </strong>
        </p>
        <textarea
          className="form-control border border-primary"
          value={this.state.actionValue}
          onChange={this.handleChangeForActionInput}
        />
        <br />
        <p className="text-primary">
          <strong>Please continue to:</strong>
        </p>
        {/* <label><strong> Please continue to: </strong></label> */}
        <div className="feedback-form-fields">
          <textarea
            className="form-control border border-primary"
            value={this.state.improvementValue}
            onChange={this.handleChangeForImprovementInput}
          />
        </div>
        <p />
        <div className="feedback-form-actions">
          <button className="btn btn-primary btn-lg">Submit feedback!</button>
        </div>
      </form>
    );
  }
}

export default FeedbackForm;
