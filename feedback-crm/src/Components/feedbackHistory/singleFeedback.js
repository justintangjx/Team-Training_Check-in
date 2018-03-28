import React, { Component } from "react";
import { feedbackList } from '../../utils/seedData';

class PastFeedback extends Component {
  render() {
    return (
      <div className="feedback">
        <p className="feedback-header">{this.props.action}</p>
        <p className="feedback-body">{this.props.body}</p>
        <div className="feedback-footer">
          <a href="#" className="feedback-footer-delete">
            SETTLED
          </a>
        </div>
      </div>
    );
  }
}

export default PastFeedback;

// to put in feedback box: <PastFeedback 
    // action="asdf" specAction="" />

    // retrieveFeedback() {
    //     -insert 
    //     const feedbackList (an array of objects)
    // return feedbackList.map((feedback) => {
    //     return ( <Feedback action={feedback.author} specFeedback={feedback.specFeedback} key={feedback.id} />
    //     );
    // })
    // }
    // put in box after render (this.retrieveFeedback)
    // have a feedback count? {feedback.length} feedback


