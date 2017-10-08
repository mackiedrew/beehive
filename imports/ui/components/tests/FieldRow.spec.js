import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { shallow } from "enzyme";

import FieldRow from "../FieldRow";
import { Input, Label } from "reactstrap";

describe("<FieldRow />", () => {
  const defaultProps = {
    label: "NewField",
    value: 15,
    visibleLabel: false,
    stateSettingAction: jest.fn()
  };

  describe("FieldRow SnapShot", () => {
    it("renders FieldRow correctly", () => {
      const tree = ReactTestRenderer.create(
        <FieldRow {...defaultProps} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("FieldRow Props", () => {
    let wrapper, input, label;

    beforeEach(() => {
      const wrapper = shallow(<FieldRow {...defaultProps} />);
      input = wrapper.find(Input);
    });

    it("should pass fields prop to FieldRows", () => {
      input.simulate("change", { target: { value: "My new value" } });
      expect(defaultProps.stateSettingAction).toHaveBeenCalled();
    });
  });
});
