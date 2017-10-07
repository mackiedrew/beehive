import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

import FieldRows from "../FieldRows";

configure({ adapter: new Adapter() });

describe("<FieldRows />", () => {
  const defaultProps = {
    heading: "Fields",
    fields: {
      tickrate: 50
    },
    stateSettingAction: jest.fn()
  };

  describe("FieldRows SnapShot", () => {
    it("renders FieldRows correctly", () => {
      const tree = ReactTestRenderer.create(
        <FieldRows {...defaultProps} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
