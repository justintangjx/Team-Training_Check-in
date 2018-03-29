import React from "react";
import { shallow } from "enzyme";
import FeedbackBox from "./feedbackBox";
import FeedbackForm from '../feedbackForm/feedbackForm';


describe("FeedbackBox", () => {
  it("increase feedback list's length by 1", () => {
    const mockFeedback = {
          actionValue: "singing",
          improvementValue: "work on your timbre"
        };
        const mockAddFeedback = jest.fn();
        const exampleAddFeedback = mockAddFeedback(mockFeedback.actionValue, mockFeedback.improvementValue);
        const wrapper = shallow(
        <FeedbackBox addFeedback={exampleAddFeedback}/>);
        wrapper.simulate("submit", { preventDefault() {} } );
        console.log(wrapper.debug());



  })
    
  });
});
