import React from "react";
import DisplaySingleFeedback from "../singleFeedback/singleFeedback";

const FeedbackHistory = props => (
  <div>
    {props.feedbackList.map((feedback, i) => {
      return (
        <DisplaySingleFeedback // this could be better named as SingleFeedback :-) Don't be afraid of renaming things! It'll make your code more readable as it grows
          key={i}
          feedback={feedback}
          handleDelete={() => props.handleDelete(feedback)}
        />
      );
    })}
  </div>
);

export default FeedbackHistory;
