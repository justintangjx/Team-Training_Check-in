import React, { Component } from "react";

class SingleFeedback extends Component {
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

export default SingleFeedback;









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
