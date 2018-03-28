import React from "react";
import DisplaySingleFeedback from '../singleFeedback/singleFeedback';


const FeedbackHistory = props => (
  <div>
    {props.feedbackList.map((feedback, i) => {
      return <DisplaySingleFeedback key={i} feedback={feedback} />;
    })}
  </div>
);

export default FeedbackHistory;
