import React from "react";
import ReactTestRenderer from "react-test-renderer";

import Game from "../Game";

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
