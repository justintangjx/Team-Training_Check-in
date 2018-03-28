import React from "react";
import SingleFeedback from '../singleFeedback/singleFeedback';


const FeedbackHistory = props => (
  <div>
    {props.feedbackList.map((feedback, i) => {
      return <SingleFeedback key={i} feedback={feedback} />;
    })}
  </div>
);

export default FeedbackHistory;
