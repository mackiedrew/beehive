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
  createBee
}: {
  numberOfBees: number,
  createBee: () => void
}): StatelessComponent =>
  <aside>
    <Container className="side-bar" fluid>
      <Row noGutters>
        <Col xs={12}>
          <Button onClick={createBee} color="primary">
            Create Bee ({numberOfBees})
          </Button>
        </Col>
      </Row>
    </Container>
  </aside>;

export default SideBar;
