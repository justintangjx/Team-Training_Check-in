import React, { Component } from 'react';


class FeedbackBox extends Component {
    constructor() {
        super();
    };

    // componentWillMount() {
    //     this._fetchFeedback();
    //   }
    
      render() {
        const feedback = this._getComments();
        return(
          <div className="row comments-container">
            <div className="cell">
              
              <div className="feedback-box">
                <CommentForm addComment={this._addComment.bind(this)} />
                <CommentAvatarList avatars={this._getAvatars()} />
    
                {this._getPopularMessage(feedback.length)}
                <h3 className="comment-count">{this._getCommentsTitle(feedback.length)}</h3>
                <div className="comment-list">
                  {feedback}
                </div>
              </div>
            </div>
          </div>
    
        );
      }
}

export default FeedbackBox;
