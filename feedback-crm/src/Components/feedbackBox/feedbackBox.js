import React, { Component } from 'react';
import { feedbackList } from '../../utils/seedData';
import FeedbackForm from '../feedbackForm/feedbackForm';

class FeedbackBox extends Component {
    constructor() {
        super();
        this.state = {
            feedbackList: feedbackList,
            newFeedback: {action: " ", specFeedback: ''}
        }
    };

    saveFeedback(event) {
        this.setState({ newFeedback: { action: event.target.value, specFeedback: event.target.value } });
        // console.log(event.target.value);
      }
    
      submitFeedback(event) {
        event.preventDefault();
        let updatedFeedbacklist = this.state.feedbackList.concat(this.state.newFeedback);
        this.setState({
          todos: updatedFeedbacklist,
          newFeedback: {action: " ", specFeedback: ''}
        });
      }

      render() {
        return (
            <div id="feedbackHistory">
            <FeedbackForm 
            submitFeedback={this.submitFeedback.bind(this)}
            saveFeedback={this.saveFeedback.bind(this)}
            newFeedback={this.state.newFeedback}
            />
            </div>
        )
               
};
}

export default FeedbackBox;
