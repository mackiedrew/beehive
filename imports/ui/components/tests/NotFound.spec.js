import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { shallow } from "enzyme";

import NotFound from "../NotFound";

describe("<NotFound />", () => {
  describe("NotFound SnapShot", () => {
    it("renders NotFound correctly", () => {
      const tree = ReactTestRenderer.create(<NotFound />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
