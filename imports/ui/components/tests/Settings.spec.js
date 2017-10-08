import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { shallow } from "enzyme";

import Settings from "../Settings";

describe("<Settings />", () => {
  const defaultProps = {
    settingsFields: { tickRate: 50 },
    settingsSettingAction: jest.fn()
  };

  describe("Settings SnapShot", () => {
    it("renders Settings correctly", () => {
      const tree = ReactTestRenderer.create(
        <Settings {...defaultProps} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
