import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { shallow } from "enzyme";

import FieldRows from "../FieldRows";

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
