// @flow

// Framework
import { Meteor } from "meteor/meteor";
import React from "react";

// Components
import { Container, Row, Col, Button, CardColumns } from "reactstrap";
import BeeCard from "./BeeCard";

/**
 * The main game element.
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {Element} Stateless functional React component.
 */
const Game = ({
  bees = [],
  removeBee
}: {
  bees: Array<Bee>,
  removeBee: () => void
}): StatelessComponent =>
  <Container className="game" fluid>
    <Row noGutters>
      <Col>
        <p>Game</p>
      </Col>
    </Row>
    <Row noGutters>
      <Col>
        <p>
          <strong>Total Bees:</strong> {bees.length}
        </p>
      </Col>
    </Row>
    <Row>
      <CardColumns>
        {bees.map(bee => <BeeCard key={bee._id} bee={bee} removeBee={removeBee} />)}
      </CardColumns>
    </Row>
  </Container>;

export default Game;
