import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

import Home from "../Home";

import { Button } from "reactstrap";

configure({ adapter: new Adapter() });

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
