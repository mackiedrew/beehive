// @flow

// Framework
import React from "react";

// Components
import { Container, Row, Col, ButtonGroup, Button } from "reactstrap";
/**
 * A list of field rows with a header.
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {Element} Stateless functional React component.
 */
const SideBar = ({
  numberOfBees,
  createBee,
  removeAllBees
}: {
  numberOfBees: number,
  createBee: () => void,
  removeAllBees: () => void
}): StatelessComponent => {
  const createBeeType = type => ({ type });
  const createWorker = () => createBee(createBeeType("Worker"));
  const createDrone = () => createBee(createBeeType("Drone"));
  const createQueen = () => createBee(createBeeType("Queen"));
  const removeBees = () => removeAllBees();

  return (
    <aside>
      <Container className="side-bar" fluid>
        <Row>
          <Col>
            <ButtonGroup size="sm">
              <Button onClick={createWorker}>Worker</Button>
              <Button onClick={createDrone}>Drone</Button>
              <Button onClick={createQueen}>Queen</Button>
              <Button onClick={removeBees} color="danger">
                X
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </aside>
  );
};

export default SideBar;
