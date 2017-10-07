import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

import Settings from "../Settings";

configure({ adapter: new Adapter() });

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
