import React from "react";
import ReactTestUtils from "react-dom/test-utils";

import ReactTestRenderer from "react-test-renderer";
import ReactShallowRenderer from "react-test-renderer/shallow";

import BeeCard from "../BeeCard";

import {
  Card,
  CardImg,
  CardBlock,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

describe("BeeCard", () => {
  let instance;
  let cardImg, cardBlock;
  let cardTitle, cardSubtitle, deleteButton;
  const renderer = new ReactShallowRenderer();

  let bee = { _id: "testID", name: "test bee", type: "test type" };
  let removeBee = jest.fn();

  describe("BeeCard SnapShot", () => {
    it("renders BeeCard correctly", () => {
      const tree = ReactTestRenderer.create(
        <BeeCard bee={bee} removeBee={removeBee} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("when bee is a worker", () => {
    beforeEach(() => {
      renderer.render(<BeeCard bee={bee} removeBee={removeBee} />);
      instance = renderer.getRenderOutput();

      [cardImg, cardBlock] = instance.props.children;
      [cardTitle, cardSubtitle, deleteButton] = cardBlock.props.children;
    });

    it("checks rendering of CardImg", () => {
      const { type, props: { src, alt } } = cardImg;
      expect(type).toBe(CardImg);
      expect(src).toBe(`./images/bees/${bee.type.toLowerCase()}.jpg`);
      expect(alt).toBe(`${bee.type} Bee`);
    });

    it("checks rendering of CardTitle", () => {
      const { type, props: { children } } = cardTitle;
      expect(type).toBe(CardTitle);
      expect(children).toBe(bee.name);
    });

    it("checks rendering of CardSubtitle", () => {
      const { type, props: { children } } = cardSubtitle;
      expect(type).toBe(CardSubtitle);
      expect(children).toBe(bee.type);
    });

    it("checks to see if the deleteButton calls removeBee", () => {
      deleteButton.props.onClick();
      expect(removeBee).toHaveBeenCalled();
    });
  });
});
