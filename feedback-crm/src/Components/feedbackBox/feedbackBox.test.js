import React from "react";
import { shallow, mount } from "enzyme";
import FeedbackBox from "./feedbackBox";
import FeedbackForm from "../feedbackForm/feedbackForm";

describe("FeedbackBox", () => {
  it("should allow feedback to go to feedback list", () => {
    const wrapper = shallow(<FeedbackBox />);
    wrapper.instance().addFeedback("singing", "needs more timbre");

    expect(wrapper.state().feedbackList[1]).toEqual({
      action: "singing",
      id: 2,
      improvement: "needs more timbre"
    });
  });
});
