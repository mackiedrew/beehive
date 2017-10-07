import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

import NotFound from "../NotFound";

configure({ adapter: new Adapter() });

describe("<NotFound />", () => {
  describe("NotFound SnapShot", () => {
    it("renders NotFound correctly", () => {
      const tree = ReactTestRenderer.create(<NotFound />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
