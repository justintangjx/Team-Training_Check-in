import React from 'react';
import { shallow } from "enzyme";
import DisplaySingleFeedback from './singleFeedback';

describe.skip("singleFeedback", () => {
    it('should removes feedback item upon clicking delete', () => {
        const testHandler = jest.fn();
        const wrapper = shallow()
        expect(testHandler).toBeCalled();
    });
})