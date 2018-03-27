import React, { Component } from 'react';


class FeedbackForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Feedback was submitted :) ' + this.state.value);
        event.preventDefault();
      }

      render() {
        
        return (
          <form className="feedback-form" onSubmit={this.handleSubmit.bind(this)}>
            <label> Please continue to: </label>
            <div className="feedback-form-fields">
            <textarea value={this.state.value} onChange={this.handleChange} />
            {/* <input type="submit" value="Submit" /> */}
            </div>
            <div className="feedback-form-actions">
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            Submit feedback!
            </button>
            </div>
          </form>
          )
        };
    };

      export default FeedbackForm;
