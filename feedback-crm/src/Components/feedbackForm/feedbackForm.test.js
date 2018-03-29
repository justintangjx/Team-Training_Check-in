import React from "react";
import { shallow } from "enzyme";
import FeedbackForm from "./feedbackForm";
import FeedbackBox from "../feedbackBox/feedbackBox";

// import FeedbackBox from '../feedbackBox/feedbackBox';

describe("FeedbackForm", () => {
  it("should allow submission of feedback upon clicked", () => {
    const mockAddFeedback = jest.fn();
    const wrapper = shallow(<FeedbackForm addFeedback={mockAddFeedback}/>);
    wrapper.find(".feedback-form").simulate("submit", { preventDefault: () => {} });
    expect(mockAddFeedback).toBeCalled();
  });

  it("should clear input when submitted", () => {
      const mockAddFeedback = jest.fn();
      const wrapper = shallow(<FeedbackForm addFeedback={mockAddFeedback}/>);
      wrapper.find(".feedback-form").simulate("submit", { preventDefault: () => {} });
      expect(wrapper.find('textarea')).to.equal( " ");
  })
});
