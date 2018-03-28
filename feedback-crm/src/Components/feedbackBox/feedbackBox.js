import React, { Component } from "react";
import { feedbackList } from "../../utils/seedData";
import FeedbackForm from "../feedbackForm/feedbackForm";

class FeedbackBox extends Component {
  constructor() {
    super();
    this.state = {
      feedbackList: feedbackList,
      newFeedback: { action: " ", improvement: "" }
    };
  }

  saveFeedback(event) {
    this.setState({
      newFeedback: {
        action: event.target.value,
        improvement: event.target.value
      }
    });
  }

  render() {
    return (
      <div id="feedbackHistory">
        <FeedbackForm
          saveFeedback={this.saveFeedback.bind(this)}
          newFeedback={this.state.newFeedback}
          addFeedback={this.addFeedback.bind(this)}
        />
      </div>
    );
  }

  addFeedback(actionValue, improvementValue) {
    const exampleFeedback = {
      id: this.state.feedbackList.length + 1,
      action: actionValue,
      improvement: improvementValue
    };

    this.setState({
      feedbackList: this.state.feedbackList.concat([exampleFeedback])
    });
  }
}

export default FeedbackBox;
