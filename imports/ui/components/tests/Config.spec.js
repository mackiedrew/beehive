import React from "react";
import ReactTestRenderer from "react-test-renderer";

import Config from "../Config";

describe("Config", () => {
  let configSettingAction = jest.fn();

  describe("Config SnapShot", () => {
    it("renders config correctly", () => {
      const tree = ReactTestRenderer.create(
        <Config
          configFields={{ tickRate: 50 }}
          configSettingAction={configSettingAction}
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
