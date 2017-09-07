// @flow

// Framework
import { Meteor } from "meteor/meteor";
import React from "react";

// Components
import {
  Card,
  CardImg,
  CardBlock,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

/**
 * A bee reporting card.
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {Element} Stateless functional React component.
 */
const BeeCard = ({
  bee: { _id, type, name },
  removeBee
}: {
  bee: Bee,
  removeBee: () => void
}): StatelessComponent => {
  const remove = () => removeBee(_id);

  return (
    <Card className="bee-card">
      <CardImg
        width="100%"
        src={`./images/bees/${type.toLowerCase()}.jpg`}
        alt={`${type} Bee`}
        top
      />
      <CardBlock>
        <CardTitle>
          {name}
        </CardTitle>
        <CardSubtitle>
          {type}
        </CardSubtitle>
        <Button color="danger" onClick={remove}>Delete</Button>
      </CardBlock>
    </Card>
  );
};

export default BeeCard;
