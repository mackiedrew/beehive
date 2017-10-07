import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

import Game from "../Game";

configure({ adapter: new Adapter() });

describe("<Game />", () => {
  const defaultProps = {
    bees: [],
    removeBee: jest.fn()
  };

  describe("Game SnapShot", () => {
    it("renders Game correctly", () => {
      const tree = ReactTestRenderer.create(
        <Game {...defaultProps} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
