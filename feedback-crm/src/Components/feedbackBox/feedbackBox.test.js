import React from "react";
import { shallow, mount } from "enzyme";
import FeedbackBox from "./feedbackBox";
import FeedbackForm from "../feedbackForm/feedbackForm";

describe.only("FeedbackBox", () => {
  it("should allow feedback to go to feedback list", () => {
    const wrapper = shallow(<FeedbackBox />);
    wrapper.instance().addFeedback("singing", "needs more timbre");

    expect(
      wrapper
        .props("feedbackList")
        .contains(
          "singing", "needs more timbre")
        )
    .toEqual(true);
      
  });
});