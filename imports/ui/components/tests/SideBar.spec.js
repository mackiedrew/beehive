import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { shallow } from "enzyme";

import SideBar from "../SideBar";
import { Button } from "reactstrap";

describe("<SideBar />", () => {
  const defaultProps = {
    numberOfBees: 4,
    createBee: jest.fn(),
    removeAllBees: jest.fn()
  };

  describe("SideBar SnapShot", () => {
    it("renders SideBar correctly", () => {
      const tree = ReactTestRenderer.create(
        <SideBar {...defaultProps} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("SideBar Props", () => {
    let wrapper, buttons;

    beforeEach(() => {
      const wrapper = shallow(<SideBar {...defaultProps} />);
      buttons = wrapper.find(Button);
    });

    it("should call createBee", () => {
      buttons.forEach((node, index) => {
        if (index < buttons.length - 1) {
          node.simulate("click");
        }
      });
      expect(defaultProps.createBee).toHaveBeenCalledTimes(3);
    });

    it("should call removeAllBees", () => {
      buttons.last().simulate("click");
      expect(defaultProps.removeAllBees).toHaveBeenCalled();
    });
  });
});
