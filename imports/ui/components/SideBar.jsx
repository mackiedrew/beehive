// @flow

// Framework
import React from "react";

// Components
import { Container, Row, Col, Button } from "reactstrap";
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
}): StatelessComponent =>
  <aside>
    <Container className="side-bar" fluid>
      <Row>
        <Col>
          <Button onClick={() => createBee()} color="primary">
            Create Bee ({numberOfBees})
          </Button>
          <Button onClick={() => removeAllBees()} color="danger">
            Delete All Bees
          </Button>
        </Col>
      </Row>
    </Container>
  </aside>;

export default SideBar;
