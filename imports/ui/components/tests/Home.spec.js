import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { shallow } from "enzyme";

import Home from "../Home";

import { Button } from "reactstrap";

describe("<Home />", () => {
  const defaultProps = {
    toggleSideBar: jest.fn(),
    sideBarOpen: false
  };

  describe("Home Props", () => {
    let wrapper, button;

    beforeEach(() => {
      const wrapper = shallow(<Home {...defaultProps} />);
      button = wrapper.find(Button);
    });

    it("should call toggleSideBar", () => {
      button.simulate("click");
      expect(defaultProps.toggleSideBar).toHaveBeenCalled();
    });
  });
});
