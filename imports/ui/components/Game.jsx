// @flow

// Framework
import React from "react";

// Components
import { Container, Row, Col, Button } from "reactstrap";

/**
 * The main game element.
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {Element} Stateless functional React component.
 */
const Game = ({
  bees = [],
  createBee
}: {
  bees: Array<Bee>,
  createBee: () => void
}): StatelessComponent =>
  <Container className="game" fluid>
    <Row noGutters>
      <Col>
        <p>Game</p>
      </Col>
    </Row>
    <Row noGutters>
      <Col>
        <Container fluid>
          <Row noGutters>
            <Col>
              <Button onClick={createBee}>Create New Bee</Button>
            </Col>
          </Row>
          <Row noGutters>
            <Col>
              <p>
                <strong>Bees:</strong> {bees.length}
              </p>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>;

export default Game;
