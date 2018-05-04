import React, { Component } from "react";
import PropTypes from "prop-types";

class FeedbackFormImprov extends Component {
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
    const { actionValue, improvementValue } = this.state;
    const checkForNull = actionValue === "" || improvementValue === "";
    return (
      <form className="feedback-form" onSubmit={this.handleSubmit.bind(this)}>
        <h3 className="text-primary text-center">
          <strong> Based on the following action: </strong>
        </h3>
        <textarea
          className="form-control border border-primary"
          value={this.state.actionValue}
          onChange={this.handleChangeForActionInput}
        />
        <br />
        <h3 className="text-primary text-center">
          <strong>Please Start/Stop:</strong>
        </h3>
        {/* <label><strong> Please continue to: </strong></label> */}
        <div className="feedback-form-fields">
          <textarea
            className="form-control border border-primary"
            value={this.state.improvementValue}
            onChange={this.handleChangeForImprovementInput}
          />
        </div>
        <p />
        <div className="feedback-form-actions text-center">
          {!checkForNull && (
            <button className="btn btn-primary btn-lg">Submit feedback!</button>
          )}
          <p/>
        </div>
      </form>
    );
  }
}

FeedbackFormImprov.propTypes = {
  addFeedback: PropTypes.func.isRequired
};

export default FeedbackFormImprov;
