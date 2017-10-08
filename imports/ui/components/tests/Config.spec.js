import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { shallow } from "enzyme";

import Config from "../Config";
import FieldRows from "../FieldRows";

describe("<Config />", () => {
  let configSettingAction = jest.fn();
  let defaultConfig = { tickRate: 50 };

  describe("Config SnapShot", () => {
    it("renders config correctly", () => {
      const tree = ReactTestRenderer.create(
        <Config
          configFields={defaultConfig}
          configSettingAction={configSettingAction}
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("Config Props", () => {
    let wrapper, fieldRows;

    beforeEach(() => {
      const wrapper = shallow(
        <Config
          configFields={defaultConfig}
          configSettingAction={configSettingAction}
        />
      );
      fieldRows = wrapper.find(FieldRows);
    });

    it("should pass fields prop to FieldRows", () => {
      const { fields } = fieldRows.props();
      expect(fields).toBe(defaultConfig);
    });

    it("pass stateSettingAction prop to fieldRows", () => {
      const { stateSettingAction } = fieldRows.props();
      expect(stateSettingAction).toBe(configSettingAction);
    });
  });
});
